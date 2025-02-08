import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const {email} = req.body;

  const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 465,
    secure : true,
    auth : {
      user : process.env.user,
      pass : process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from : email,
      to : 'aktester026@gmail.com',
      subject : `Minitzon Website consultation form submission`,
      html : `<h5>Dear Admin we have a new meeting consultation query</h5>
      <h6><strong>Email : </strong> ${email}</h6><br>
      `,
    });
    console.log('Message Sent',emailRes.messageId);
  } catch (error) {
    console.log(err)
  }

  res.status(200).json(req.body);
}