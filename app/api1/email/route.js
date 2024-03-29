import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
    
        auth: {
    
            user: username,
            pass: password
        }
    });
    try {
    
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from `,
            html: `
           
            <div style="font-family: 'Times New Roman', Times, serif; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">Cher Monsieur/Madame,</p>
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">J'espère que ce message vous trouve bien.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">Je suis heureux/se de vous informer que votre publication a été <span style="color: green; font-weight: bold; font-style: italic;">confirmé</span>.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">C'est avec plaisir que nous accueillons votre contribution.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">Si vous avez des questions ou des besoins supplémentaires, n'hésitez pas à me contacter directement.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #000; font-weight: bold; font-style: italic;">Cordialement.</p>
        </div>
            `,
        })
    
        return NextResponse.json({ message: "Success: email was sent" })
    
    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }

  }

 