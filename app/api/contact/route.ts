import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json({ error: 'Contact endpoint not configured.' }, { status: 500 });
  }

  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Google Apps Script request failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send contact entry.' }, { status: 500 });
  }
}
