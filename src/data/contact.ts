export interface ContactRoleOption {
  id: number;
  value: string;
  label: string;
}

export interface ContactChannel {
  id: number;
  title: string;
  email: string;
  description: string;
  anchorId?: string;
}

export interface ContactOffice {
  id: number;
  flagSrc: string;
  region: string;
  company: string;
  showTm?: boolean;
  addressLines: string[];
  phoneLines: string[];
  isHq?: boolean;
}

export const contactRoleOptions: ContactRoleOption[] = [
  { id: 1, value: "Physician / Clinician", label: "Physician / clinician" },
  { id: 2, value: "Hospital or Health System", label: "Hospital or health system" },
  { id: 3, value: "Community Health Organisation", label: "Community health organization" },
  { id: 4, value: "ACO / Value-Based Care Programme", label: "ACO / value-based care program" },
  { id: 5, value: "Investor", label: "Investor" },
  { id: 6, value: "Strategic Partner", label: "Strategic partner" },
  { id: 7, value: "Researcher / Academic", label: "Researcher / academic" },
  { id: 8, value: "Pharmacist", label: "Pharmacist" },
  { id: 9, value: "Press / Media", label: "Press / media" },
  { id: 10, value: "Other", label: "Other" },
];

export const contactChannels: ContactChannel[] = [
  {
    id: 1,
    title: "General enquiries",
    email: "info@scanbo.com",
    description: "Questions about Scanbo and the platform.",
  },
  {
    id: 2,
    title: "Partnerships & clinical",
    email: "partnerships@scanbo.com",
    description: "Health systems, programs, distributors and walkthroughs.",
  },
  {
    id: 3,
    title: "Investor relations",
    email: "ir@scanbo.com",
    description: "Investor materials and briefings with management.",
    anchorId: "investors",
  },
  {
    id: 4,
    title: "Press & media",
    email: "press@scanbo.com",
    description: "Interviews, images and company information.",
  },
];

export const contactOffices: ContactOffice[] = [
  {
    id: 1,
    flagSrc: "/assets/flags/ca.png",
    region: "Canada · Head office",
    company: "Scanbo",
    showTm: true,
    addressLines: ["1048 165 Street", "Surrey, BC V4A 9A2, Canada"],
    phoneLines: ["+1 (855) 472-2626"],
    isHq: true,
  },
  {
    id: 2,
    flagSrc: "/assets/flags/us.png",
    region: "United States",
    company: "Scanbo Inc.",
    addressLines: ["4400 Buffalo Gap Rd., Suite 1500", "Abilene, Texas 79606, USA"],
    phoneLines: ["+1 (855) 472-2626"],
  },
  {
    id: 3,
    flagSrc: "/assets/flags/in.png",
    region: "India",
    company: "Scanbo India Private Limited",
    addressLines: [
      "B 403–406, Pragati Empire (IT Park)",
      "Sudama Chowk Road, Surat",
      "Gujarat 394101, India",
    ],
    phoneLines: ["+91 77788 01292", "Tech support: +91 93726 00050"],
  },
];
