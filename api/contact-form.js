const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { email, name, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'e3ddesignhomesko@gmail.com',
      pass: 'lduzluqgqmjwsyys',
    },
  });

  const mailOptions = {
    from: email,
    to: 'e3ddesign@e3ddesign.com', // your receiving email
    subject: 'New Contact Form Submission',
    text: `
You have a new message from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Email failed');
  }
};
