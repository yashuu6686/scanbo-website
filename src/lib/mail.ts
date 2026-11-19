import nodemailer, { type Transporter } from "nodemailer";
import path from "path";

const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);
const ALLOWED_RESUME_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/octet-stream",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[0-9]{7,20}$/;
const COUNTRY_CODE_REGEX = /^\+[1-9][0-9]{0,3}$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s'.-]*$/;

export type FormType = "career" | "contact" | "demo" | "investor" | "default";

export class MailValidationError extends Error {
  errors: string[];
  constructor(errors: string[]) {
    super(errors[0] || "Invalid form submission.");
    this.name = "MailValidationError";
    this.errors = errors;
  }
}

export class MailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailConfigError";
  }
}

function asText(value: unknown, maxLength = 2000): string {
  const input = Array.isArray(value) ? value[0] : value;
  if (input === undefined || input === null) return "";
  return String(input).trim().slice(0, maxLength);
}

function asPhone(value: unknown, maxLength = 20): string {
  return asText(value, maxLength).replace(/\D/g, "").slice(0, maxLength);
}

function asCountryCode(value: unknown): string {
  const raw = asText(value, 8).replace(/[^\d+]/g, "");
  if (!raw) return "";
  const normalized = raw.startsWith("+") ? raw : `+${raw}`;
  return COUNTRY_CODE_REGEX.test(normalized) ? normalized : "";
}

function buildPhoneE164(countryCode: string, phone: string): string {
  const normalizedCountryCode = asCountryCode(countryCode);
  const normalizedPhone = asPhone(phone, 20);
  if (!normalizedCountryCode || !PHONE_REGEX.test(normalizedPhone)) return "";
  return normalizedCountryCode + normalizedPhone.replace(/^0+/, "");
}

function asMultilineText(value: unknown, maxLength = 10000): string {
  const input = Array.isArray(value) ? value[0] : value;
  if (input === undefined || input === null) return "";
  return String(input).replace(/\r/g, "").trim().slice(0, maxLength);
}

function asHeaderText(value: unknown, maxLength = 320): string {
  return asText(value, maxLength).replace(/[\r\n]+/g, " ").trim();
}

/** Accepts `Name <email>`, bare email, or `Name email@x.com` (Express .env style). */
function asMailFrom(value: unknown, fallback = ""): string {
  const raw = asHeaderText(value || fallback, 320);
  if (!raw) return "";
  if (raw.includes("<") && raw.includes(">")) return raw;
  const match = raw.match(/^(.*?)([^\s<>]+@[^\s<>]+)$/);
  if (!match) return raw;
  const name = match[1].trim();
  const email = match[2].trim();
  return name ? `${name} <${email}>` : email;
}

function parseCsv(value: unknown): string[] {
  return String(value || "")
    .split(",")
    .map((item) => item.replace(/[\r\n]+/g, " ").trim())
    .filter(Boolean);
}

function hasRealEnvValue(value: unknown): boolean {
  const normalized = asText(value, 320).toLowerCase();
  return Boolean(
    normalized &&
      !normalized.startsWith("replace-with-") &&
      !normalized.startsWith("your-") &&
      !normalized.includes("your-provider") &&
      !normalized.includes("your-smtp"),
  );
}

