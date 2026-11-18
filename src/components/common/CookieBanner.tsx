import { SiteHtml } from "@/components/SiteHtml";
import { buildCookieHtml } from "@/components/shell/footerHtml";

export function CookieBanner() {
  return <SiteHtml html={buildCookieHtml()} />;
}
