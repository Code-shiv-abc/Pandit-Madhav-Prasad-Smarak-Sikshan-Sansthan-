import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SCHOOL_INFO } from '@/config/school';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend testing domain
      to: SCHOOL_INFO.email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Failed to send message:', error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
