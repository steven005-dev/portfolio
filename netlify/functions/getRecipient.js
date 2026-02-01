exports.handler = async function (event, context) {
  const email = process.env.RECIPIENT_EMAIL || '';
  if (!email) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Recipient not configured' })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ email })
  };
};
