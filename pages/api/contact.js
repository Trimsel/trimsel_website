import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, phone, email, company, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'contact@trimsel.com',
      subject: `Trimsel Website contact form submission from ${name}`,
      html: `
        <h5>Dear Admin, we have a new query from Trimsel Website. Details:</h5>
        <h6><strong>Name:</strong> ${name}</h6>
        <h6><strong>Mobile Number:</strong> ${phone}</h6>
        <h6><strong>Company:</strong> ${company}</h6>
        <h6><strong>Service:</strong> ${service}</h6>
        <h6><strong>Message:</strong> ${message}</h6>
      `,
    });

    console.log('Message Sent', emailRes.messageId);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}