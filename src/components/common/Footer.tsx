import { SiteHtml } from "@/components/SiteHtml";
import { buildFooterHtml } from "@/components/shell/footerHtml";

export function Footer() {
  return <SiteHtml html={buildFooterHtml()} />;
}
