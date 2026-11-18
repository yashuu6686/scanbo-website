import { CookieBanner } from "@/components/common/CookieBanner";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { MobileNav } from "@/components/common/MobileNav";
import { SkipLink } from "@/components/common/SkipLink";
import { SiteHtml } from "@/components/SiteHtml";
import type { NavSection } from "@/components/shell/types";

type SitePageProps = {
  mainHtml: string;
  jsonLd?: string;
  activeNav?: NavSection;
};

/** Shared page chrome + main body. DOM order matches legacy full-page HTML. */
export function SitePage({ mainHtml, jsonLd, activeNav }: SitePageProps) {
  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      ) : null}
      <SkipLink />
      <Header active={activeNav} />
      <MobileNav />
      <SiteHtml html={mainHtml} />
      <Footer />
      <CookieBanner />
    </>
  );
}
