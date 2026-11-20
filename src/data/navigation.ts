/** Shared navigation / section-link datasets used across header, footer, and page strips. */

export interface DropdownNavItem {
  id: number;
  href: string;
  num: string;
  title: string;
  description: string;
}

export interface SimpleNavItem {
  id: number;
  href: string;
  label: string;
}

export interface SectionSixItem {
  id: number;
  href: string;
  num: string;
  label: string;
}

export interface LegalNavItem {
  id: number;
  href: string;
  label: string;
}

export interface LegalCardItem {
  id: number;
  href: string;
  category: string;
  title: string;
  cta: string;
}

export interface FooterLinkItem {
  id: number;
  href: string;
  label: string;
}

export interface FooterColumn {
  id: number;
  title: string;
  links: FooterLinkItem[];
}

export interface OverviewLink {
  id: number;
  href: string;
  label: string;
}

/* ─── Platform ─── */

export const platformDropdownItems: DropdownNavItem[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8 (D8–D19)",
    description: "19 lab-grade parameters · CDSCO Approved",
  },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "1M+ ECG analyses · AFIB & arrhythmia detection",
  },
  {
    id: 3,
    href: "/platform/smart-scale/",
    num: "03",
    title: "Scanbo® Smart Scale",
    description: "Metabolic Intelligence for body composition monitoring",
  },
  {
    id: 4,
    href: "/platform/ambient-documentation/",
    num: "04",
    title: "Ambient Documentation Agent",
    description: "Summarization Intelligence for clinical documentation",
  },
  {
    id: 5,
    href: "/platform/rxshield/",
    num: "05",
    title: "RxShield Safety Agent",
    description: "Defensive Intelligence for medication safety",
  },
  {
    id: 6,
    href: "/platform/scanbo-ehr/",
    num: "06",
    title: "Scanbo® EMR",
    description: "The operational hub for connected care",
  },
];

export const platformOverviewLink: OverviewLink = {
  id: 1,
  href: "/platform/",
  label: "Platform overview →",
};

/** Section strip labels (shorter D8 title than header dropdown). */
export const platformSixItems: SectionSixItem[] = [
  { id: 1, href: "/platform/scanbo-d8/", num: "01", label: "Scanbo® D8" },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    label: "HridayTaal® Cardiac Agent",
  },
  {
    id: 3,
    href: "/platform/smart-scale/",
    num: "03",
    label: "Scanbo® Smart Scale",
  },
  {
    id: 4,
    href: "/platform/ambient-documentation/",
    num: "04",
    label: "Ambient Documentation",
  },
  { id: 5, href: "/platform/rxshield/", num: "05", label: "RxShield" },
  { id: 6, href: "/platform/scanbo-ehr/", num: "06", label: "Scanbo® EMR" },
];

/* ─── Whom We Serve ─── */

export const whomWeServeDropdownItems: DropdownNavItem[] = [
  {
    id: 1,
    href: "/who-we-serve/hospitals-clinics/",
    num: "01",
    title: "Hospitals & clinics",
    description: "Enterprise diagnostics for connected care delivery",
  },
  {
    id: 2,
    href: "/who-we-serve/physicians/",
    num: "02",
    title: "Physicians",
    description: "Diagnose faster and document less with AI",
  },
  {
    id: 3,
    href: "/who-we-serve/pharmacists/",
    num: "03",
    title: "Pharmacists",
    description: "Medication safety and decision support with AI",
  },
  {
    id: 4,
    href: "/who-we-serve/community-health-workers/",
    num: "04",
    title: "Community health workers",
    description: "Portable screening for frontline and rural care",
  },
  {
    id: 5,
    href: "/who-we-serve/individuals/",
    num: "05",
    title: "Individuals",
    description: "Personal monitoring between visits and beyond the clinic",
  },
  {
    id: 6,
    href: "/who-we-serve/accountable-care-organizations/",
    num: "06",
    title: "Accountable care organizations",
    description: "Scalable screening and insights for value-based care",
  },
];

