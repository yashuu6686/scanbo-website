import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "GDPR Statement | Scanbo",
  description: "How Scanbo complies with the EU GDPR and UK GDPR for individuals in the EEA and United Kingdom.",
  alternates: { canonical: "/legal/gdpr-statement/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "GDPR Statement | Scanbo",
    description: "How Scanbo complies with the EU GDPR and UK GDPR for individuals in the EEA and United Kingdom.",
    url: "/legal/gdpr-statement/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Statement | Scanbo",
    description: "How Scanbo complies with the EU GDPR and UK GDPR for individuals in the EEA and United Kingdom.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd}>
      <PageContent />
    </SitePage>
  );
}
