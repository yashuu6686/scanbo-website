import { NextResponse } from "next/server";
import {
  MailConfigError,
  MailValidationError,
  sendCareerMail,
  sendContactMail,
} from "@/lib/mail";

export const runtime = "nodejs";

/**
 * Matches the production Express /api/forms/submit contract:
 * success → `{ ok: true, message }`
 * failure → `{ ok: false, message, errors? }`
 *
 * Uses per-form SMTP profiles from env (CAREER_*, CONTACT_*, DEMO_*, …).
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const formType = String(form.get("formType") || "")
        .trim()
        .toLowerCase();

      if (formType !== "career") {
        return NextResponse.json(
          { ok: false, message: "Unsupported form type." },
          { status: 400 },
        );
      }

      // Honeypot — silently accept bots
      if (String(form.get("website_hp") || "").trim()) {
        return NextResponse.json({ ok: true, message: "Submitted successfully." });
      }

      const resume = form.get("resume");
      await sendCareerMail({
        name: form.get("name"),
        email: form.get("email"),
        position: form.get("position"),
        positionMeta: form.get("positionMeta"),
        countryCode: form.get("countryCode"),
        phone: form.get("phone"),
        note: form.get("note"),
        resume: resume instanceof File ? resume : null,
      });

      return NextResponse.json({ ok: true, message: "Submitted successfully." });
    }

    const body = await request.json().catch(() => null);
    const formType = String(body?.formType || "")
      .trim()
      .toLowerCase();

    if (!body || formType !== "contact") {
      return NextResponse.json(
        { ok: false, message: "Unsupported form type." },
        { status: 400 },
      );
    }

    if (String(body.website_hp || "").trim()) {
      return NextResponse.json({ ok: true, message: "Submitted successfully." });
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

    return NextResponse.json({ ok: true, message: "Submitted successfully." });
  } catch (err) {
    if (err instanceof MailValidationError) {
      return NextResponse.json(
        {
          ok: false,
          message: err.message,
          errors: err.errors,
        },
        { status: 400 },
      );
    }

    if (err instanceof MailConfigError) {
      console.error("[forms/submit] mail config:", err.message);
      return NextResponse.json({ ok: false, message: err.message }, { status: 500 });
    }

    const detail = err instanceof Error ? err.message : String(err);
    console.error("[forms/submit]", detail);
    const authFailed = /invalid login|badcredentials|eauth|username and password/i.test(detail);
    return NextResponse.json(
      {
        ok: false,
        message: authFailed
          ? "Mail service login failed. Please check SMTP credentials."
          : "Unable to submit right now. Please try again.",
      },
      { status: 500 },
    );
  }
}