export const whomWeServeOverviewLink: OverviewLink = {
  id: 1,
  href: "/who-we-serve/",
  label: "All audiences →",
};

export const whomWeServeSixItems: SectionSixItem[] =
  whomWeServeDropdownItems.map(({ id, href, num, title }) => ({
    id,
    href,
    num,
    label: title,
  }));

/* ─── Insights ─── */

export const insightsDropdownItems: DropdownNavItem[] = [
  {
    id: 1,
    href: "/insights/clinical-studies/",
    num: "01",
    title: "Clinical studies",
    description: "Clinical evidence and published research",
  },
  {
    id: 2,
    href: "/insights/customer-stories/",
    num: "02",
    title: "Customer stories",
    description: "Real outcomes from clinical deployments",
  },
  {
    id: 3,
    href: "/insights/reimbursement-guide/",
    num: "03",
    title: "Reimbursement guide",
    description: "Medicare CPT, RPM and SMBP pathways",
  },
];

export const insightsOverviewLink: OverviewLink = {
  id: 1,
  href: "/insights/",
  label: "Insights overview →",
};

export const insightsSixItems: SectionSixItem[] = insightsDropdownItems.map(
  ({ id, href, num, title }) => ({
    id,
    href,
    num,
    label: title,
  }),
);

/* ─── About / Company ─── */

export const aboutDropdownItems: DropdownNavItem[] = [
  {
    id: 1,
    href: "/about/company/",
    num: "01",
    title: "Who we are",
    description: "Who we are, why we exist and where we are going",
  },
  {
    id: 2,
    href: "/about/manufacturing-quality/",
    num: "02",
    title: "Manufacturing & quality",
    description:
      "In-house manufacturing, quality systems and regulatory discipline",
  },
  {
    id: 3,
    href: "/about/data-philosophy/",
    num: "03",
    title: "Data philosophy",
    description: "Consent-based data practices and patient ownership",
  },
  {
    id: 4,
    href: "/about/newsroom/",
    num: "04",
    title: "Newsroom",
    description: "Press coverage, company updates and announcements",
  },
  {
    id: 5,
    href: "/about/careers/",
    num: "05",
    title: "Careers",
    description: "Join the team building AI for clinical care",
  },
  {
    id: 6,
    href: "/about/contact/",
    num: "06",
    title: "Contact",
    description: "Speak with Scanbo®",
  },
];

export const aboutOverviewLink: OverviewLink = {
  id: 1,
  href: "/about/",
  label: "About overview →",
};

export const aboutSixItems: SectionSixItem[] = aboutDropdownItems.map(
  ({ id, href, num, title }) => ({
    id,
    href,
    num,
    label: title,
  }),
);

/* ─── Legal sidebar ─── */

export const legalNavItems: LegalNavItem[] = [
  { id: 1, href: "/legal/privacy-policy/", label: "Privacy Policy" },
  { id: 2, href: "/legal/terms-conditions/", label: "Terms & Conditions" },
  { id: 3, href: "/legal/cookie-preferences/", label: "Cookie Preferences" },
  {
    id: 4,
    href: "/legal/hipaa-notice/",
    label: "HIPAA Notice of Privacy Practices",
  },
  { id: 5, href: "/legal/gdpr-statement/", label: "GDPR Statement" },
  {
    id: 6,
    href: "/legal/dpdp-compliance/",
    label: "DPDP Compliance Statement",
  },
  { id: 7, href: "/legal/data-request/", label: "Data Request" },
  { id: 8, href: "/legal/instructions-for-use/", label: "Instructions for Use" },
  { id: 9, href: "/legal/telehealth/", label: "Telehealth Policy" },
  {
    id: 10,
    href: "/legal/responsible-disclosure/",
    label: "Responsible Disclosure",
  },
  {
    id: 11,
    href: "/legal/non-discrimination/",
    label: "Non-Discrimination Policy",
  },
  { id: 12, href: "/legal/disclaimer/", label: "Disclaimer" },
  { id: 13, href: "/legal/sitemap/", label: "Sitemap" },
];

