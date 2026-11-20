/** Static list datasets for platform overview and product pages. */

export interface SpecRow {
  id: number;
  dt: string;
  dd: string;
}

export interface PCard {
  id: number;
  k: string;
  h4: string;
  p: string;
}

export interface LabelItem {
  id: number;
  label: string;
}

export interface RoadmapCard {
  id: number;
  k: string;
  idLabel: string;
  idClass?: "rmap-id" | "rmap-title";
  span: string;
  bullets: LabelItem[];
  on?: boolean;
  note?: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface LayerCard {
  id: number;
  href: string;
  n: string;
  h4: string;
  p: string;
}

export interface SecurityItem {
  id: number;
  title: string;
  description: string;
}

export interface ChipItem {
  id: number;
  label: string;
  href?: string;
  rel?: string;
  link?: boolean;
}

export interface HowItWorksStep {
  id: number;
  sn: string;
  h4: string;
  p: string;
  st: string;
}

export interface PositioningItem {
  id: number;
  h4: string;
  p: string;
}

/* ─── Platform overview ─── */

export const platformD8ParameterTicks: LabelItem[] = [
  { id: 1, label: "Blood pressure" },
  { id: 2, label: "Heart rate" },
  { id: 3, label: "Single-lead ECG" },
  { id: 4, label: "Heart-rate variability" },
  { id: 5, label: "SpO₂" },
  { id: 6, label: "Breath rate" },
  { id: 7, label: "Body temperature" },
  { id: 8, label: "Blood glucose" },
];

export const platformD8FactChips: LabelItem[] = [
  { id: 1, label: "Under 5 minutes" },
  { id: 2, label: "CDSCO approved" },
  { id: 3, label: "750+ devices deployed" },
];

export const platformHridaytaalTicks: LabelItem[] = [
  { id: 1, label: "Atrial fibrillation" },
  { id: 2, label: "Sinus arrhythmia" },
  { id: 3, label: "Heart rhythm" },
  { id: 4, label: "Missing heartbeats" },
  { id: 5, label: "Heart-rate variability" },
  { id: 6, label: "Heart-rate type" },
];

export const platformLayerCards: LayerCard[] = [
  {
    id: 1,
    href: "/platform/smart-scale/",
    n: "METABOLIC",
    h4: "Scanbo® Smart Scale",
    p: "Visceral fat, skeletal muscle and 40+ metabolic indicators, captured straight into the record.",
  },
  {
    id: 2,
    href: "/platform/ambient-documentation/",
    n: "SUMMARIZATION",
    h4: "Ambient Documentation",
    p: "Turns the consultation into structured notes, so clinicians face the patient, not the keyboard.",
  },
  {
    id: 3,
    href: "/platform/rxshield/",
    n: "SAFETY",
    h4: "RxShield",
    p: "Checks drug interactions at the moment of prescribing, before they reach the patient.",
  },
  {
    id: 4,
    href: "/platform/scanbo-ehr/",
    n: "WORKFLOW",
    h4: "Scanbo® EMR",
    p: "Scheduling, telehealth and queuing on one FHIR R5-native record.",
  },
];

export const platformSecurityGrid: SecurityItem[] = [
  {
    id: 1,
    title: "HIPAA",
    description: "U.S. health-data privacy and security",
  },
  {
    id: 2,
    title: "GDPR",
    description: "EU data-protection standard",
  },
  {
    id: 3,
    title: "AES encryption",
    description: "Industry-standard encryption for patient data",
  },
  {
    id: 4,
    title: "FHIR R5",
    description: "Open, interoperable records",
  },
];

/* ─── Scanbo D8 ─── */

export const d8WhyCards: PCard[] = [
  {
    id: 1,
    k: "Multiparameter",
    h4: "8 parameters. One assessment.",
    p: "Where most devices capture one reading, D8 gives the clinician a full picture in a single session: blood pressure, ECG, SpO₂, glucose and more. Faster decisions. Fewer gaps.",
  },
  {
    id: 2,
    k: "Platform-connected",
    h4: "From capture to clinical record.",
    p: "D8 feeds directly into Scanbo® EMR. ECG data routes to the HridayTaal® Cardiac Agent for interpretation. Every reading becomes a data point in the care continuum, with no manual entry and no transcription errors.",
  },
  {
    id: 3,
    k: "Deployment-ready",
    h4: "Works where labs do not.",
    p: "CDSCO approved and validated in real urban and rural field settings. Purpose-built for pharmacies, clinics, community health workers and frontline care, not just hospital wards.",
  },
];

export const d8NonInvasiveSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Blood Pressure",
    dd: "SMBP & RPM billing eligible · CPT 99473, 99474, 99453+",
  },
  {
    id: 2,
    dt: "Heart Rate",
    dd: "Continuous pulse monitoring",
  },
  {
    id: 3,
    dt: "Single Lead ECG",
    dd: "HridayTaal® Cardiac Agent Interpretation · CPT 93040–93042",
  },
  {
    id: 4,
    dt: "HRV — Heart Rate Variability",
    dd: "Autonomic nervous system signal",
  },
  {
    id: 5,
    dt: "Breath Rate",
    dd: "Respiratory rate at point of care",
  },
  {
    id: 6,
    dt: "SpO2 — Oxygen Saturation",
    dd: "RPM billing eligible · CMS recognised parameter",
  },
  {
    id: 7,
    dt: "Body Temperature",
    dd: "Non-contact infrared measurement",
  },
];

