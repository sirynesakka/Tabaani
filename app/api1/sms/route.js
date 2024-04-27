// api1/sms.js
import Twilio from "twilio";
import { NextResponse } from "next/server";

export async function POST(request) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;

  const client = Twilio(accountSid, authToken);
  const { phone, msg } = await request.json();

  try {
    const result = await client.messages.create({
      body: msg,
      from: "+12568278065", // Your Twilio number
      to: phone,
    });
    console.log("SMS sent successfully:", result);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.error("Failed to send SMS", { status: 500 });
  }
}
