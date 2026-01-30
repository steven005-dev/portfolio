const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.RECIPIENT_EMAIL || '[redacted-email]';

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.error('SMTP credentials are not set in environment variables');
    return res.status(500).json({ ok: false, error: 'SMTP not configured' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: smtpPort == 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: recipient,
      subject: `Nouveau message portfolio de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Failed to send email', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`);
});