export const d8FingerPrickSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Blood Glucose",
    dd: "Proprietary test strip · Validated in peer-reviewed study",
  },
];

export const d8DeploymentSpecRows: SpecRow[] = [
  { id: 1, dt: "Devices in the field", dd: "750+" },
  { id: 2, dt: "Clinical settings", dd: "650+" },
  { id: 3, dt: "Patients screened", dd: "250K+" },
  { id: 4, dt: "Health signals captured", dd: "150M+" },
];

export const d8DeviceRoadmap: RoadmapCard[] = [
  {
    id: 1,
    k: "Currently deployed",
    idLabel: "D8",
    idClass: "rmap-id",
    span: "8 parameters",
    on: true,
    bullets: [
      { id: 1, label: "Blood Pressure" },
      { id: 2, label: "Heart Rate" },
      { id: 3, label: "Single Lead ECG" },
      { id: 4, label: "HRV" },
      { id: 5, label: "Breath Rate" },
      { id: 6, label: "SpO2" },
      { id: 7, label: "Body Temperature" },
      { id: 8, label: "Blood Glucose" },
    ],
  },
  {
    id: 2,
    k: "Q2 2027",
    idLabel: "D12",
    idClass: "rmap-id",
    span: "12 parameters",
    bullets: [
      { id: 1, label: "All D8 parameters" },
      { id: 2, label: "+ 4 additional blood tests" },
    ],
  },
  {
    id: 3,
    k: "Q3 2028",
    idLabel: "D16",
    idClass: "rmap-id",
    span: "16 parameters",
    bullets: [
      { id: 1, label: "All D12 parameters" },
      { id: 2, label: "+ 4 additional blood tests" },
    ],
  },
  {
    id: 4,
    k: "Q3 2030",
    idLabel: "D19",
    idClass: "rmap-id",
    span: "19 parameters",
    bullets: [
      { id: 1, label: "All D16 parameters" },
      { id: 2, label: "+ 3 additional blood tests" },
    ],
  },
];

export const d8WhoUsesCards: PCard[] = [
  {
    id: 1,
    k: "Hospitals & clinics",
    h4: "OPD and ward-level vital capture",
    p: "Reduces documentation time, eliminates manual entry errors and feeds data directly into Scanbo® EMR. Already deployed in neurology, diabetes and general OPD settings.",
  },
  {
    id: 2,
    k: "ACOs & RPM programs",
    h4: "Remote monitoring with billing fit",
    p: "D8 qualifies under existing Medicare SMBP and RPM billing frameworks. No new CPT code required. A strong fit for ACOs and value-based care programs deploying remote monitoring.",
  },
  {
    id: 3,
    k: "Community health workers",
    h4: "Portable screening in the field",
    p: "Validated in low-resource urban and rural deployments. No lab, no specialist infrastructure. Health workers screen patients and capture data directly into the clinical record.",
  },
];

