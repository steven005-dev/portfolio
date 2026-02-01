import nodemailer from "nodemailer";

async function test() {
  const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER
  const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })

  try {
    await transporter.verify()
    console.log("Transporter ready")

    await transporter.sendMail({
      from: `Test <${smtpUser}>`,
      to: process.env.RECIPIENT_EMAIL || smtpUser,
      subject: "Test Nodemailer local",
      text: "Ceci est un test d'envoi depuis testMail.js"
    })

    console.log("Email envoyé !")
  } catch (err) {
    console.error("Erreur lors du test d'envoi :", err)
    process.exit(1)
  }
}

test()
