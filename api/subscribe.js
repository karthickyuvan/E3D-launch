const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'e3ddesignhomesko@gmail.com',
      pass: 'lduzluqgqmjwsyys',
    },
  });

  const mailOptions = {
    from: email,
    to: 'e3ddesign@e3ddesign.com',
    subject: 'New Subscriber from Launch Page',
    text: `You have a new subscriber: ${email}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent: ' + info.response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Email failed');
  }
};