/* ─── HridayTaal ─── */

export const hridaytaalIntelligenceCards: PCard[] = [
  {
    id: 1,
    k: "Signal interpretation",
    h4: "Raw signal in. Structured insight out.",
    p: "HridayTaal® takes a raw single-lead ECG trace and returns clinically relevant rhythm interpretation, automatically, at the point of care.",
  },
  {
    id: 2,
    k: "Point-of-care AI",
    h4: "Interpretation where the patient is.",
    p: "No specialist required for initial rhythm assessment. HridayTaal® delivers AI interpretation at the front line: in clinics, pharmacies and community care settings.",
  },
  {
    id: 3,
    k: "Platform-embedded",
    h4: "Intelligence inside the care workflow.",
    p: "Interpretation outputs connect directly into Scanbo® EMR. Every rhythm insight is documented, timestamped, and longitudinally visible alongside the patient record.",
  },
];

export const hridaytaalRhythmSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Predicted heart rate",
    dd: "AI-derived beats per minute from the ECG trace",
  },
  {
    id: 2,
    dt: "Heart-rate variability",
    dd: "Beat-to-beat variation as an autonomic nervous system signal",
  },
  {
    id: 3,
    dt: "Heart rhythm classification",
    dd: "Structured rhythm type identification (sinus, arrhythmia and more)",
  },
  {
    id: 4,
    dt: "Heart-rate type",
    dd: "Normal, bradycardia and tachycardia classification",
  },
];

export const hridaytaalIrregularitySpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Atrial fibrillation (AFib)",
    dd: "Detection and classification of AFib episodes",
  },
  {
    id: 2,
    dt: "Sinus arrhythmia",
    dd: "Respiratory-linked rhythm variation",
  },
  {
    id: 3,
    dt: "Missing heartbeats: count",
    dd: "Number of ectopic or absent beats in the trace",
  },
  {
    id: 4,
    dt: "Missing heartbeats: location",
    dd: "Position of absent beats within the recorded trace",
  },
];

export const hridaytaalCapabilityStats: StatItem[] = [
  { id: 1, value: "1M+", label: "ECG AI analyses completed" },
  { id: 2, value: "8", label: "rhythm and irregularity outputs" },
  { id: 3, value: "Every", label: "D8 ECG analyzed automatically" },
];

export const hridaytaalClinicalValueCards: PCard[] = [
  {
    id: 1,
    k: "Triage support",
    h4: "Rhythm insight at the point of assessment.",
    p: "Clinicians receive structured rhythm output with each ECG, so they can triage, escalate or continue monitoring without waiting for downstream specialist review.",
  },
  {
    id: 2,
    k: "Longitudinal monitoring",
    h4: "Rhythm patterns across time.",
    p: "Every interpretation is recorded in Scanbo® EMR, so trends emerge over multiple visits. Intermittent arrhythmias become visible. Progression becomes detectable.",
  },
  {
    id: 3,
    k: "AFib screening",
    h4: "Population-level cardiac screening.",
    p: "In high-volume primary care, AFib detection at the point of consultation has real population-health value. HridayTaal® makes routine ECG screening clinically useful, not just technically possible.",
  },
  {
    id: 4,
    k: "Distributed care",
    h4: "Cardiology intelligence without a cardiologist.",
    p: "Community health workers and primary care clinicians gain structured cardiac interpretation once available only in specialist settings.This expands meaningful ECG use across all care levels.",
  },
];

