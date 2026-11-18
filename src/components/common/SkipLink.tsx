import { SiteHtml } from "@/components/SiteHtml";
import { buildSkipLinkHtml } from "@/components/shell/navHtml";

export function SkipLink() {
  return <SiteHtml html={buildSkipLinkHtml()} />;
}
