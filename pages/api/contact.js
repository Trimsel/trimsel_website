import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const {
    name,
    phone,
    email,
    company,
    service,
    message,
    recaptchaToken,
    referralSource,
  } = req.body || {};

  // Basic required fields check
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required.",
    });
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error("Missing RECAPTCHA_SECRET_KEY env var");
    return res.status(500).json({ success: false, error: "Server misconfiguration." });
  }

  if (!recaptchaToken) {
    return res.status(400).json({ success: false, error: "reCAPTCHA token missing." });
  }

  try {
    const verificationRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }).toString(),
    });
    const verificationData = await verificationRes.json();
    if (!verificationData.success) {
      return res.status(400).json({ success: false, error: "reCAPTCHA verification failed." });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error", error);
    return res.status(500).json({ success: false, error: "Failed to verify reCAPTCHA." });
  }

  // Simple HTML-escape to prevent script injection
  const clean = (str = "") =>
    str.replace(/[<>&'"]/g, (c) => ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&#39;",
      '"': "&quot;",
    })[c]);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: `"Trimsel Website" <${process.env.user}>`,
      to: "contact@trimsel.com",
      replyTo: email,
      subject: `Trimsel Website contact form submission from ${clean(name)}`,
      html: `
        <h5>New query from Trimsel Website</h5>
        <p><strong>Name:</strong> ${clean(name)}</p>
        <p><strong>Email:</strong> ${clean(email)}</p>
        <p><strong>Phone:</strong> ${clean(phone)}</p>
        <p><strong>Company:</strong> ${clean(company)}</p>
        ${service ? `<p><strong>Service:</strong> ${clean(service)}</p>` : ""}
        <p><strong>How they found us:</strong> ${clean(referralSource)}</p>
        <p><strong>Message:</strong><br/>${clean(message)}</p>
      `,
    });

    console.log("Message sent", emailRes.messageId);

    await maybeNotifySlack({
      name,
      email,
      phone,
      company,
      service,
      referralSource,
      message,
    });

    // Create a Zoho CRM lead if credentials are present; failure won't block the user
    await maybeCreateZohoLead({
      name,
      email,
      phone,
      company,
      service,
      referralSource,
      message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
}

async function maybeNotifySlack(lead) {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;
  if (!token || !channel) {
    return;
  }

  const clean = (value) => (value ? String(value) : "—");

  const lines = [
    "*New Website Lead*",
    `• *Name:* ${clean(lead.name)}`,
    `• *Email:* ${clean(lead.email)}`,
    `• *Phone:* ${clean(lead.phone)}`,
    `• *Company:* ${clean(lead.company)}`,
    lead.service ? `• *Service:* ${clean(lead.service)}` : null,
    lead.referralSource ? `• *Source:* ${clean(lead.referralSource)}` : null,
    `• *Message:* ${clean(lead.message)}`,
  ].filter(Boolean);
  const text = lines.join("\n");

  try {
    const response = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel,
        text,
      }),
    });

    const data = await response.json();
    if (!data.ok) {
      console.error("Slack notification failed", data);
    }
  } catch (error) {
    console.error("Slack notification error", error);
  }
}

async function maybeCreateZohoLead(lead) {
  // Supports either a pre-generated access token (ZOHO_ACCESS_TOKEN)
  // or a refresh token flow (ZOHO_REFRESH_TOKEN + ZOHO_CLIENT_ID + ZOHO_CLIENT_SECRET)
  const accessToken = await getZohoAccessToken();
  if (!accessToken) {
    return;
  }

  const apiBase = process.env.ZOHO_API_BASE || "https://www.zohoapis.com";

  const nameParts = (lead.name || "").trim().split(" ").filter(Boolean);
  const lastName = nameParts.length > 1 ? nameParts.slice(-1).join(" ") : lead.name || "Website Lead";
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : "";

  const payload = {
    data: [
      {
        Last_Name: lastName,
        First_Name: firstName,
        Email: lead.email || undefined,
        Phone: lead.phone || undefined,
        Company: lead.company || "Website Lead",
        Lead_Source: lead.referralSource || "Website",
        Description: lead.message || "",
      },
    ],
    trigger: ["approval", "workflow", "blueprint"],
  };

  try {
    const response = await fetch(`${apiBase}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok || (data?.data && data.data[0]?.status !== "success")) {
      console.error("Zoho lead creation failed", data);
    }
  } catch (error) {
    console.error("Zoho lead creation error", error);
  }
}

async function getZohoAccessToken() {
  if (process.env.ZOHO_ACCESS_TOKEN) {
    return process.env.ZOHO_ACCESS_TOKEN;
  }

  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const accountsBase = process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.com";

  if (!refreshToken || !clientId || !clientSecret) {
    return null;
  }

  try {
    const tokenRes = await fetch(
      `${accountsBase}/oauth/v2/token?refresh_token=${encodeURIComponent(
        refreshToken
      )}&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(
        clientSecret
      )}&grant_type=refresh_token`,
      { method: "POST" }
    );
    const tokenData = await tokenRes.json();
    if (tokenData?.access_token) {
      return tokenData.access_token;
    }
    console.error("Zoho token fetch failed", tokenData);
  } catch (error) {
    console.error("Zoho token fetch error", error);
  }
  return null;
}