export const hridaytaalRoadmap: RoadmapCard[] = [
  {
    id: 1,
    k: "Currently deployed",
    idLabel: "Rhythm Intelligence",
    idClass: "rmap-title",
    span: "A1.1 — Live",
    on: true,
    bullets: [
      { id: 1, label: "Predicted heart rate" },
      { id: 2, label: "Heart rate variability" },
      { id: 3, label: "Rhythm classification" },
      { id: 4, label: "Rate type (brady / tachy)" },
      { id: 5, label: "AFib detection" },
      { id: 6, label: "Sinus arrhythmia" },
      { id: 7, label: "Missing beat count & location" },
    ],
  },
  {
    id: 2,
    k: "Expanding intelligence",
    idLabel: "Interval & Waveform Analysis",
    idClass: "rmap-title",
    span: "A2 — In Development",
    bullets: [
      { id: 1, label: "Heart interval irregularity analysis" },
      { id: 2, label: "QRS waveform & duration" },
      { id: 3, label: "PR interval measurement" },
      { id: 4, label: "QRSD classification" },
      { id: 5, label: "QTc interval analysis" },
      { id: 6, label: "Ventricular fibrillation" },
      { id: 7, label: "Atrial flutter" },
    ],
  },
  {
    id: 3,
    k: "Research & development",
    idLabel: "Beyond ECG Rhythm",
    idClass: "rmap-title",
    span: "A3 — Pre-clinical R&D",
    bullets: [
      { id: 1, label: "Sleep apnea detection (R&D)" },
      { id: 2, label: "Non-invasive blood pressure (R&D)" },
    ],
    note: "These capabilities are in active pre-clinical research and are not yet deployed or validated for clinical use.",
  },
];

export const hridaytaalClinicalPositioning: PositioningItem[] = [
  {
    id: 1,
    h4: "AI Interpretation Layer",
    p: "HridayTaal® is a decision-support layer. It provides structured rhythm output to assist clinically trained professionals — it does not replace physician judgement.",
  },
  {
    id: 2,
    h4: "Point-of-Care Relevance",
    p: "Running on every Scanbo® D8 ECG capture across 650+ clinical settings in India. Over 1M+ ECG analyses completed in active deployment.",
  },
  {
    id: 3,
    h4: "Responsible Workflow Design",
    p: "Interpretation outputs are structured for clinical documentation and review. HridayTaal® is designed to augment, not automate, clinical cardiac assessment.",
  },
];

/* ─── Smart Scale ─── */

export const smartScaleValueCards: PCard[] = [
  {
    id: 1,
    k: "Body composition",
    h4: "Visceral fat, skeletal muscle,body score. One step.",
    p: "Each measurement generates an AI Body Score: a composite of visceral fat, subcutaneous fat, skeletal muscle, body water, protein and bone mineral mass. One number that summarises metabolic state.",
  },
  {
    id: 2,
    k: "Longitudinal tracking",
    h4: "Trends that matter across time.",
    p: "A single reading tells you a number. Longitudinal tracking tells you a direction. Body Score trends over time reveal whether metabolic health is improving, stable, or declining — informing clinical decisions before conditions worsen.",
  },
  {
    id: 3,
    k: "Platform-connected",
    h4: "Every reading into the clinical record.",
    p: "Every reading flows automatically into Scanbo® EMR — available to the clinical team at every touchpoint, without manual entry or patient recall.",
  },
];

export const smartScaleBodyCompositionRows: SpecRow[] = [
  { id: 1, dt: "AI Body Score", dd: "Composite metabolic health index" },
  { id: 2, dt: "Visceral fat", dd: "Metabolically active abdominal fat" },
  { id: 3, dt: "Subcutaneous fat", dd: "Fat beneath the skin surface" },
  { id: 4, dt: "Skeletal muscle mass", dd: "Total skeletal muscle index (SMI)" },
  { id: 5, dt: "Fat-free body weight", dd: "Lean mass excluding fat" },
  { id: 6, dt: "Basal metabolic rate", dd: "Resting energy expenditure estimate" },
  { id: 7, dt: "Body water", dd: "Total body hydration percentage" },
  { id: 8, dt: "Protein", dd: "Protein content as a share of body mass" },
  { id: 9, dt: "Bone mineral mass", dd: "Estimated skeletal mineral content" },
  { id: 10, dt: "Body fat percentage", dd: "Total fat as a share of body weight" },
  { id: 11, dt: "BMI", dd: "Calculated from height and weight" },
  {
    id: 12,
    dt: "Obesity & segmental analysis",
    dd: "Fat and muscle distribution by body segment",
  },
];

