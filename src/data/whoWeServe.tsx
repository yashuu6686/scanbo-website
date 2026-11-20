import type { ReactNode } from "react";
import type { PCard, SpecRow, StatItem } from "@/data/platform";

export interface AudienceCard {
  id: number;
  elementId: string;
  title: string;
  need: string;
  bullets: string[];
  href?: string;
  icon: ReactNode;
}

export interface CptCodeCard {
  id: number;
  category: string;
  codes: string;
  description: string;
}

export interface PlatformLink {
  id: number;
  href: string;
  num: string;
  title: string;
  description: string;
  cta: string;
}

export interface ChipItem {
  id: number;
  label: string;
  href?: string;
  rel?: string;
  link?: boolean;
}

/* ─── Overview ─── */

export const whoWeServeAudienceCards: AudienceCard[] = [
  {
    id: 1,
    elementId: "aud-hospitals-clinics",
    title: "Hospitals & clinics",
    need: "Triage still means several devices and manual data entry.",
    bullets: [
      "Eight measurements in one workflow",
      "Results straight into the EMR",
      "Documentation time handed back to clinicians",
    ],
    href: "/who-we-serve/hospitals-clinics/",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 8h6M12 5v6M8 21v-4h8v4" />
      </svg>
    ),
  },
  {
    id: 2,
    elementId: "aud-physicians",
    title: "Physicians",
    need: "Diagnosis and documentation compete for the same minutes.",
    bullets: [
      "Rhythm insight with every ECG",
      "Notes ready within 60 seconds",
      "Vitals already in the record",
    ],
    href: "/who-we-serve/physicians/",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 3v5a5 5 0 0 0 10 0V3" />
        <path d="M10 13v2a4 4 0 0 0 8 0v-2" />
        <circle cx="18" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    id: 3,
    elementId: "aud-pharmacists",
    title: "Pharmacists",
    need: "Prescribing safety depends on evidence you can trace.",
    bullets: [
      "Interaction checks in under 2 seconds",
      "Every finding linked to its source",
      "Screening at the pharmacy counter",
    ],
    href: "/who-we-serve/pharmacists/",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
        <path d="M9.2 9.2l5.6 5.6" />
      </svg>
    ),
  },
  {
    id: 4,
    elementId: "aud-community-health-workers",
    title: "Community health workers",
    need: "The people closest to patients have the fewest diagnostic tools.",
    bullets: [
      "Portable and easy to use",
      "No lab, specialist or cold chain",
      "Results the clinician can trust",
    ],
    href: "/who-we-serve/community-health-workers/",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    id: 5,
    elementId: "aud-individuals",
    title: "Individuals",
    need: "Care happens between visits, too.",
    bullets: [
      "Measure at home with Smart Scale",
      "Results in the Scanbo app",
      "TeleCall and secure chat with the care team",
    ],
    href: "/who-we-serve/individuals/",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
        <path d="M9.5 10.5l1.5 1.5 3.5-3.5" />
      </svg>
    ),
  },
  {
    id: 6,
    elementId: "aud-employers-insurers",
    title: "Employers & insurers",
    need: "Late detection drives avoidable claims and lost workdays.",
    bullets: [
      "Workplace and member screening",
      "Earlier detection of chronic disease",
      "Data for prevention and underwriting",
    ],
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
      </svg>
    ),
  },
  {
    id: 7,
    elementId: "aud-us-acos",
    title: "U.S. ACOs",
    need: "Value-based care needs early detection that existing codes already reimburse.",
    bullets: [
      "Remote monitoring on established codes",
      "AI flags high-risk patients earlier",
      "Pilots completed in Florida and New York",
    ],
    href: "/who-we-serve/accountable-care-organizations/",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
];

export const whoWeServeCptCodes: CptCodeCard[] = [
  {
    id: 1,
    category: "RPM setup and supply",
    codes: "99453 · 99454",
    description: "Device setup, patient education and monthly device supply.",
  },
  {
    id: 2,
    category: "RPM management",
    codes: "99457 · 99458",
    description: "Clinical staff time reviewing data and managing care.",
  },
  {
    id: 3,
    category: "Blood pressure",
    codes: "99473 · 99474",
    description: "Self-measured blood pressure education and review.",
  },
];

export const whoWeServeUsFacts: string[] = [
  "2 ACO pilots completed: Florida and New York",
  "FDA 510(k) filing targeted Q1 2027",
];

/* ─── Hospitals & clinics ─── */

export const hospitalsClinicsHeroChips: string[] = [
  "D8 CDSCO approved",
  "FHIR R5 native",
];

