import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "For Community Health Workers | Portable Screening | Scanbo",
  description: "Portable, clinical-grade screening for frontline and rural care, with no lab, no specialist and no cold chain. Built for community health workers.",
  alternates: { canonical: "/who-we-serve/community-health-workers/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "For Community Health Workers | Portable Screening | Scanbo",
    description: "Portable, clinical-grade screening for frontline and rural care, with no lab, no specialist and no cold chain. Built for community health workers.",
    url: "/who-we-serve/community-health-workers/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Community Health Workers | Portable Screening | Scanbo",
    description: "Portable, clinical-grade screening for frontline and rural care, with no lab, no specialist and no cold chain. Built for community health workers.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="who-we-serve">
      <PageContent />
    </SitePage>
  );
}
