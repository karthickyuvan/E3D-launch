const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
// Set up your Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'e3ddesignhomesko@gmail.com',           // replace with your Gmail
    pass: 'lduzluqgqmjwsyys'        // use an App Password (not your regular password)
  }
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: email,
    to: 'e3ddesign@e3ddesign.com',
    subject: 'New Subscriber from Launch Page',
    text: `You have a new subscriber: ${email}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Email failed');
    } else {
      res.status(200).send('Email sent: ' + info.response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});