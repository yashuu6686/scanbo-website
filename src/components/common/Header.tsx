import { SiteHtml } from "@/components/SiteHtml";
import { buildNavHtml } from "@/components/shell/navHtml";
import type { NavSection } from "@/components/shell/types";

type HeaderProps = {
  active?: NavSection;
};

export function Header({ active }: HeaderProps) {
  return <SiteHtml html={buildNavHtml(active)} />;
}
