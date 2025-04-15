import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { email } = req.body;

  // Validate email input
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Ensure required environment variables are set
  if (!process.env.user || !process.env.pass || !process.env.CONTACT_EMAIL) {
    return res.status(500).json({ message: 'Server misconfiguration: Missing email credentials' });
  }

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
      subject: `Trimsel Website Consultation Form Submission`,
      html: `
        <h5>Dear Admin, we have a new meeting consultation query.</h5>
        <h6><strong>Email:</strong> ${email}</h6><br>
      `,
    });

    console.log('Message Sent', emailRes.messageId);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Failed to send email', error });
  }
}