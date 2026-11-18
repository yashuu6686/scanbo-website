import type { ReactNode } from "react";
import { CookieBanner } from "@/components/common/CookieBanner";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { MobileNav } from "@/components/common/MobileNav";
import { SkipLink } from "@/components/common/SkipLink";
import { MobileMenuInit } from "@/components/MobileMenuInit";
import type { NavSection } from "@/components/shell/types";

type SitePageProps = {
  children: ReactNode;
  jsonLd?: string;
  activeNav?: NavSection;
};

/** Shared page chrome + main body. DOM order matches legacy full-page HTML. */
export function SitePage({ children, jsonLd, activeNav }: SitePageProps) {
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
      <MobileMenuInit />
      {children}
      <Footer />
      <CookieBanner />
    </>
  );
}
