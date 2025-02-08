import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const {name,phone,email, skype, company,service,message} = req.body;

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
      subject : `Minitzon Website contact form submission from ${name}`,
      html : `<h5>Dear Admin we have a new query from Minitzon Website and their details as follows</h5>
      <h6><strong>Name : </strong> ${name}</h6><br>
      <h6><strong>Mobile Number : </strong> ${phone}</h6><br>
      <h6><strong>Skype ID : </strong> ${skype}</h6>
      <h6><strong>Company : </strong> ${company}</h6>
      <h6><strong>Service : </strong> ${service}</h6>
      <h6><strong>Message : </strong> ${message}</h6>
      `,
    });
    console.log('Message Sent',emailRes.messageId);
  } catch (error) {
    console.log(err)
  }

  res.status(200).json(req.body);
}
