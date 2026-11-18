import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "DPDP Compliance Statement | Scanbo",
  description: "Scanbo&#x27;s compliance statement under India&#x27;s Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/legal/dpdp-compliance/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "DPDP Compliance Statement | Scanbo",
    description: "Scanbo&#x27;s compliance statement under India&#x27;s Digital Personal Data Protection Act, 2023.",
    url: "/legal/dpdp-compliance/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DPDP Compliance Statement | Scanbo",
    description: "Scanbo&#x27;s compliance statement under India&#x27;s Digital Personal Data Protection Act, 2023.",
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
