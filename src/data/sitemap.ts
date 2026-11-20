export interface SitemapLink {
  id: number;
  href: string;
  label: string;
}

export interface SitemapGroup {
  id: number;
  title: string;
  links: SitemapLink[];
}

export const sitemapGroups: SitemapGroup[] = [
  {
    id: 1,
    title: "Home",
    links: [{ id: 1, href: "/", label: "Home" }],
  },
  {
    id: 2,
    title: "Platform",
    links: [
      { id: 1, href: "/platform/", label: "Platform overview" },
      { id: 2, href: "/platform/scanbo-d8/", label: "Scanbo® D8" },
      {
        id: 3,
        href: "/platform/hridaytaal-ecg-ai/",
        label: "HridayTaal® Cardiac Agent",
      },
      { id: 4, href: "/platform/smart-scale/", label: "Smart Scale" },
      {
        id: 5,
        href: "/platform/ambient-documentation/",
        label: "Ambient Documentation Agent",
      },
      { id: 6, href: "/platform/rxshield/", label: "RxShield" },
      { id: 7, href: "/platform/scanbo-ehr/", label: "Scanbo® EMR" },
    ],
  },
  {
    id: 3,
    title: "Whom We Serve",
    links: [
      { id: 1, href: "/who-we-serve/", label: "All audiences" },
      {
        id: 2,
        href: "/who-we-serve/hospitals-clinics/",
        label: "Point-of-Care Diagnostics for Hospitals & Clinics",
      },
      { id: 3, href: "/who-we-serve/physicians/", label: "For Physicians" },
      { id: 4, href: "/who-we-serve/pharmacists/", label: "For Pharmacists" },
      {
        id: 5,
        href: "/who-we-serve/community-health-workers/",
        label: "For Community Health Workers",
      },
      {
        id: 6,
        href: "/who-we-serve/individuals/",
        label: "Health Monitoring Between Visits",
      },
      {
        id: 7,
        href: "/who-we-serve/accountable-care-organizations/",
        label: "For U.S. ACOs",
      },
    ],
  },
  {
    id: 4,
    title: "Insights",
    links: [
      { id: 1, href: "/insights/", label: "Insights overview" },
      {
        id: 2,
        href: "/insights/clinical-studies/",
        label: "Clinical Studies",
      },
      {
        id: 3,
        href: "/insights/customer-stories/",
        label: "Customer Stories",
      },
      {
        id: 4,
        href: "/insights/reimbursement-guide/",
        label: "RPM and SMBP Reimbursement Guide",
      },
    ],
  },
  {
    id: 5,
    title: "About",
    links: [
      { id: 1, href: "/about/", label: "About overview" },
      { id: 2, href: "/about/company/", label: "Who We Are" },
      {
        id: 3,
        href: "/about/manufacturing-quality/",
        label: "Manufacturing and Quality",
      },
      { id: 4, href: "/about/data-philosophy/", label: "Data Philosophy" },
      { id: 5, href: "/about/newsroom/", label: "Newsroom" },
      { id: 6, href: "/about/careers/", label: "Careers at Scanbo" },
      { id: 7, href: "/about/contact/", label: "Contact Scanbo" },
    ],
  },
  {
    id: 6,
    title: "Legal",
    links: [
      { id: 1, href: "/legal/", label: "Legal overview" },
      { id: 2, href: "/legal/privacy-policy/", label: "Privacy Policy" },
      {
        id: 3,
        href: "/legal/terms-conditions/",
        label: "Terms and Conditions",
      },
      {
        id: 4,
        href: "/legal/cookie-preferences/",
        label: "Cookie Preferences",
      },
      {
        id: 5,
        href: "/legal/hipaa-notice/",
        label: "HIPAA Notice of Privacy Practices",
      },
      { id: 6, href: "/legal/gdpr-statement/", label: "GDPR Statement" },
      {
        id: 7,
        href: "/legal/dpdp-compliance/",
        label: "DPDP Compliance Statement",
      },
      { id: 8, href: "/legal/data-request/", label: "Data Request" },
      {
        id: 9,
        href: "/legal/instructions-for-use/",
        label: "Instructions for Use",
      },
      { id: 10, href: "/legal/telehealth/", label: "Telehealth Policy" },
      {
        id: 11,
        href: "/legal/responsible-disclosure/",
        label: "Responsible Disclosure",
      },
      {
        id: 12,
        href: "/legal/non-discrimination/",
        label: "Non-Discrimination Policy",
      },
      { id: 13, href: "/legal/disclaimer/", label: "Disclaimer" },
    ],
  },
];