function safeFileName(fileName: string): string {
  const base = String(fileName || "resume")
    .replace(/[^a-zA-Z0-9._()\-\s]/g, "_")
    .trim();
  return base || "resume";
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type MailProfile = {
  name: string;
  transporter: Transporter | null;
  from: string;
  recipients: string[];
};

type Attachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

type NormalizedSubmission = {
  label: string;
  subjectName: string;
  replyTo: string;
  fields: Array<[string, string]>;
  attachments: Attachment[];
};

function smtpBase() {
  return {
    host: asText(process.env.SMTP_HOST, 200),
    port: Number(process.env.SMTP_PORT || 587),
    secure:
      String(process.env.SMTP_SECURE || "").toLowerCase() === "true" ||
      Number(process.env.SMTP_PORT || 587) === 465,
  };
}

function createTransporter(profileName: string, smtpUser: string, smtpPass: string): Transporter | null {
  const { host, port, secure } = smtpBase();
  if (!(hasRealEnvValue(host) && port && hasRealEnvValue(smtpUser) && hasRealEnvValue(smtpPass))) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

function getMailProfile(formType: FormType): MailProfile {
  const defaultSmtpUser = asText(process.env.SMTP_USER, 320);
  const defaultSmtpPass = asText(process.env.SMTP_PASS, 320);
  const defaultMailFrom = asMailFrom(process.env.MAIL_FROM, defaultSmtpUser);
  const defaultMailRecipients = parseCsv(process.env.MAIL_TO || defaultSmtpUser);
  const defaultTransporter = createTransporter("default", defaultSmtpUser, defaultSmtpPass);

  if (formType === "career") {
    const user = asText(process.env.CAREER_SMTP_USER || process.env.CAREERS_SMTP_USER, 320);
    const pass = asText(process.env.CAREER_SMTP_PASS || process.env.CAREERS_SMTP_PASS, 320);
    const from = asMailFrom(
      process.env.CAREER_MAIL_FROM || process.env.CAREERS_MAIL_FROM || user,
      defaultMailFrom,
    );
    const recipients = parseCsv(process.env.CAREER_MAIL_TO || process.env.CAREERS_MAIL_TO || user);
    return {
      name: "career",
      transporter: createTransporter("career", user, pass) || defaultTransporter,
      from: from || defaultMailFrom,
      recipients: recipients.length ? recipients : defaultMailRecipients,
    };
  }

  if (formType === "contact") {
    const user = asText(process.env.CONTACT_SMTP_USER || process.env.GET_IN_TOUCH_SMTP_USER, 320);
    const pass = asText(process.env.CONTACT_SMTP_PASS || process.env.GET_IN_TOUCH_SMTP_PASS, 320);
    const from = asMailFrom(
      process.env.CONTACT_MAIL_FROM || process.env.GET_IN_TOUCH_MAIL_FROM || user,
      defaultMailFrom,
    );
    const recipients = parseCsv(
      process.env.CONTACT_MAIL_TO || process.env.GET_IN_TOUCH_MAIL_TO || user,
    );
    return {
      name: "contact",
      transporter: createTransporter("contact", user, pass) || defaultTransporter,
      from: from || defaultMailFrom,
      recipients: recipients.length ? recipients : defaultMailRecipients,
    };
  }

  if (formType === "demo") {
    const user = asText(process.env.DEMO_SMTP_USER || process.env.BOOK_DEMO_SMTP_USER, 320);
    const pass = asText(process.env.DEMO_SMTP_PASS || process.env.BOOK_DEMO_SMTP_PASS, 320);
    const from = asMailFrom(
      process.env.DEMO_MAIL_FROM || process.env.BOOK_DEMO_MAIL_FROM || user,
      defaultMailFrom,
    );
    const recipients = parseCsv(process.env.DEMO_MAIL_TO || process.env.BOOK_DEMO_MAIL_TO || user);
    return {
      name: "demo",
      transporter: createTransporter("demo", user, pass) || defaultTransporter,
      from: from || defaultMailFrom,
      recipients: recipients.length ? recipients : defaultMailRecipients,
    };
  }

  if (formType === "investor") {
    const user = asText(process.env.INVESTOR_SMTP_USER, 320);
    const pass = asText(process.env.INVESTOR_SMTP_PASS, 320);
    const from = asMailFrom(process.env.INVESTOR_MAIL_FROM || user, defaultMailFrom);
    const recipients = parseCsv(process.env.INVESTOR_MAIL_TO || user);
    return {
      name: "investor",
      transporter: createTransporter("investor", user, pass) || defaultTransporter,
      from: from || defaultMailFrom,
      recipients: recipients.length ? recipients : defaultMailRecipients,
    };
  }

  return {
    name: "default",
    transporter: defaultTransporter,
    from: defaultMailFrom,
    recipients: defaultMailRecipients,
  };
}

function validateMailConfig(profile: MailProfile): string {
  if (!profile.transporter) {
    return "Mail service is not configured for this form type.";
  }
  if (profile.recipients.length === 0) {
    return "Mail recipients are not configured for this form type.";
  }
  if (!profile.from) {
    return "Mail sender is not configured for this form type.";
  }
  return "";
}

function validatePhoneVerification(countryCodeRaw: unknown, phoneRaw: unknown) {
  const countryCode = asCountryCode(countryCodeRaw);
  const phone = asPhone(phoneRaw, 20);
  const phoneE164 = buildPhoneE164(countryCode, phone);
  const errors: string[] = [];

  if (!countryCode) errors.push("Please select a valid phone country code.");
  if (!phone) errors.push("Please enter your phone number.");
  else if (!PHONE_REGEX.test(phone)) errors.push("Please enter a valid phone number.");
  if (countryCode && phone && !phoneE164) {
    errors.push("Please enter a valid phone number.");
  }

  return { errors, countryCode, phone, phoneE164 };
}

async function resumeAttachment(resume: File | null): Promise<{ errors: string[]; attachment: Attachment | null }> {
  const errors: string[] = [];
  if (!resume || typeof resume.arrayBuffer !== "function") {
    return { errors: ["Please upload your CV / Resume."], attachment: null };
  }

  const extension = path.extname(resume.name || "").toLowerCase();
  const hasValidExtension = ALLOWED_RESUME_EXTENSIONS.has(extension);
  const hasValidMime = !resume.type || ALLOWED_RESUME_MIME_TYPES.has(resume.type);

  if (!hasValidExtension || !hasValidMime) {
    errors.push("Resume must be a PDF, DOC, or DOCX file.");
  }
  if (resume.size > MAX_RESUME_SIZE_BYTES) {
    errors.push("Resume file size must be 5MB or less.");
  }
  if (errors.length) return { errors, attachment: null };

  const buffer = Buffer.from(await resume.arrayBuffer());
  return {
    errors: [],
    attachment: {
      filename: safeFileName(resume.name),
      content: buffer,
      contentType: resume.type || undefined,
    },
  };
}

function buildEmail(submission: NormalizedSubmission, profile: MailProfile) {
  const timestamp = new Date().toISOString();
  const subjectName = asHeaderText(submission.subjectName || "New submission", 200);
  const subject = `[Scanbo Website] ${submission.label} - ${subjectName}`;

  const fieldRows = submission.fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #dde7ef;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 10px;border:1px solid #dde7ef;white-space:pre-wrap;">${escapeHtml(value || "-")}</td></tr>`,
    )
    .join("");

  const textLines = [`${submission.label}`, `Submitted at: ${timestamp}`, ""];
  submission.fields.forEach(([label, value]) => {
    textLines.push(`${label}: ${value || "-"}`);
  });

  return {
    from: profile.from,
    to: profile.recipients.join(", "),
    replyTo: submission.replyTo ? asHeaderText(submission.replyTo, 320) : undefined,
    subject,
    text: textLines.join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#142a36;line-height:1.5;">
        <h2 style="margin:0 0 6px;">${escapeHtml(submission.label)}</h2>
        <p style="margin:0 0 16px;color:#4c6573;">Submitted at: ${escapeHtml(timestamp)}</p>
        <table style="border-collapse:collapse;border:1px solid #dde7ef;">
          <tbody>${fieldRows}</tbody>
        </table>
      </div>
    `,
    attachments: submission.attachments,
  };
}

async function sendSubmission(formType: FormType, submission: NormalizedSubmission) {
  const profile = getMailProfile(formType);
  const configError = validateMailConfig(profile);
  if (configError) throw new MailConfigError(configError);
  await profile.transporter!.sendMail(buildEmail(submission, profile));
}

export async function sendCareerMail(data: {
  name?: unknown;
  email?: unknown;
  position?: unknown;
  positionMeta?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  note?: unknown;
  resume?: File | null;
}) {
  const errors: string[] = [];
  const name = asText(data.name, 120);
  const email = asText(data.email, 200).toLowerCase();
  const phoneVerification = validatePhoneVerification(data.countryCode, data.phone);
  const position = asText(data.position, 180) || "General Application";
  const positionMeta = asText(data.positionMeta, 240);
  const note = asMultilineText(data.note, 5000);

  if (!name) errors.push("Please enter your full name.");
  else if (!NAME_REGEX.test(name)) errors.push("Please enter a name without numbers.");
  if (!email) errors.push("Please enter your email.");
  else if (!EMAIL_REGEX.test(email)) errors.push("Please enter a valid email address.");
  errors.push(...phoneVerification.errors);

  const resumeResult = await resumeAttachment(data.resume ?? null);
  errors.push(...resumeResult.errors);

  if (errors.length) throw new MailValidationError(errors);

  await sendSubmission("career", {
    label: "Careers Application",
    subjectName: name,
    replyTo: email,
    fields: [
      ["Name", name],
      ["Email", email],
      ["Phone", phoneVerification.phoneE164],
      ["Position", position],
      ["Position Meta", positionMeta || "-"],
      ["Cover Note", note || "-"],
    ],
    attachments: resumeResult.attachment ? [resumeResult.attachment] : [],
  });
}

export async function sendContactMail(data: {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  organisation?: unknown;
  role?: unknown;
  message?: unknown;
  country?: unknown;
}) {
  const errors: string[] = [];
  const firstName = asText(data.firstName, 120);
  const lastName = asText(data.lastName, 120);
  const email = asText(data.email, 200).toLowerCase();
  const phoneVerification = validatePhoneVerification(data.countryCode, data.phone);
  const organisation = asText(data.organisation, 200);
  const role = asText(data.role, 160);
  const message = asMultilineText(data.message, 8000);
  const country = asText(data.country, 120);

  if (!firstName) errors.push("Please enter your first name.");
  else if (!NAME_REGEX.test(firstName)) errors.push("Please enter a first name without numbers.");
  if (!lastName) errors.push("Please enter your last name.");
  else if (!NAME_REGEX.test(lastName)) errors.push("Please enter a last name without numbers.");
  if (!email) errors.push("Please enter your email address.");
  else if (!EMAIL_REGEX.test(email)) errors.push("Please enter a valid email address.");
  errors.push(...phoneVerification.errors);
  if (!role) errors.push("Please select your role.");
  if (!message) errors.push("Please enter a message.");

  if (errors.length) throw new MailValidationError(errors);

  await sendSubmission("contact", {
    label: "Contact Request",
    subjectName: `${firstName} ${lastName}`.trim(),
    replyTo: email,
    fields: [
      ["First Name", firstName],
      ["Last Name", lastName],
      ["Email", email],
      ["Phone", phoneVerification.phoneE164],
      ["Organisation", organisation || "-"],
      ["Role", role],
      ["Country", country || "-"],
      ["Message", message],
    ],
    attachments: [],
  });
}

export function getMailHealth() {
  const types: FormType[] = ["default", "demo", "career", "investor", "contact"];
  const mailProfiles: Record<string, boolean> = {};
  for (const type of types) {
    const profile = getMailProfile(type);
    mailProfiles[type] = Boolean(
      profile.transporter && profile.recipients.length > 0 && profile.from,
    );
  }
  return {
    ok: true,
    api: "scanbo-forms",
    mailConfigured: mailProfiles.default,
    mailProfiles,
  };
}
