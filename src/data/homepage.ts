/** Homepage static datasets — extracted for map-based rendering. */

export interface HomeStatItem {
  id: number;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

export interface HardwareBarPhrase {
  id: number;
  text: string;
}

export interface HeroStatusChip {
  id: number;
  label: string;
  live?: boolean;
}

export interface PlatformDuoCard {
  id: number;
  tag: string;
  live?: boolean;
  title: string;
  href: string;
  description: string;
  media: "device" | "ecg";
  imgSrc?: string;
  imgAlt?: string;
}

export type StackCardStatus =
  | { kind: "live"; label: string; location?: string }
  | { kind: "try"; href: string; label: string };

export interface StackCard {
  id: number;
  icon: "scale" | "ambient" | "rxshield" | "emr";
  num: string;
  title: string;
  href: string;
  description: string;
  status: StackCardStatus;
}

export type MoatStatValue =
  | { kind: "text"; text: string }
  | { kind: "yoy"; prefix: string; multiplier: string };

export interface MoatStat {
  id: number;
  value: MoatStatValue;
  label: string;
  description: string;
}

export interface MoatChip {
  id: number;
  label: string;
  lime?: boolean;
}

export interface AudienceTile {
  id: number;
  href: string;
  label: string;
  icon: "hospitals" | "chw" | "employers" | "acos";
}

export interface UsBandFact {
  id: number;
  text: string;
}

export interface OutcomeCite {
  name: string;
  detail: string;
}

export interface OutcomeCard {
  id: number;
  quote: string;
  /** Plain heading when no gradient span split is needed */
  heading?: string;
  /** Heading with a gradient span suffix (ocard style) */
  headingBefore?: string;
  headingGrad?: string;
  body: string;
  cite: OutcomeCite;
  variant: "big" | "card";
}

export interface LiveDeploymentLogo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface RevenueProduct {
  id: number;
  name: string;
  detail: string;
  detailEm?: string;
}

export interface RevenueCard {
  id: number;
  kicker: string;
  title: string;
  description: string;
  products: RevenueProduct[];
  pill?: string;
  cta?: { href: string; label: string };
}

export interface TrustCert {
  id: number;
  label: string;
}

export interface TimeToResultRow {
  id: number;
  region: string;
  detail: string;
  barWidth: string;
  value: string;
  highlight?: boolean;
}

/* ─── Stats bar ─── */

export const homeStats: HomeStatItem[] = [
  { id: 1, value: 750, suffix: "+", label: "devices deployed" },
  { id: 2, value: 150, suffix: "M+", label: "verified health signals" },
  { id: 3, value: 1, suffix: "M+", label: "ECG AI analyses" },
  { id: 4, value: 2, suffix: "×", label: "YoY revenue growth" },
  { id: 5, value: 2, suffix: " ACOs", label: "US pilots — FL & NY" },
];

/* ─── Hero status chips ─── */

export const heroStatusChips: HeroStatusChip[] = [
  { id: 1, label: "CDSCO approved in India", live: true },
  { id: 2, label: "FDA 510(k) filing targeted Q1 2027" },
  { id: 3, label: "Health Canada — Q1 2027" },
  { id: 4, label: "2 US ACO Pilots — FL & NY" },
];

/* ─── Hardware bar phrases ─── */

export const hardwareBarPhrases: HardwareBarPhrase[] = [
  { id: 1, text: "Hardware-innovated" },
  { id: 2, text: "Proprietary strips" },
  { id: 3, text: "Designed & manufactured in-house" },
];

/* ─── Platform duo (D8 + HridayTaal) ─── */

export const platformDuoCards: PlatformDuoCard[] = [
  {
    id: 1,
    tag: "01 · Biomarkers",
    live: true,
    title: "Scanbo® D8 (D8–D19)",
    href: "/platform/scanbo-d8/",
    description:
      "19 lab-grade parameters at the point of care, including ECG and blood glucose, in under five minutes.",
    media: "device",
    imgSrc: "/assets/device.png",
    imgAlt: "Scanbo D8 point-of-care device",
  },
  {
    id: 2,
    tag: "02 · Cardiac AI",
    live: true,
    title: "HridayTaal® Cardiac Agent",
    href: "/platform/hridaytaal-ecg-ai/",
    description:
      "AI that reads every single-lead ECG in real time and flags the patients who need attention.",
    media: "ecg",
  },
];

/* ─── Stack cards ─── */

export const stackCards: StackCard[] = [
  {
    id: 1,
    icon: "scale",
    num: "03 · Metabolic intelligence",
    title: "Scanbo® Smart Scale",
    href: "/platform/smart-scale/",
    description:
      "Surfaces what mass conceals: visceral fat, skeletal muscle and 40+ metabolic indicators, captured directly into the FHIR R5 clinical record. 1M+ body scans recorded.",
    status: { kind: "live", label: "Deployed", location: "India" },
  },
  {
    id: 2,
    icon: "ambient",
    num: "04 · Summarization intelligence",
    title: "Ambient Documentation Agent",
    href: "/platform/ambient-documentation/",
    description:
      "Autonomous conversion of clinical encounters into structured documentation. Zero transcription overhead. Eliminates documentation burden so clinicians focus on the patient.",
    status: {
      kind: "try",
      href: "https://scanbo.ai/ambient",
      label: "Try it →",
    },
  },
  {
    id: 3,
    icon: "rxshield",
    num: "05 · Defensive intelligence",
    title: "RxShield Safety Agent",
    href: "/platform/rxshield/",
    description:
      "Real-time drug interaction analysis and prescribing safety. Catches contraindications before they reach the patient, at the point of prescribing.",
    status: {
      kind: "try",
      href: "https://scanbo.ai/rxshield",
      label: "Try it →",
    },
  },
  {
    id: 4,
    icon: "emr",
    num: "06 · Workflow intelligence",
    title: "Scanbo® EMR",
    href: "/platform/scanbo-ehr/",
    description:
      "The FHIR R5-native command center for clinical operations: scheduling, telehealth, queuing and interoperability, all connected to the D8 signal layer and the HridayTaal Cardiac Agent.",
    status: { kind: "live", label: "Deployed" },
  },
];

/* ─── Moat stats + chips ─── */

export const moatStats: MoatStat[] = [
  {
    id: 1,
    value: { kind: "text", text: "2M+" },
    label: "Signals added monthly",
    description:
      "Every device in the field is a data acquisition node. The moat widens every month.",
  },
  {
    id: 2,
    value: { kind: "text", text: "100%" },
    label: "Proprietary data",
    description:
      "Not licensed, not aggregated, not scraped. Generated by Scanbo hardware at the point of care.",
  },
  {
    id: 3,
    value: { kind: "text", text: "8" },
    label: "Measurements per visit",
    description:
      "Every assessment adds eight clinical-grade readings to the patient record, from our own sensors.",
  },
  {
    id: 4,
    value: { kind: "yoy", prefix: "2", multiplier: "×" },
    label: "YoY Growth",
    description:
      "Signal volume, device count, and revenue all compounding year-on-year.",
  },
];

export const moatChips: MoatChip[] = [
  {
    id: 1,
    label: "$1.5M Mitacs Canada grant — federal validation",
    lime: true,
  },
  { id: 2, label: "5 peer-reviewed publications" },
  { id: 3, label: "3 active revenue streams" },
  { id: 4, label: "Zero royalties on research IP" },
];

/* ─── Audience tiles ─── */

export const audienceTiles: AudienceTile[] = [
  {
    id: 1,
    href: "/who-we-serve/hospitals-clinics/",
    label: "Hospitals & clinics",
    icon: "hospitals",
  },
  {
    id: 2,
    href: "/who-we-serve/community-health-workers/",
    label: "Community health workers",
    icon: "chw",
  },
  {
    id: 3,
    href: "/who-we-serve/#aud-employers-insurers",
    label: "Employers & insurers",
    icon: "employers",
  },
  {
    id: 4,
    href: "/who-we-serve/accountable-care-organizations/",
    label: "U.S. ACOs",
    icon: "acos",
  },
];

/* ─── US band facts ─── */

export const usBandFacts: UsBandFact[] = [
  { id: 1, text: "2 ACO pilots completed in Florida and New York" },
  { id: 2, text: "No new CPT code required" },
  { id: 3, text: "FDA 510(k) filing targeted Q1 2027" },
];

/* ─── Outcomes / testimonials ─── */

export const outcomeCards: OutcomeCard[] = [
  {
    id: 1,
    variant: "big",
    quote:
      "“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”",
    heading: "Zero diagnostic lag.",
    body: "Device to EMR in seconds. Every reading captured, interpreted and recorded at the point of consultation. No transcription. No delay. No errors.",
    cite: {
      name: "Supraja Hospitals · Rushcare Hospitals",
      detail: "Multispecialty networks · Hyderabad, India",
    },
  },
  {
    id: 2,
    variant: "card",
    quote: "“Documentation time is gone. That time is back with our doctors.”",
    headingBefore: "4,000 hours",
    headingGrad: "recovered.",
    body: "Documentation time eliminated across 50 devices in a diabetes reversal network.",
    cite: {
      name: "Raj Kumar, CEO — WWC Clinics",
      detail: "Diabetes Reversal · Pune, India",
    },
  },
  {
    id: 3,
    variant: "card",
    quote:
      "“Vitals at the point of consultation, already in the EMR before I finish the examination.”",
    headingBefore: "Instant.",
    headingGrad: "No errors.",
    body: "Point-of-consultation vitals with auto-push to the EMR. Clinical note quality measurably improved.",
    cite: {
      name: "Dr. Jogendra Kumar Bastia, MD",
      detail: "Consultant Neurologist · SGPGI MS",
    },
  },
];

/* ─── Live deployment logos ─── */

export const liveDeploymentLogos: LiveDeploymentLogo[] = [
  {
    id: 1,
    src: "/assets/logo_supraja.png",
    alt: "Supraja Hospitals",
    width: 140,
    height: 40,
  },
  {
    id: 2,
    src: "/assets/logo_rushcare.png",
    alt: "Rushcare Hospitals",
    width: 140,
    height: 40,
  },
  {
    id: 3,
    src: "/assets/logo_dimbha.png",
    alt: "DIMBHA",
    width: 140,
    height: 40,
  },
];

/* ─── Revenue cards ─── */

export const revenueCards: RevenueCard[] = [
  {
    id: 1,
    kicker: "Hardware + SaaS",
    title: "Subscription+",
    description:
      "Diagnostic test-based SaaS pricing — clinics and hospitals pay per test volume, not per seat. Scales with usage.",
    products: [
      { id: 1, name: "Scanbo® D8", detail: "Multiparameter device" },
      { id: 2, name: "Scanbo® Smart Scale", detail: "Body composition" },
      { id: 3, name: "Scanbo® EMR", detail: "Connected records" },
    ],
    pill: "Recurring · Scalable",
  },
  {
    id: 2,
    kicker: "Recurring strips",
    title: "Consumables",
    description:
      "Like a printer and its cartridges — every diagnostic test requires a proprietary strip, creating a recurring revenue stream tied to each device in the field.",
    products: [
      { id: 1, name: "Scanbo® D8", detail: "1 strip · Glucose" },
      {
        id: 2,
        name: "Scanbo® D12",
        detail: "5 strips · ",
        detailEm: "Coming soon",
      },
    ],
  },
  {
    id: 3,
    kicker: "Clinical AI",
    title: "Proprietary AI Licensing",
    description:
      "Clinical AI Licensing — 30+ proprietary algorithms licensed to health systems as decision-support tools. The intelligence is the product. Patient data is never sold.",
    products: [
      {
        id: 1,
        name: "HridayTaal® Cardiac Agent",
        detail: "Cardiac analysis",
      },
      { id: 2, name: "RxShield Safety Agent", detail: "Drug Interaction" },
      {
        id: 3,
        name: "Ambient Documentation Agent",
        detail: "Clinical scribe",
      },
    ],
    cta: {
      href: "/platform/hridaytaal-ecg-ai/",
      label: "30+ algorithms roadmap →",
    },
  },
];

/* ─── Trust certs ─── */

export const trustCerts: TrustCert[] = [
  { id: 1, label: "CDSCO" },
  { id: 2, label: "ISO 13485" },
  { id: 3, label: "ISO 27001" },
  { id: 4, label: "SOC 2 Type II" },
  { id: 5, label: "MDSAP" },
  { id: 6, label: "HIPAA" },
  { id: 7, label: "GDPR" },
];

/* ─── Time-to-result comparison ─── */

export const timeToResultRows: TimeToResultRow[] = [
  {
    id: 1,
    region: "United States",
    detail: "to release routine outpatient blood-test results",
    barWidth: "76.3%",
    value: "24–96+ hours",
  },
  {
    id: 2,
    region: "United Kingdom",
    detail: "to report routine blood tests",
    barWidth: "73.4%",
    value: "~72 hours",
  },
  {
    id: 3,
    region: "Developing countries",
    detail: "median to receive centralized-lab results",
    barWidth: "98.2%",
    value: "~35 days",
  },
  {
    id: 4,
    region: "With Scanbo",
    detail: "at the point of care, in the first visit",
    barWidth: "5.2%",
    value: "Under 5 minutes",
    highlight: true,
  },
];