export const smartScaleConnectedFeatures: LabelItem[] = [
  { id: 1, label: "Bluetooth sync to Scanbo® EMR" },
  { id: 2, label: "Multi-user recognition (up to 8 users)" },
  { id: 3, label: "Automatic trend tracking over time" },
  { id: 4, label: "Scanbo® app visibility for patients" },
  { id: 5, label: "RPM billing pathway eligible" },
];

export const smartScaleTractionRows: SpecRow[] = [
  { id: 1, dt: "Total scans", dd: "1M+" },
  { id: 2, dt: "Connected to platform", dd: "Yes" },
  { id: 3, dt: "RPM eligible", dd: "Yes" },
];

export const smartScalePstats: StatItem[] = [
  { id: 1, value: "1M+", label: "body scans recorded" },
  { id: 2, value: "40+", label: "metabolic indicators" },
  { id: 3, value: "8", label: "users per scale" },
];

export const smartScaleIntegrationCards: PCard[] = [
  {
    id: 1,
    k: "Pairs with D8",
    h4: "Vitals and composition in one workflow.",
    p: "D8 captures cardiovascular and metabolic vitals; Smart Scale captures body composition. Together they give a more complete picture at the point of care.",
  },
  {
    id: 2,
    k: "Remote monitoring",
    h4: "Between-visit data that matters.",
    p: "Patients measure at home. Data flows into the clinical record, so clinicians see trends between visits and can intervene earlier.",
  },
  {
    id: 3,
    k: "RPM billing",
    h4: "Billable under existing frameworks.",
    p: "Weight monitoring qualifies under existing CMS RPM billing pathways. No new code required. Smart Scale fits directly into the same reimbursement workflow as D8.",
  },
  {
    id: 4,
    k: "Diabetes & chronic care",
    h4: "Designed for long-term programmes.",
    p: "Already deployed across diabetes reversal and chronic-disease management clinics, where body composition trends are clinically meaningful in metabolic care — Smart Scale makes them accessible.",
  },
];

/* ─── Ambient Documentation ─── */

export const ambientHeroChips: ChipItem[] = [
  {
    id: 1,
    label: "Sign up free →",
    href: "https://scanbo.ai/ambient",
    rel: "noopener",
    link: true,
  },
  { id: 2, label: "No credit card required" },
  { id: 3, label: "HIPAA-compliant" },
  { id: 4, label: "Works in any specialty" },
  { id: 5, label: "Set up in 2 minutes" },
];

export const ambientDemoPstats: StatItem[] = [
  { id: 1, value: "3 hrs", label: "saved per clinician, every day" },
  { id: 2, value: "99%", label: "transcription accuracy" },
  { id: 3, value: "<60s", label: "to the first draft note" },
  { id: 4, value: "0", label: "extra steps in your workflow" },
];

export const ambientHowItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    sn: "01",
    h4: "Open the session",
    p: "Tap “Start encounter” on web or mobile before you walk into the room. Ambient begins listening and separating speaker voices automatically.",
    st: "Instant start · No training required",
  },
  {
    id: 2,
    sn: "02",
    h4: "See your patient normally",
    p: "Hold the conversation you always would. Ambient transcribes in real time with speaker labels, capturing every clinical detail so you don't have to.",
    st: "Real-time transcription · Speaker separation",
  },
  {
    id: 3,
    sn: "03",
    h4: "Review, approve, export",
    p: "A structured note is ready within 60 seconds of the session ending. Edit with one click, then push directly to your EHR or download as a PDF.",
    st: "EHR-ready · PDF export · 1-click approve",
  },
];