export const legalIndexCards: LegalCardItem[] = [
  {
    id: 1,
    href: "/legal/privacy-policy/",
    category: "Legal",
    title: "Privacy Policy",
    cta: "Read →",
  },
  {
    id: 2,
    href: "/legal/terms-conditions/",
    category: "Legal",
    title: "Terms & Conditions",
    cta: "Read →",
  },
  {
    id: 3,
    href: "/legal/cookie-preferences/",
    category: "Legal",
    title: "Cookie Preferences",
    cta: "Read →",
  },
  {
    id: 4,
    href: "/legal/hipaa-notice/",
    category: "Compliance · North America",
    title: "HIPAA Notice of Privacy Practices",
    cta: "Read →",
  },
  {
    id: 5,
    href: "/legal/gdpr-statement/",
    category: "Compliance · European Union",
    title: "GDPR Statement",
    cta: "Read →",
  },
  {
    id: 6,
    href: "/legal/dpdp-compliance/",
    category: "Compliance · India",
    title: "DPDP Compliance Statement",
    cta: "Read →",
  },
  {
    id: 7,
    href: "/legal/data-request/",
    category: "Privacy",
    title: "Data Request",
    cta: "Read →",
  },
  {
    id: 8,
    href: "/legal/instructions-for-use/",
    category: "Medical Device",
    title: "Instructions for Use",
    cta: "Read →",
  },
  {
    id: 9,
    href: "/legal/telehealth/",
    category: "Legal · RxShield Safety Agent",
    title: "Telehealth Policy",
    cta: "Read →",
  },
  {
    id: 10,
    href: "/legal/responsible-disclosure/",
    category: "Security",
    title: "Responsible Disclosure",
    cta: "Read →",
  },
  {
    id: 11,
    href: "/legal/non-discrimination/",
    category: "Legal",
    title: "Non-Discrimination Policy",
    cta: "Read →",
  },
  {
    id: 12,
    href: "/legal/disclaimer/",
    category: "Legal · Scanbo",
    title: "Disclaimer",
    cta: "Read →",
  },
];

/* ─── Footer columns (exact labels & order as previously rendered) ─── */

export const footerColumns: FooterColumn[] = [
  {
    id: 1,
    title: "Platform",
    links: [
      { id: 1, href: "/platform/scanbo-d8/", label: "Scanbo® D8 (D8–D19)" },
      {
        id: 2,
        href: "/platform/hridaytaal-ecg-ai/",
        label: "HridayTaal® Cardiac Agent",
      },
      { id: 3, href: "/platform/smart-scale/", label: "Smart Scale" },
      { id: 4, href: "/platform/rxshield/", label: "RxShield" },
      {
        id: 5,
        href: "/platform/ambient-documentation/",
        label: "Ambient Documentation",
      },
      { id: 6, href: "/platform/scanbo-ehr/", label: "Scanbo® EMR" },
    ],
  },
  {
    id: 2,
    title: "Whom We Serve",
    links: [
      {
        id: 1,
        href: "/who-we-serve/hospitals-clinics/",
        label: "Hospitals & clinics",
      },
      { id: 2, href: "/who-we-serve/physicians/", label: "Physicians" },
      { id: 3, href: "/who-we-serve/pharmacists/", label: "Pharmacists" },
      {
        id: 4,
        href: "/who-we-serve/community-health-workers/",
        label: "Community health workers",
      },
      { id: 5, href: "/who-we-serve/individuals/", label: "Individuals" },
      {
        id: 6,
        href: "/who-we-serve/accountable-care-organizations/",
        label: "U.S. ACOs",
      },
    ],
  },
  {
    id: 3,
    title: "Insights",
    links: [
      {
        id: 1,
        href: "/insights/clinical-studies/",
        label: "Clinical studies",
      },
      {
        id: 2,
        href: "/insights/customer-stories/",
        label: "Customer stories",
      },
      {
        id: 3,
        href: "/insights/reimbursement-guide/",
        label: "Reimbursement guide",
      },
      { id: 4, href: "/about/newsroom/", label: "Newsroom" },
    ],
  },
  {
    id: 4,
    title: "Company",
    links: [
      { id: 1, href: "/about/company/", label: "About" },
      {
        id: 2,
        href: "/about/manufacturing-quality/",
        label: "Manufacturing & quality",
      },
      { id: 3, href: "/about/data-philosophy/", label: "Data philosophy" },
      { id: 4, href: "/about/careers/", label: "Careers" },
      { id: 5, href: "/about/contact/", label: "Contact" },
    ],
  },
];

