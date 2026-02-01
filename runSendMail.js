import { handler } from './netlify/functions/sendMail.js'

async function run() {
  const event = {
    httpMethod: 'POST',
    body: JSON.stringify({ name: 'Test utilisateur', email: 'test@local.test', message: 'Message de test depuis runSendMail' })
  }

  const res = await handler(event)
  console.log('Handler response:', res)
}

run().catch(err => {
  console.error('Erreur lors du run:', err)
  process.exit(1)
})
