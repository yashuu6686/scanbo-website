import { SiteHtml } from "@/components/SiteHtml";
import { buildMobileNavHtml } from "@/components/shell/navHtml";

export function MobileNav() {
  return <SiteHtml html={buildMobileNavHtml()} />;
}
