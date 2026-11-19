import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./ScanboEhrPageContent";

export const metadata: Metadata = {
  title: "Scanbo® EMR | Connected Clinical Workflow",
  description: "Scanbo® EMR brings scheduling, communication and FHIR-native interoperability into one connected workflow layer for care teams.",
  alternates: { canonical: "/platform/scanbo-ehr/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Scanbo® EMR | Connected Clinical Workflow",
    description: "Scanbo® EMR brings scheduling, communication and FHIR-native interoperability into one connected workflow layer for care teams.",
    url: "/platform/scanbo-ehr/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanbo® EMR | Connected Clinical Workflow",
    description: "Scanbo® EMR brings scheduling, communication and FHIR-native interoperability into one connected workflow layer for care teams.",
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
