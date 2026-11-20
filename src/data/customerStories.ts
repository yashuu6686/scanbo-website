import type { StatItem } from "@/data/platform";

export interface PartnerChip {
  id: number;
  label: string;
  imgSrc?: string;
  imgWidth?: number;
  imgHeight?: number;
  badge?: string;
  more?: boolean;
}

export interface StoryStat {
  id: number;
  value: string;
  label: string;
  detail: string;
}

export interface FeaturedStory {
  id: number;
  logoSrc?: string;
  logoAlt?: string;
  badgeTitle?: string;
  badgeSubtitle?: string;
  badgeClassName?: string;
  name: string;
  place: string;
  tag: string;
  headline: string;
  body: string;
  meta: string;
  stats: StoryStat[];
}

export interface QuoteWallItem {
  id: number;
  quote: string;
  cite: string;
  detail: string;
}

export interface StoryListItem {
  id: number;
  k: string;
  title: string;
  description: string;
  stack: string;
}

export const customerStoriesHeroChips: string[] = [
  "750+ devices deployed",
  "250K+ patients screened",
  "650+ clinical settings",
];

export const customerStoriesPartnerChips: PartnerChip[] = [
  {
    id: 1,
    label: "Supraja Hospitals",
    imgSrc: "/assets/logo_supraja.png",
    imgWidth: 110,
    imgHeight: 30,
  },
  {
    id: 2,
    label: "Rushcare Hospitals",
    imgSrc: "/assets/logo_rushcare.png",
    imgWidth: 110,
    imgHeight: 30,
  },
  {
    id: 3,
    label: "WWC Clinics — DIMBHA",
    imgSrc: "/assets/logo_dimbha.png",
    imgWidth: 110,
    imgHeight: 30,
  },
  {
    id: 4,
    label: "Neurology",
    badge: "SGPGI MS",
  },
  {
    id: 5,
    label: "+ 650 clinical settings",
    more: true,
  },
];

export const customerStoriesFeatured: FeaturedStory[] = [
  {
    id: 1,
    logoSrc: "/assets/logo_supraja.png",
    logoAlt: "Supraja Hospitals",
    name: "Supraja Hospitals",
    place: "Multispecialty hospital · Hyderabad, India",
    tag: "Vitals Intelligence · Workflow",
    headline:
      "OPD and IPD documentation time reduced across a multispecialty hospital deployment.",
    body: "Scanbo® D8 captures eight vital parameters in minutes and pushes data directly into the EMR. Supraja eliminated manual transcription across OPD and IPD, and the time recovered goes back to patient care.",
    meta: "Live deployment · Scanbo® D8 + EHR",
    stats: [
      {
        id: 1,
        value: "8",
        label: "parameters per reading",
        detail: "Captured in minutes",
      },
      {
        id: 2,
        value: "Zero",
        label: "manual transcription",
        detail: "Device to EMR, automatic",
      },
    ],
  },
  {
    id: 2,
    logoSrc: "/assets/logo_dimbha.png",
    logoAlt: "DIMBHA — WWC Clinics",
    name: "WWC Clinics — DIMBHA - Clinic Partner",
    place: "Diabetes reversal clinics · Pune, India",
    tag: "Vitals · Metabolic · Workflow · TeleCall",
    headline:
      "50 devices unified across a diabetes reversal network, with remote patient monitoring built in.",
    body: "The network deployed Scanbo® D8, Smart Scale and EMR across its chronic care clinics. Video consultation and secure messaging extended clinical reach: patients receive continuous monitoring without returning to the clinic for every check-in.",
    meta: "Live deployment · Full platform",
    stats: [
      {
        id: 1,
        value: "75+",
        label: "devices deployed",
        detail: "Single connected system",
      },
      {
        id: 2,
        value: "3 layers",
        label: "platform intelligence",
        detail: "D8 + Smart Scale + EMR",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Jogendra Kumar Bastia",
    place: "Consultant Neurologist, MD · SGPGI MS",
    tag: "Vitals Intelligence · Clinical Documentation",
    headline:
      "Instant point-of-consultation vitals with zero manual entry, improving clinical note quality in a neurology OPD.",
    body: "In a high-volume neurology outpatient setting, Scanbo® D8 delivers reliable multiparameter vitals at the moment of consultation. Every reading is recorded instantly into the EMR, with no transcription lag and no manual errors.",
    meta: "Live deployment · Scanbo® D8 + EHR",
    badgeTitle: "SGPGI MS",
    badgeSubtitle: "Neurology OPD",
    badgeClassName: "sbadge sbadge-sgpgi",
    stats: [
      {
        id: 1,
        value: "0",
        label: "manual entry errors",
        detail: "Auto-push to EMR",
      },
      {
        id: 2,
        value: "Instant",
        label: "capture to record",
        detail: "At the point of consultation",
      },
    ],
  },
];

export const customerStoriesAggregateStats: StatItem[] = [
  { id: 1, value: "750+", label: "devices deployed" },
  { id: 2, value: "250K+", label: "Patients screened" },
  { id: 3, value: "1M+", label: "ECG AI analyses" },
  { id: 4, value: "7M+", label: "vital tests completed" },
  { id: 5, value: "150M+", label: "health signals captured" },
  { id: 6, value: "5", label: "Peer-reviewed publications" },
  { id: 7, value: "650+", label: "Clinical settings" },
];

export const customerStoriesQuotes: QuoteWallItem[] = [
  {
    id: 1,
    quote:
      "“Measurably reduced documentation time across OPD and IPD. That time goes back to patient care.”",
    cite: "Supraja Hospitals",
    detail: "Multispecialty hospital · Hyderabad",
  },
  {
    id: 2,
    quote:
      "“The EMR integration means every reading is recorded instantly, with no manual entry and no errors. It has genuinely improved the quality of my clinical notes.”",
    cite: "Dr. Jogendra Kumar Bastia",
    detail: "Consultant Neurologist, MD · SGPGI MS",
  },
  {
    id: 3,
    quote:
      "“D8, Smart Scale and EMR work as one system. Patients get continuous monitoring without needing to visit every time.”",
    cite: "Raj Kumar , CEO",
    detail: "Diabetes reversal network · Pune",
  },
];

export const customerStoriesAllList: StoryListItem[] = [
  {
    id: 1,
    k: "Primary care · Hyderabad",
    title: "Supraja Hospitals",
    description:
      "OPD and IPD documentation time reduced. Manual entry eliminated across all wards.",
    stack: "Scanbo® D8 + EHR",
  },
  {
    id: 2,
    k: "Chronic care · Pune",
    title: "WWC Clinics — DIMBHA",
    description:
      "50 devices, full platform. Remote monitoring extended clinical reach without additional visits.",
    stack: "D8 + Smart Scale + EMR",
  },
  {
    id: 3,
    k: "Neurology OPD · India",
    title: "SGPGI MS · Dr. Bastia",
    description:
      "Point-of-consultation vitals with instant EMR push. Zero manual errors. Improved note quality.",
    stack: "Scanbo® D8 + EHR",
  },
  {
    id: 4,
    k: "Multispecialty · Hyderabad",
    title: "Rushcare Hospitals",
    description:
      "Documentation delays reduced. Clinical data flows from device to record without manual entry.",
    stack: "Scanbo® D8 + EHR",
  },
  {
    id: 5,
    k: "Cardiology · India",
    title: "Cardiac screening initiative",
    description:
      "1M+ ECG AI analyses. Routine arrhythmia detection embedded in the point-of-care workflow.",
    stack: "HridayTaal® Cardiac Agent",
  },
];