export const ambientFeatureChips: LabelItem[] = [
  { id: 1, label: "Structured notes" },
  { id: 2, label: "Differential alerts" },
  { id: 3, label: "ICD-10 suggestion" },
  { id: 4, label: "Medication extraction" },
  { id: 5, label: "Allergy flagging" },
];

export const ambientFeatureCards: PCard[] = [
  {
    id: 1,
    k: "Integration",
    h4: "EHR and HIMS integration",
    p: "Push completed notes directly to your EMR through HL7 FHIR or API integrations with major systems.",
  },
  {
    id: 2,
    k: "Listening",
    h4: "Passive ambient listening",
    p: "No push-to-talk. No stop-start recording. Place your device on the desk and consult naturally while speaker diarization separates clinician and patient voices.",
  },
  {
    id: 3,
    k: "Speed",
    h4: "Note ready in under 60 seconds",
    p: "The moment you end a session, Ambient finalizes your note. Average time to first draft is under 60 seconds, regardless of encounter length.",
  },
  {
    id: 4,
    k: "Devices",
    h4: "iOS, Android and web",
    p: "Use Ambient from any device. The iOS and Android apps sync securely, and the web dashboard works from any browser without installs.",
  },
];

/* ─── RxShield ─── */

export const rxshieldClinicianBullets: LabelItem[] = [
  { id: 1, label: "Reviews evidence independently via source-passage links" },
  { id: 2, label: "Applies clinical judgment to the individual patient" },
  { id: 3, label: "Weighs risk and benefit in the full clinical context" },
  { id: 4, label: "Verifies against current official prescribing information" },
  { id: 5, label: "Makes and owns every prescribing decision" },
];

export const rxshieldAiBullets: LabelItem[] = [
  { id: 1, label: "Retrieves published regulatory and clinical evidence" },
  { id: 2, label: "Applies deterministic rules to classify interaction severity" },
  { id: 3, label: "Discloses source conflicts and uncertainty flags" },
  { id: 4, label: "Links every output to its exact source passage" },
  { id: 5, label: "Generates an immutable Decision ID for every check" },
];

export const rxshieldPstats: StatItem[] = [
  { id: 1, value: "<2s", label: "from drug entry to complete evidence" },
  {
    id: 2,
    value: "100%",
    label: "of findings linked to the exact source passage",
  },
  {
    id: 3,
    value: "4×",
    label: "evidence sources cross-checked per interaction",
  },
  { id: 4, value: "0", label: "autonomous clinical decisions by AI" },
];

export const rxshieldPlatformCards: PCard[] = [
  {
    id: 1,
    k: "Core engine",
    h4: "Fewer adverse events, faster evidence.",
    p: "Interaction analysis from FDA-approved prescribing information, clinical guidelines and peer-reviewed literature, cross-referenced and source-linked in under two seconds.",
  },
  {
    id: 2,
    k: "Auditability",
    h4: "Defend every decision you make.",
    p: "Every check generates a unique Decision ID: an immutable snapshot of what was shown, when, and from which sources. Ready for peer review or audit.",
  },
  {
    id: 3,
    k: "Evidence transparency",
    h4: "Source passages, not just citations.",
    p: "Every finding links to the exact passage in the source document, with source disagreements, uncertainty flags and conflict scores disclosed.",
  },
  {
    id: 4,
    k: "Clinical alternatives",
    h4: "Alternatives with full context.",
    p: "Where alternatives exist, RxShield shows them with contraindication data inline. Black-box warnings are always displayed.",
  },
];

export const rxshieldRegulatoryChips: LabelItem[] = [
  { id: 1, label: "FDA §520(o)(1)(E) non-device CDS" },
  { id: 2, label: "Health Canada CDS compliant" },
  { id: 3, label: "HIPAA compliant" },
  { id: 4, label: "SOC 2 Type II" },
  { id: 5, label: "21st Century Cures Act" },
];

