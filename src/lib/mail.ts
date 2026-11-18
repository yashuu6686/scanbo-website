import nodemailer from "nodemailer";

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export function getMailConfig() {
  return {
    host: required("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT || "587"),
    secure: String(process.env.SMTP_SECURE || "false").toLowerCase() === "true",
    user: required("SMTP_USER"),
    pass: required("SMTP_PASS"),
    from: required("MAIL_FROM"),
    to: required("MAIL_TO"),
  };
}

export function createTransport() {
  const cfg = getMailConfig();
  return {
    cfg,
    transporter: nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: {
        user: cfg.user,
        pass: cfg.pass,
      },
    }),
  };
}

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rows(entries: Array<[string, unknown]>): string {
  return entries
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:700;vertical-align:top">${esc(label)}</td><td style="padding:6px 0">${esc(value)}</td></tr>`,
    )
    .join("");
}

export async function sendContactMail(data: {
  firstName?: string;
  lastName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  organisation?: string;
  role?: string;
  message?: string;
  country?: string;
}) {
  const { cfg, transporter } = createTransport();
  const name = [data.firstName, data.lastName].filter(Boolean).join(" ").trim();
  const phone = [data.countryCode, data.phone].filter(Boolean).join(" ").trim();

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    replyTo: data.email || undefined,
    subject: `Contact form: ${name || data.email || "New inquiry"}`,
    text: [
      `Name: ${name}`,
      `Email: ${data.email || ""}`,
      `Phone: ${phone}`,
      `Organisation: ${data.organisation || ""}`,
      `Role: ${data.role || ""}`,
      `Country: ${data.country || ""}`,
      "",
      data.message || "",
    ].join("\n"),
    html: `<table style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#06202E">${rows([
      ["Name", name],
      ["Email", data.email],
      ["Phone", phone],
      ["Organisation", data.organisation],
      ["Role", data.role],
      ["Country", data.country],
      ["Message", data.message],
    ])}</table>`,
  });
}

export async function sendCareerMail(data: {
  name?: string;
  email?: string;
  position?: string;
  countryCode?: string;
  phone?: string;
  note?: string;
  resume?: File | null;
}) {
  const { cfg, transporter } = createTransport();
  const phone = [data.countryCode, data.phone].filter(Boolean).join(" ").trim();
  const attachments = [];

  if (data.resume && typeof data.resume.arrayBuffer === "function") {
    const buffer = Buffer.from(await data.resume.arrayBuffer());
    attachments.push({
      filename: data.resume.name || "resume",
      content: buffer,
      contentType: data.resume.type || undefined,
    });
  }

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    replyTo: data.email || undefined,
    subject: `Career application: ${data.position || "General"} — ${data.name || data.email || "Applicant"}`,
    text: [
      `Name: ${data.name || ""}`,
      `Email: ${data.email || ""}`,
      `Phone: ${phone}`,
      `Position: ${data.position || ""}`,
      "",
      data.note || "",
    ].join("\n"),
    html: `<table style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#06202E">${rows([
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", phone],
      ["Position", data.position],
      ["Note", data.note],
    ])}</table>`,
    attachments,
  });
}
