/** About hub + shared about-page structured datasets. */

export interface PersonCard {
  id: number;
  role: string;
  name: string;
  bio: string;
}

export interface CertBadge {
  id: number;
  label: string;
}

export interface GlanceCard {
  id: number;
  kicker: string;
  title: string;
  description: string;
}

export interface PrincipleItem {
  id: number;
  num: string;
  text: string;
}

export interface PcardItem {
  id: number;
  kicker: string;
  title: string;
  description: string;
}

/* ─── About hub: leadership ─── */

export const leadershipPeople: PersonCard[] = [
  {
    id: 1,
    role: "Founder & CEO",
    name: "Ashissh Raichura",
    bio: "30+ years in technology, with successful exits. Double PhD in cloud computing and AI, Simon Fraser University.",
  },
  {
    id: 2,
    role: "Co-founder, Asia",
    name: "Arvind Rajan",
    bio: "20+ years operating in Southeast Asia. Former President Director, Toll Global Logistics Indonesia.",
  },
  {
    id: 3,
    role: "CIO & Director",
    name: "Sokhie Puar",
    bio: "35+ years in capital markets. Leads investment and corporate governance.",
  },
];

/* ─── About hub: medical advisory ─── */

export const medicalAdvisoryTeam: PersonCard[] = [
  {
    id: 1,
    role: "Urology",
    name: "Dr. Jaime Landman",
    bio: "Chair of Urology, UC Irvine. 360+ peer-reviewed publications.",
  },
  {
    id: 2,
    role: "Urology",
    name: "Dr. Dean Elterman",
    bio: "Associate Professor of Urology, University of Toronto.",
  },
  {
    id: 3,
    role: "Endocrinology",
    name: "Dr. Tom Elliott",
    bio: "Endocrinology & Metabolism, UBC. Founder of BC Diabetes.",
  },
  {
    id: 4,
    role: "Cardiology",
    name: "Dr. Krishna Sudhir",
    bio: "30+ years in cardiovascular medicine; MedTech leadership at Abbott and J&J.",
  },
];

/* ─── About hub: cert badges ─── */

export const aboutCertBadges: CertBadge[] = [
  { id: 1, label: "CDSCO" },
  { id: 2, label: "ISO 13485" },
  { id: 3, label: "MDSAP" },
  { id: 4, label: "ISO 27001" },
  { id: 5, label: "SOC 2 Type II" },
  { id: 6, label: "HIPAA" },
  { id: 7, label: "GDPR" },
];

/* ─── Company: glance pcards ─── */

export const companyGlanceCards: GlanceCard[] = [
  {
    id: 1,
    kicker: "Deployed",
    title: "750+ devices",
    description:
      "Deployed across 650+ clinical settings, with 7M+ vital tests completed.",
  },
  {
    id: 2,
    kicker: "Revenue",
    title: "3 active revenue streams",
    description: "Hardware · SaaS · AI licensing.",
  },
  {
    id: 3,
    kicker: "YoY revenue growth",
    title: "2× ",
    description: "Profitable unit economics .",
  },
  {
    id: 4,
    kicker: "Mitacs Canada grant",
    title: "$1.5M",
    description: "Government-backed innovation .",
  },
  {
    id: 5,
    kicker: "Clinical evidence",
    title: "Peer-reviewed research",
    description: "Indexed on PubMed and ScienceDirect, and recognized by PATH.",
  },
  {
    id: 6,
    kicker: "North America",
    title: "FDA 510(k) · Health Canada",
    description: "FDA 510(k) · Health Canada · Q1 2027 launch .",
  },
  {
    id: 7,
    kicker: "Operating across",
    title: "Three countries",
    description: "United States · Canada · India.",
  },
  {
    id: 8,
    kicker: "Platform",
    title: "Six intelligence layers",
    description: "Device, AI and workflow on one FHIR R5-native record.",
  },
];

/* ─── Manufacturing & quality ─── */

export const manufacturingWhyCards: PcardItem[] = [
  {
    id: 1,
    kicker: "Device traceability",
    title: "100% unit-level",
    description:
      "Every device tracked from component intake to clinical deployment.",
  },
  {
    id: 2,
    kicker: "QC checkpoints",
    title: "End-to-end",
    description:
      "Incoming materials, in-process assembly and final release, each stage gated.",
  },
  {
    id: 3,
    kicker: "Calibration",
    title: "In-house",
    description:
      "Device calibration and validation conducted internally, with no outsourced test loops.",
  },
  {
    id: 4,
    kicker: "Iteration loop",
    title: "Design to field",
    description:
      "In-house manufacturing enables faster product iteration and tighter feedback from deployment.",
  },
];

export const manufacturingCapabilities: PcardItem[] = [
  {
    id: 1,
    kicker: "In-house manufacturing",
    title: "Production under direct control.",
    description:
      "Scanbo® manufactures its own devices in-house, with full control over production quality, component sourcing, traceability and delivery. No external contract manufacturers.",
  },
  {
    id: 2,
    kicker: "Quality systems",
    title: "Audited. Traceable. Documented.",
    description:
      "Quality management systems cover every stage from incoming components to final device release. Each unit is traceable, each process documented, each deviation controlled.",
  },
  {
    id: 3,
    kicker: "Regulatory discipline",
    title: "Built for regulated market entry.",
    description:
      "Scanbo®'s regulatory program supports market access in India, Canada and the United States, aligned to CDSCO approval, the Health Canada review and FDA 510(k) submission.",
  },
];

export const manufacturingStandards: PcardItem[] = [
  {
    id: 1,
    kicker: "Quality management",
    title: "ISO 13485",
    description:
      "The international quality management standard for medical devices. Scanbo®'s operations are aligned to ISO 13485 across design, production and post-market processes.",
  },
  {
    id: 2,
    kicker: "Multi-market audit program",
    title: "MDSAP",
    description:
      "A single audit program covering regulatory requirements across Canada, the United States, Brazil, Australia and Japan. Scanbo® has been MDSAP certified since Q1 2025.",
  },
  {
    id: 3,
    kicker: "Regulatory readiness",
    title: "U.S. FDA",
    description:
      "Scanbo® D8 is on track for FDA 510(k) clearance in Q1 2027 . The quality infrastructure built toward this submission is the same system that governs every Scanbo® device, not a separate process created for regulatory review.",
  },
];

/* ─── Data philosophy ─── */

export const dataPrinciples: PrincipleItem[] = [
  {
    id: 1,
    num: "01",
    text: "The data generated by your body belongs to you.",
  },
  {
    id: 2,
    num: "02",
    text: "We believe in consent-based, transparent data practices.",
  },
  {
    id: 3,
    num: "03",
    text: "Patients should participate in the value their data creates.",
  },
  {
    id: 4,
    num: "04",
    text: "We are building toward a model where data ownership is a right, not a privilege.",
  },
  {
    id: 5,
    num: "05",
    text: "Our technology is designed to empower clinicians and patients, not to replace them.",
  },
];

export const dataPlatformPrinciples: PcardItem[] = [
  {
    id: 1,
    kicker: "Privacy",
    title: "HIPAA and GDPR",
    description: "U.S. health-data privacy and the EU data-protection standard.",
  },
  {
    id: 2,
    kicker: "Security",
    title: "AES encryption",
    description:
      "Industry-standard encryption for patient data, stored in a HIPAA-compliant record.",
  },
  {
    id: 3,
    kicker: "Interoperability",
    title: "FHIR R5 native",
    description: "Open, interoperable records, so data can move with the patient.",
  },
  {
    id: 4,
    kicker: "Commitment",
    title: "Never sold",
    description: "Patient data is never sold.",
  },
];
