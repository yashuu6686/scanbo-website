import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "For Pharmacists | Medication Safety and Screening | Scanbo",
  description: "Check drug interactions in seconds, see the source behind every finding and keep an auditable record, plus point-of-care screening at the counter.",
  alternates: { canonical: "/who-we-serve/pharmacists/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "For Pharmacists | Medication Safety and Screening | Scanbo",
    description: "Check drug interactions in seconds, see the source behind every finding and keep an auditable record, plus point-of-care screening at the counter.",
    url: "/who-we-serve/pharmacists/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Pharmacists | Medication Safety and Screening | Scanbo",
    description: "Check drug interactions in seconds, see the source behind every finding and keep an auditable record, plus point-of-care screening at the counter.",
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
