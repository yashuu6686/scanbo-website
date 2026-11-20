import type { SpecRow, StatItem } from "@/data/platform";
import type { PlatformLink } from "@/data/whoWeServe";

export interface RateRow {
  id: number;
  code: string;
  description: string;
  cadence: string;
  amount: string;
}

export interface RateGroup {
  id: number;
  title: string;
  rows: RateRow[];
}

export const reimbursementHeroChips: string[] = [
  "No new CPT code required",
  "SMBP · RPM · ECG pathways",
  "Strong fit for ACOs",
];

export const reimbursementD8PathwayRows: SpecRow[] = [
  { id: 1, dt: "SMBP", dd: "99473 · 99474" },
  { id: 2, dt: "RPM", dd: "99453 · 99454 · 99457 · 99458" },
  { id: 3, dt: "Physician review", dd: "99091" },
  { id: 4, dt: "Rhythm ECG", dd: "93040 · 93041 · 93042" },
];

export const reimbursementSmartScalePathwayRows: SpecRow[] = [
  { id: 1, dt: "RPM", dd: "99453 · 99454 · 99457 · 99458" },
  { id: 2, dt: "Physician review", dd: "99091" },
  {
    id: 3,
    dt: "Why it fits",
    dd: "CMS materials specifically cite weight as a remote physiologic monitoring parameter — perfect positioning.",
  },
];

export const reimbursementRateGroups: RateGroup[] = [
  {
    id: 1,
    title: "Step 1 · SMBP: self-measured blood pressure · Scanbo® D8",
    rows: [
      {
        id: 1,
        code: "CPT 99473",
        description: "SMBP device setup and patient education, one-time per device",
        cadence: "One-time",
        amount: "$11.90",
      },
      {
        id: 2,
        code: "CPT 99474",
        description:
          "SMBP readings review and treatment management, min. 12 readings/month",
        cadence: "Monthly",
        amount: "~$14.46",
      },
    ],
  },
  {
    id: 2,
    title: "Step 2 · RPM: remote physiologic monitoring · Scanbo® D8 and Smart Scale",
    rows: [
      {
        id: 1,
        code: "CPT 99453",
        description: "RPM device setup and patient education, one-time per device",
        cadence: "One-time",
        amount: "$22.00",
      },
      {
        id: 2,
        code: "CPT 99454",
        description:
          "Device supply, data collection and transmission, min. 16 days/month",
        cadence: "Monthly",
        amount: "$47.06",
      },
      {
        id: 3,
        code: "CPT 99457",
        description:
          "RPM clinical management, first 20 min/month, live interaction required",
        cadence: "Monthly",
        amount: "$51.77",
      },
      {
        id: 4,
        code: "CPT 99458",
        description:
          "RPM add-on, each additional 20 min/month, up to 2× per month",
        cadence: "Monthly",
        amount: "$41.00",
      },
      {
        id: 5,
        code: "CPT 99091",
        description: "Physician data review and interpretation, 30 min/month",
        cadence: "Monthly",
        amount: "$38.21",
      },
    ],
  },
  {
    id: 3,
    title: "Step 3 · ECG: rhythm ECG billing pathways · Scanbo® D8 + HridayTaal®",
    rows: [
      {
        id: 1,
        code: "CPT 93040",
        description: "Rhythm ECG with interpretation and report",
        cadence: "Per use",
        amount: "~$18.00",
      },
      {
        id: 2,
        code: "CPT 93041",
        description: "Rhythm ECG tracing only, without interpretation",
        cadence: "Per use",
        amount: "~$25.00",
      },
      {
        id: 3,
        code: "CPT 93042",
        description: "Rhythm ECG interpretation and report only",
        cadence: "Per use",
        amount: "~$30.00",
      },
    ],
  },
];

export const reimbursementD8RevenueRows: SpecRow[] = [
  { id: 1, dt: "99453 · RPM setup", dd: "$22.00 × 1" },
  { id: 2, dt: "99454 · Device supply", dd: "$47.06 × 12 = $564.72" },
  { id: 3, dt: "99457 · RPM management", dd: "$51.77 × 12 = $621.24" },
  { id: 4, dt: "Core RPM per patient / year", dd: "~$1,208" },
  {
    id: 5,
    dt: "Optional",
    dd: "99458 ($492/yr) · 99091 ($458/yr) · SMBP codes · ECG adjuncts",
  },
];

export const reimbursementSmartScaleRevenueRows: SpecRow[] = [
  { id: 1, dt: "99453 · RPM setup", dd: "$22.00 × 1" },
  { id: 2, dt: "99454 · Device supply", dd: "$47.06 × 12 = $564.72" },
  { id: 3, dt: "99457 · RPM management", dd: "$51.77 × 12 = $621.24" },
  { id: 4, dt: "Core RPM per patient / year", dd: "~$1,208" },
  {
    id: 5,
    dt: "Optional",
    dd: "99458 ($492/yr) · 99091 ($458/yr)",
  },
];

export const reimbursementRevenueStats: StatItem[] = [
  {
    id: 1,
    value: "~$121k",
    label: "D8 · 100 patients · Year 1 incl. setup",
  },
  {
    id: 2,
    value: "~$121k",
    label: "Smart Scale · 100 patients · Year 1 incl. setup",
  },
  {
    id: 3,
    value: "~$242k",
    label: "Both · 200 patients · Year 1 combined",
  },
  {
    id: 4,
    value: "~$238k/yr",
    label: "Year 2+ recurring · 200 patients",
  },
];

export const reimbursementProductLinks: PlatformLink[] = [
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
];