export const hospitalsClinicsCards: PCard[] = [
  {
    id: 1,
    k: "Vital capture",
    h4: "OPD and ward-level vital capture.",
    p: "Scanbo® D8 reduces documentation time, eliminates manual entry errors and feeds data directly into Scanbo® EMR. Already deployed in neurology, diabetes and general OPD settings.",
  },
  {
    id: 2,
    k: "Patient flow",
    h4: "Real-time queue and scheduling.",
    p: "A live queue dashboard shows who is waiting, who is in consultation and what is delayed. Booking, rescheduling and waitlisting happen in the same platform.",
  },
  {
    id: 3,
    k: "Documentation",
    h4: "Notes without transcription.",
    p: "The Ambient Documentation Agent turns the consultation into structured notes, so clinicians face the patient, not the keyboard.",
  },
];

export const hospitalsClinicsStats: StatItem[] = [
  { id: 1, value: "750+", label: "devices deployed" },
  { id: 2, value: "7M+", label: "vital tests completed" },
  { id: 3, value: "<5 min", label: "per full assessment" },
];

export const hospitalsClinicsLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/ambient-documentation/",
    num: "04",
    title: "Ambient Documentation",
    description: "Clinic-ready notes the moment the visit ends",
    cta: "Learn more →",
  },
  {
    id: 4,
    href: "/platform/scanbo-ehr/",
    num: "06",
    title: "Scanbo® EMR",
    description: "The operational hub for connected care",
    cta: "Learn more →",
  },
];

/* ─── Physicians ─── */

export const physiciansHeroChips: string[] = [
  "AI decision support",
  "Any specialty",
];

export const physiciansCards: PCard[] = [
  {
    id: 1,
    k: "Triage support",
    h4: "Rhythm insight at the point of assessment.",
    p: "HridayTaal® returns structured rhythm output with each ECG, so you can triage, escalate or continue monitoring without waiting for specialist review.",
  },
  {
    id: 2,
    k: "Documentation",
    h4: "A note within 60 seconds.",
    p: "Ambient listens passively and structures the conversation into Subjective, Objective, Assessment and Plan, ready to review the moment the session ends.",
  },
  {
    id: 3,
    k: "The record",
    h4: "Vitals already in the EMR.",
    p: "Eight D8 measurements and every interpretation land in the same FHIR R5 record, visible over time across visits.",
  },
];

export const physiciansStats: StatItem[] = [
  { id: 1, value: "3 hrs", label: "saved per clinician, every day" },
  { id: 2, value: "<60s", label: "to the first draft note" },
  { id: 3, value: "1M+", label: "ECG AI analyses completed" },
];

export const physiciansLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/ambient-documentation/",
    num: "04",
    title: "Ambient Documentation",
    description: "Clinic-ready notes the moment the visit ends",
    cta: "Learn more →",
  },
  {
    id: 4,
    href: "/platform/rxshield/",
    num: "05",
    title: "RxShield",
    description: "Drug interaction evidence you can defend",
    cta: "Learn more →",
  },
];

/* ─── Pharmacists ─── */

export const pharmacistsHeroChips: ChipItem[] = [
  {
    id: 1,
    label: "Try RxShield →",
    href: "https://scanbo.ai/rxshield",
    rel: "noopener",
    link: true,
  },
  { id: 2, label: "Free for HCPs · U.S. & Canada" },
];

export const pharmacistsCards: PCard[] = [
  {
    id: 1,
    k: "Interaction checks",
    h4: "Fewer adverse events, faster evidence.",
    p: "Interaction analysis from FDA-approved prescribing information, clinical guidelines and peer-reviewed literature, source-linked in under two seconds.",
  },
  {
    id: 2,
    k: "Audit trail",
    h4: "Defend every decision.",
    p: "Every check generates a unique Decision ID: an immutable snapshot of what was shown, when, and from which sources.",
  },
  {
    id: 3,
    k: "Alternatives",
    h4: "Alternatives with full context.",
    p: "Where alternatives exist, RxShield shows them with contraindication data inline. Black-box warnings are always displayed.",
  },
  {
    id: 4,
    k: "At the counter",
    h4: "Screening where patients already are.",
    p: "Scanbo® D8 is purpose-built for pharmacies, and HridayTaal® delivers AI ECG interpretation in pharmacy settings, with no specialist on site.",
  },
];

export const pharmacistsStats: StatItem[] = [
  { id: 1, value: "<2s", label: "from drug entry to complete evidence" },
  {
    id: 2,
    value: "100%",
    label: "of findings linked to the exact source passage",
  },
  { id: 3, value: "0", label: "autonomous clinical decisions by AI" },
];

