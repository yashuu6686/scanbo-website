import type { NavSection } from "@/components/shell/types";

/** Top-level nav href that receives class="on" for each section. */
export const NAV_SECTION_HREF: Record<NavSection, string> = {
  platform: "/platform/",
  "who-we-serve": "/who-we-serve/",
  insights: "/insights/",
  about: "/about/",
};
