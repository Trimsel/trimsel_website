import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, phone, email, company, service, message, recaptchaToken } = req.body || {};

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
        <p><strong>Service:</strong> ${clean(service)}</p>
        <p><strong>Message:</strong><br/>${clean(message)}</p>
      `,
    });

    console.log("Message sent", emailRes.messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
}
