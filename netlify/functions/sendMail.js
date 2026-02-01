import nodemailer from "nodemailer"

export async function handler(event) {
  console.log("Fonction sendMail appelée")

  // 🔒 Sécurité : autoriser uniquement POST
  if (event.httpMethod !== "POST") {
    console.log("Methode non autorisée:", event.httpMethod)
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  // 📩 Données envoyées depuis React
  let payload
  try {
    payload = JSON.parse(event.body)
  } catch (err) {
    console.error("Impossible de parser event.body:", err)
    return { statusCode: 400, body: "Invalid JSON" }
  }

  const { name, email, message } = payload

  console.log("Payload reçu:", { name, email, message })

  // Log variables d'environnement utiles (ne PAS logger les mots de passe)
  console.log("SMTP_HOST:", process.env.SMTP_HOST)
  console.log("SMTP_PORT:", process.env.SMTP_PORT)
  const smtpUser = process.env.SMTP_USER || process.env.MAIL_USER
  const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS
  console.log("SMTP_USER:", smtpUser)
  console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL)

  // 🔑 Configuration SMTP
  const portNum = parseInt(process.env.SMTP_PORT, 10) || 465
  const secureFlag = portNum === 465
  console.log("Configuration SMTP utilisée:", { host: process.env.SMTP_HOST, port: portNum, secure: secureFlag, user: smtpUser ? "yes" : "no" })

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: portNum,
    secure: secureFlag,
    auth: {
      user: smtpUser,
      pass: smtpPass
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    // Vérification rapide du transporteur
    await transporter.verify()
    console.log("Transporter prêt: vérification OK")


    // ✉️ Envoi de l’email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <h3>Nouveau message depuis le portfolio</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `
    })

    console.log("sendMail: email envoyé, info:", info)

    // ✅ Réponse au frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }
  } catch (err) {
    console.error("Erreur lors de l'envoi de l'email:", err)
    // Retourner un message générique au frontend
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "send_failed" })
    }
  }
}
