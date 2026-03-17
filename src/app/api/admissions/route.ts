import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SCHOOL_INFO } from '@/config/school';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, grade, parentName, phone, email } = body;

    if (!studentName || !grade || !parentName || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend testing domain
      to: SCHOOL_INFO.emailAdmissions,
      subject: `New Admissions Application: ${studentName}`,
      html: `
        <h2>New Admissions Application</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Grade Applying For:</strong> ${grade}</p>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Contact Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Failed to send application:', error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
