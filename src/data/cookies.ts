import type { ConsentCategories } from "@/lib/consent";

export interface CookiePreferenceRow {
  id: number;
  key: keyof ConsentCategories;
  title: string;
  description: string;
  locked?: boolean;
}

export const cookiePreferenceRows: CookiePreferenceRow[] = [
  {
    id: 1,
    key: "necessary",
    title: "Strictly Necessary",
    description:
      "Required for the website to function securely. These cannot be disabled.",
    locked: true,
  },
  {
    id: 2,
    key: "functional",
    title: "Functional Cookies",
    description:
      "Remember preferences such as language and region to improve your experience.",
  },
  {
    id: 3,
    key: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors use the site. Data is aggregated where possible.",
  },
  {
    id: 4,
    key: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to measure campaigns and show relevant content. Requires explicit consent.",
  },
];
