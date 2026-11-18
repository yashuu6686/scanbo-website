import { NextResponse } from "next/server";

/**
 * Matches the production form endpoint contract used by /assets/site.js:
 * success responses must be JSON with `{ ok: true }`.
 *
 * Wire this to your real backend / CRM when ready. Until then submissions are
 * accepted so contact and careers forms behave like the live site UI flow.
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const formType = String(form.get("formType") || "");
      if (formType !== "career") {
        return NextResponse.json(
          { ok: false, error: "Unsupported form type" },
          { status: 400 },
        );
      }
      // Acknowledge career application (resume included in formData).
      return NextResponse.json({ ok: true });
    }

    const body = await request.json().catch(() => null);
    if (!body || body.formType !== "contact") {
      return NextResponse.json(
        { ok: false, error: "Unsupported form type" },
        { status: 400 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "failed" }, { status: 500 });
  }
}
