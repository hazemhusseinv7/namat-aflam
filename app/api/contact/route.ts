import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

const resendApiKey = process.env.RESEND_API_KEY,
  contactEmail = process.env.CONTACT_EMAIL,
  fromEmail = process.env.FROM_EMAIL;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not defined in environment variables");
}
if (!contactEmail) {
  console.error("CONTACT_EMAIL is not defined in environment variables");
}
if (!fromEmail) {
  console.error("FROM_EMAIL is not defined in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error("Resend client not initialized");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!contactEmail || !fromEmail) {
      console.error("Required environment variables are not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: contactEmail,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmail({
        name,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
