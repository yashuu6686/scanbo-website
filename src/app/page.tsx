import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Scanbo® | Point-of-Care Diagnostics and Clinical AI",
  description: "Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Scanbo® | Point-of-Care Diagnostics and Clinical AI",
    description: "Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.",
    url: "/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanbo® | Point-of-Care Diagnostics and Clinical AI",
    description: "Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.",
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
