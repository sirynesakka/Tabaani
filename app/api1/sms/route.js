import Twilio from 'twilio';

export default async function handler(req, res) {
  const { ACCOUNT_SID, AUTH_TOKEN } = process.env;
  const client = Twilio(ACCOUNT_SID, AUTH_TOKEN);

  try {
    const message = await client.messages.create({
      body: 'your reservation is accepted',
      from: '+12568278065', // Your Twilio phone number
      to: '+21658927359', // Recipient's phone number
    });

    res.status(200).json({ sid: message.sid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
