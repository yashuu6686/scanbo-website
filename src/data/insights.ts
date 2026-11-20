import { clinicalStudiesPublications } from "@/data/clinicalStudies";
import type { StatItem } from "@/data/platform";
import type { PlatformLink } from "@/data/whoWeServe";

export interface EvidenceRow {
  id: number;
  href: string;
  source: string;
  title: string;
  cta: string;
}

export interface StoryTeaser {
  id: number;
  dark?: boolean;
  result: string;
  quote: string;
  cite: string;
  citeDetail: string;
}

export interface CodeCard {
  id: number;
  category: string;
  codes: string;
  description: string;
}

export interface BurdenStat {
  id: number;
  value: string;
  label: string;
  highlight?: boolean;
}

export const insightsHeroStats: StatItem[] = [
  { id: 1, value: "750+", label: "devices deployed" },
  { id: 2, value: "7M+", label: "vital tests completed" },
  { id: 3, value: "150M+", label: "health signals captured" },
  { id: 4, value: "1M+", label: "ECG AI analyses" },
];

export const insightsExploreLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/insights/clinical-studies/",
    num: "01",
    title: "Clinical studies",
    description: "Clinical evidence and published research",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/insights/customer-stories/",
    num: "02",
    title: "Customer stories",
    description: "Real outcomes from clinical deployments",
    cta: "Learn more →",
  },
  {
    id: 3,
    href: "/insights/reimbursement-guide/",
    num: "03",
    title: "Reimbursement guide",
    description: "Medicare CPT, RPM and SMBP pathways",
    cta: "Learn more →",
  },
];

/** Derived from clinicalStudiesPublications — single source of truth for shared study text. */
export const insightsEvidenceRows: EvidenceRow[] =
  clinicalStudiesPublications.map((pub) => ({
    id: pub.id,
    href: pub.href,
    source: pub.source,
    title: pub.title,
    cta: pub.cta,
  }));

export const insightsStoryTeasers: StoryTeaser[] = [
  {
    id: 1,
    dark: true,
    result: "Zero diagnostic lag.",
    quote:
      "“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”",
    cite: "Supraja Hospitals · Rushcare Hospitals",
    citeDetail: "· Multispecialty networks, Hyderabad",
  },
  {
    id: 2,
    result: "4,000 hours recovered.",
    quote: "“Documentation time is gone. That time is back with our doctors.”",
    cite: "Clinic partner CEO",
    citeDetail: "· Diabetes reversal network across 50 devices, Pune",
  },
  {
    id: 3,
    result: "Instant. No errors.",
    quote:
      "“Vitals at the point of consultation, already in the EMR before I finish the examination.”",
    cite: "Dr. Jogendra Kumar Bastia, MD",
    citeDetail: "· Consultant Neurologist",
  },
];

export const insightsReimbursementStats: StatItem[] = [
  {
    id: 1,
    value: "10",
    label: "established CPT codes across SMBP, RPM and ECG",
  },
  {
    id: 2,
    value: "~$1,208",
    label: "core RPM revenue per patient, per year",
  },
  {
    id: 3,
    value: "2",
    label: "U.S. ACO pilots completed: Florida and New York",
  },
];

export const insightsReimbursementCodes: CodeCard[] = [
  {
    id: 1,
    category: "SMBP · Scanbo® D8",
    codes: "99473 · 99474",
    description: "Self-measured blood pressure setup, education and review.",
  },
  {
    id: 2,
    category: "RPM · D8 and Smart Scale",
    codes: "99453 · 99454 · 99457 · 99458",
    description: "Device setup, monthly supply and clinical management time.",
  },
  {
    id: 3,
    category: "ECG · D8 + HridayTaal®",
    codes: "93040 · 93041 · 93042",
    description: "Rhythm ECG tracing, interpretation and report.",
  },
];

export const insightsBurdenStats: BurdenStat[] = [
  {
    id: 1,
    value: "74%",
    label: "of deaths worldwide are from chronic disease",
  },
  {
    id: 2,
    value: "589M",
    label:
      "adults living with diabetes, 3 in 4 in low- and middle-income countries",
  },
  {
    id: 3,
    value: "~4 in 10",
    label: "don't know they have it: 252M people undiagnosed",
    highlight: true,
  },
];

export const insightsSettingChips: string[] = [
  "Hospitals",
  "Multispecialty clinics",
  "Community health programs",
  "Chronic-disease networks",
  "Public health programs",
  "U.S. ACO pilots",
];