export const pharmacistsLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/rxshield/",
    num: "05",
    title: "RxShield",
    description: "Drug interaction evidence you can defend",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
];

/* ─── Community health workers ─── */

export const chwHeroChips: string[] = ["Urban and rural", "No cold chain"];

export const chwCards: PCard[] = [
  {
    id: 1,
    k: "Portable screening",
    h4: "Screening in the field.",
    p: "Validated in low-resource urban and rural deployments. Health workers screen patients and capture data directly into the clinical record.",
  },
  {
    id: 2,
    k: "Cardiac insight",
    h4: "Cardiology intelligence without a cardiologist.",
    p: "HridayTaal® gives community health workers structured cardiac interpretation once available only in specialist settings.",
  },
  {
    id: 3,
    k: "Metabolic care",
    h4: "Built for chronic-disease programs.",
    p: "Smart Scale and D8 together support diabetes and chronic-disease management, with trends visible to the clinical team over time.",
  },
];

export const chwStats: StatItem[] = [
  { id: 1, value: "8", label: "measurements per assessment" },
  { id: 2, value: "<5 min", label: "per full assessment" },
  { id: 3, value: "750+", label: "devices deployed" },
];

export const chwLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/smart-scale/",
    num: "03",
    title: "Scanbo® Smart Scale",
    description: "AI Body Score and 40+ metabolic indicators",
    cta: "Learn more →",
  },
];

/* ─── Individuals ─── */

export const individualsHeroChips: string[] = [
  "Scanbo® app",
  "Patient data is never sold",
];

export const individualsCards: PCard[] = [
  {
    id: 1,
    k: "At home",
    h4: "Between-visit data that matters.",
    p: "Measure with Scanbo® Smart Scale at home. Data flows automatically into the clinical record, so your clinician sees trends between visits.",
  },
  {
    id: 2,
    k: "In the app",
    h4: "Your results, in one place.",
    p: "Readings appear in the Scanbo® app, with automatic trend tracking over time. The scale recognizes up to eight users.",
  },
  {
    id: 3,
    k: "Stay in touch",
    h4: "Consultations from any device.",
    p: "Audio and video TeleCall and secure chat connect you with your care team, with no app download required for calls.",
  },
  {
    id: 4,
    k: "Your data",
    h4: "Patient data is never sold.",
    p: "Every reading is stored securely in a HIPAA-compliant record, with AES encryption.",
  },
];

export const individualsLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/smart-scale/",
    num: "03",
    title: "Scanbo® Smart Scale",
    description: "AI Body Score and 40+ metabolic indicators",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/scanbo-ehr/",
    num: "06",
    title: "Scanbo® EMR",
    description: "The operational hub for connected care",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
];

/* ─── ACOs ─── */

export const acosHeroChips: string[] = [
  "2 ACO pilots completed · FL & NY",
  "FDA 510(k) filing targeted Q1 2027",
];

export const acosCards: PCard[] = [
  {
    id: 1,
    k: "Remote monitoring",
    h4: "RPM with billing fit.",
    p: "Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. No new CPT code required.",
  },
  {
    id: 2,
    k: "Cardiac screening",
    h4: "Population-level AFib screening.",
    p: "In high-volume primary care, AFib detection at the point of consultation has real population-health value. HridayTaal® makes routine ECG screening clinically useful.",
  },
  {
    id: 3,
    k: "Earlier detection",
    h4: "AI flags high-risk patients earlier.",
    p: "Readings and AI interpretations sit in one FHIR R5 record, so care teams see risk building across visits.",
  },
];

export const acosReimbursementRows: SpecRow[] = [
  {
    id: 1,
    dt: "RPM setup and supply · 99453, 99454",
    dd: "Device setup, patient education and monthly device supply",
  },
  {
    id: 2,
    dt: "RPM management · 99457, 99458",
    dd: "Clinical staff time reviewing data and managing care",
  },
  {
    id: 3,
    dt: "Blood pressure · 99473, 99474",
    dd: "Self-measured blood pressure education and review",
  },
  {
    id: 4,
    dt: "ECG · 93040–93042",
    dd: "Rhythm ECG with interpretation and report",
  },
];

export const acosLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/smart-scale/",
    num: "03",
    title: "Scanbo® Smart Scale",
    description: "AI Body Score and 40+ metabolic indicators",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
  {
    id: 4,
    href: "/platform/scanbo-ehr/",
    num: "06",
    title: "Scanbo® EMR",
    description: "The operational hub for connected care",
    cta: "Learn more →",
  },
];
