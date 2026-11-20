export interface DataRequestType {
  id: number;
  title: string;
  description: string;
}

export interface DataRequestTimelineItem {
  id: number;
  region: string;
  detail: string;
}

export const dataRequestTypes: DataRequestType[] = [
  {
    id: 1,
    title: "Access Request",
    description: "Receive a copy of all personal data we hold about you.",
  },
  {
    id: 2,
    title: "Correction Request",
    description: "Update or correct inaccurate personal data we hold.",
  },
  {
    id: 3,
    title: "Deletion Request",
    description:
      "Request erasure of your personal data subject to legal obligations.",
  },
  {
    id: 4,
    title: "Portability Request",
    description: "Receive your data in a structured, machine-readable format.",
  },
];

export const dataRequestTimeline: DataRequestTimelineItem[] = [
  {
    id: 1,
    region: "India (DPDP):",
    detail: "30 days of verified request",
  },
  {
    id: 2,
    region: "EU/UK (GDPR):",
    detail: "30 days, extendable to 90 for complex requests",
  },
  {
    id: 3,
    region: "USA (HIPAA / CCPA):",
    detail: "30 days of verified request",
  },
];