export const footerLegalLinks: SimpleNavItem[] = [
  { id: 1, href: "/legal/privacy-policy/", label: "Privacy Policy" },
  { id: 2, href: "/legal/terms-conditions/", label: "Terms & Conditions" },
  { id: 3, href: "/legal/cookie-preferences/", label: "Cookie Preferences" },
  { id: 4, href: "/legal/non-discrimination/", label: "Non-Discrimination" },
  { id: 5, href: "/legal/responsible-disclosure/", label: "Responsible Disclosure" },
  { id: 6, href: "/legal/instructions-for-use/", label: "Instructions for Use" },
  { id: 7, href: "/legal/hipaa-notice/", label: "HIPAA Notice" },
  { id: 8, href: "/legal/gdpr-statement/", label: "GDPR Statement" },
  { id: 9, href: "/legal/dpdp-compliance/", label: "DPDP Compliance" },
  { id: 10, href: "/legal/data-request/", label: "Data Request" },
  { id: 11, href: "/legal/sitemap/", label: "Sitemap" },
  { id: 12, href: "/legal/telehealth/", label: "Telehealth" },
  { id: 13, href: "/legal/disclaimer/", label: "Disclaimer" },
];

export const footerAppLinks = [
  {
    id: 1,
    href: "https://apps.apple.com/in/app/scanbo-3-0/id6479600172",
    ariaLabel: "Download on the App Store",
    small: "Download on the",
    bold: "App Store",
    store: "apple" as const,
  },
  {
    id: 2,
    href: "https://play.google.com/store/apps/details?id=com.scanbo",
    ariaLabel: "Get it on Google Play",
    small: "GET IT ON",
    bold: "Google Play",
    store: "google" as const,
  },
];

export const socialLinks = [
  {
    id: 1,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scanbo/",
  },
  {
    id: 2,
    label: "X",
    href: "https://x.com/ScanboOfficial",
  },
  {
    id: 3,
    label: "YouTube",
    href: "https://www.youtube.com/@scanboai",
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/scanboofficial/",
  },
  {
    id: 5,
    label: "Facebook",
    href: "https://www.facebook.com/ScanboOfficial",
  },
] as const;

/* ─── Mobile nav (label + href only; overview links first per section) ─── */

export interface MobileNavSection {
  id: number;
  summary: string;
  overview: OverviewLink;
  items: SimpleNavItem[];
}

export const mobileNavSections: MobileNavSection[] = [
  {
    id: 1,
    summary: "Platform",
    overview: platformOverviewLink,
    items: platformDropdownItems.map(({ id, href, title }) => ({
      id,
      href,
      label: title,
    })),
  },
  {
    id: 2,
    summary: "Whom We Serve",
    overview: whomWeServeOverviewLink,
    items: whomWeServeDropdownItems.map(({ id, href, title }) => ({
      id,
      href,
      label: title,
    })),
  },
  {
    id: 3,
    summary: "Insights",
    overview: insightsOverviewLink,
    items: insightsDropdownItems.map(({ id, href, title }) => ({
      id,
      href,
      label: title,
    })),
  },
  {
    id: 4,
    summary: "Company",
    overview: aboutOverviewLink,
    items: aboutDropdownItems.map(({ id, href, title }) => ({
      id,
      href,
      label: title,
    })),
  },
];
