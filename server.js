const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require('dotenv').config();

const app = express();
const EMAIL_USER = process.env.REACT_APP_EMAIL_USER;
const EMAIL_PASS = process.env.REACT_APP_EMAIL_PASS;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('Server running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const sender = req.body.sender;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: sender,
    to: EMAIL_USER,
    subject: 'Contact Form Submission',
    html: `
    <p>Name: ${sender}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});