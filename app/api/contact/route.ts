import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SHEETS_URL;

    if (!scriptUrl) {
      return NextResponse.json({ error: "Server is not configured for contact form submissions." }, { status: 500 });
    }

    const payload = (await request.json()) as ContactFormData;

    if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit form." }, { status: 500 });
  }
}
