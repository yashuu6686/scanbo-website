import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "RxShield | Drug Interaction Checker for Clinicians | Scanbo",
  description: "RxShield checks drug interactions against cited sources and records every decision in an auditable evidence trail. Built for U.S. and Canadian clinicians.",
  alternates: { canonical: "/platform/rxshield/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "RxShield | Drug Interaction Checker for Clinicians | Scanbo",
    description: "RxShield checks drug interactions against cited sources and records every decision in an auditable evidence trail. Built for U.S. and Canadian clinicians.",
    url: "/platform/rxshield/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RxShield | Drug Interaction Checker for Clinicians | Scanbo",
    description: "RxShield checks drug interactions against cited sources and records every decision in an auditable evidence trail. Built for U.S. and Canadian clinicians.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="platform">
      <PageContent />
    </SitePage>
  );
}
