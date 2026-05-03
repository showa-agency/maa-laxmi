import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-api-key",
};

export const runtime = "nodejs";

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: corsHeaders });
}

async function sendEmail(name: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.MAIL_TO,
    subject: `New Booking Enquiry from ${name}`,
    text: `Name: ${name}\nMessage: ${message}`,
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  if (!process.env.EMAIL || !process.env.PASSWORD || !process.env.MAIL_TO) {
    return jsonResponse({ error: "Email service is not configured" }, 500);
  }

  let payload: { name?: string; message?: string };
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON payload" }, 400);
  }

  const { name, message } = payload;
  if (!name || !message) {
    return jsonResponse({ error: "Name and message are required" }, 400);
  }

  try {
    await sendEmail(name, message);
    return jsonResponse({
      message:
        "Thank you! Your booking enquiry has been sent to our team. We will contact you shortly.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return jsonResponse({ error: "Failed to send email" }, 500);
  }
}
