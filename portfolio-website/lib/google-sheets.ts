export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitToGoogleSheets(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Google Apps Script Web App URL
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!scriptUrl) {
      throw new Error("Google Sheets URL not configured");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Since we're using no-cors, we can't read the response
    // We'll assume success if no error was thrown
    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}