export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitToGoogleSheets(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      return {
        success: false,
        error: result.error || "Failed to submit form",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