export const rxshieldHeroChips: ChipItem[] = [
  {
    id: 1,
    label: "Try it →",
    href: "https://scanbo.ai/rxshield",
    rel: "noopener",
    link: true,
  },
  { id: 2, label: "Non-device CDS · FDA §520(o)(1)(E)" },
  { id: 3, label: "Free for HCPs · U.S. & Canada" },
];

/* ─── Scanbo EMR ─── */

export const ehrWorkflowCards: PCard[] = [
  {
    id: 1,
    k: "Scheduling intelligence",
    h4: "Appointments managed end to end.",
    p: "Booking, rescheduling, cancellation and waitlisting in one platform. No handoffs to external scheduling tools.",
  },
  {
    id: 2,
    k: "Operational visibility",
    h4: "Real-time patient flow.",
    p: "A live queue dashboard shows who is waiting, who is in consultation and what is delayed, improving throughput.",
  },
  {
    id: 3,
    k: "Connected platform",
    h4: "Workflow connected to clinical data.",
    p: "D8 vitals, HridayTaal® ECG interpretations and Smart Scale body composition all flow into the record. Every encounter is connected and documented.",
  },
];

export const ehrAppointmentSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Online and in-clinic booking",
    dd: "Patient- and admin-initiated appointments",
  },
  {
    id: 2,
    dt: "Rescheduling and cancellation",
    dd: "Managed in the platform, with notifications",
  },
  {
    id: 3,
    dt: "Waitlisting",
    dd: "Auto-fill Cancelled slots filled from an active waitlist",
  },
  {
    id: 4,
    dt: "Multi-department scheduling",
    dd: "Across specialties, departments and sites",
  },
];

export const ehrQueueSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Live queue dashboard",
    dd: "Real-time view of waiting, in-consultation, and completed",
  },
  {
    id: 2,
    dt: "Status tracking",
    dd: "Active, waiting, delayed and completed states",
  },
  {
    id: 3,
    dt: "TeleCall queue integration",
    dd: "Remote patients visible in the same queue view",
  },
  {
    id: 4,
    dt: "Throughput visibility",
    dd: "Daily and session-level patient flow",
  },
];

export const ehrCommunicationCards: PCard[] = [
  {
    id: 1,
    k: "Audio TeleCall",
    h4: "WebRTC-powered audio consultation.",
    p: "Browser-native audio calling via WebRTC. No app download required. Patients connect from any device — audio quality is stable, and the call is logged against the patient record.",
  },
  {
    id: 2,
    k: "Video TeleCall",
    h4: "WebRTC-powered video consultation.",
    p: "Full video consultation within the EHR environment. Clinicians can view vitals from D8, review ECG interpretations, and conduct the consultation — all in the same screen without switching tools.",
  },
  {
    id: 3,
    k: "Secure Chat",
    h4: "HIPAA-compliant clinical messaging.",
    p: "Encrypted messaging between clinicians, care teams, and patients. Secure Chat replaces insecure workarounds like WhatsApp or SMS for clinical communication, with messages logged in the patient record.",
  },
];

export const ehrFhirSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "FHIR R5-native interoperability",
    dd: "Built to the current standard from the ground up",
  },
  {
    id: 2,
    dt: "Structured data exchange",
    dd: "FHIR-formatted data in and out across connected systems",
  },
  {
    id: 3,
    dt: "API-first architecture",
    dd: "Connects to payers, labs, devices and external systems",
  },
  {
    id: 4,
    dt: "Real-time data availability",
    dd: "Clinical data where and when it is needed",
  },
];

export const ehrMigrationSpecRows: SpecRow[] = [
  {
    id: 1,
    dt: "Built-in migration tooling",
    dd: "Converts older FHIR environments to FHIR R5",
  },
  {
    id: 2,
    dt: "Conversion support",
    dd: "Maps and transforms legacy FHIR data",
  },
  {
    id: 3,
    dt: "Enterprise-ready",
    dd: "Designed for larger health organizations",
  },
  {
    id: 4,
    dt: "Manageable transition",
    dd: "Phased migration without disrupting care",
  },
];
