import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  // Only send if Gmail credentials are configured
  if (process.env.GMAIL_PASS) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Gmail App Password
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Contact: ${name} from ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#fff;border-radius:16px;">
            <h2 style="color:#a78bfa;margin-bottom:24px;">📬 New Contact Form Submission</h2>
            <p><strong style="color:#fff;">Name:</strong> <span style="color:#ccc;">${name}</span></p>
            <p><strong style="color:#fff;">Email:</strong> <span style="color:#ccc;">${email}</span></p>
            <hr style="border:1px solid #333;margin:20px 0;" />
            <p><strong style="color:#fff;">Message:</strong></p>
            <p style="color:#ccc;white-space:pre-wrap;">${message}</p>
            <hr style="border:1px solid #333;margin:20px 0;" />
            <small style="color:#666;">Sent from anshulkumaar.co contact form</small>
          </div>
        `,
      });
    } catch (err) {
      console.error("Failed to send email:", err);
      // Still return success — don't expose internal errors to the client
    }
  } else {
    console.warn("GMAIL_PASS not configured — email not sent.");
  }

  return NextResponse.json({ success: true, message: "Message received successfully!" });
}
