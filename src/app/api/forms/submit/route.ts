import { NextResponse } from "next/server";
import { sendCareerMail, sendContactMail } from "@/lib/mail";

/**
 * Matches the production form endpoint contract used by /assets/site.js:
 * success responses must be JSON with `{ ok: true }`.
 *
 * Contact + careers submissions are emailed via SMTP (see .env.local).
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

      const resume = form.get("resume");
      await sendCareerMail({
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        position: String(form.get("position") || "General Application"),
        countryCode: String(form.get("countryCode") || ""),
        phone: String(form.get("phone") || ""),
        note: String(form.get("note") || ""),
        resume: resume instanceof File ? resume : null,
      });

      return NextResponse.json({ ok: true });
    }

    const body = await request.json().catch(() => null);
    if (!body || body.formType !== "contact") {
      return NextResponse.json(
        { ok: false, error: "Unsupported form type" },
        { status: 400 },
      );
    }

    await sendContactMail({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      countryCode: body.countryCode,
      phone: body.phone,
      organisation: body.organisation,
      role: body.role,
      message: body.message,
      country: body.country,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[forms/submit]", err);
    return NextResponse.json({ ok: false, error: "failed" }, { status: 500 });
  }
}
