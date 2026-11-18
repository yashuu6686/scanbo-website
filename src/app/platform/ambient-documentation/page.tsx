import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Ambient Documentation Agent | AI Clinical Notes | Scanbo",
  description: "The Ambient Documentation Agent listens during the consultation and delivers clinic-ready notes the moment it ends, so clinicians can focus on the patient.",
  alternates: { canonical: "/platform/ambient-documentation/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Ambient Documentation Agent | AI Clinical Notes | Scanbo",
    description: "The Ambient Documentation Agent listens during the consultation and delivers clinic-ready notes the moment it ends, so clinicians can focus on the patient.",
    url: "/platform/ambient-documentation/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambient Documentation Agent | AI Clinical Notes | Scanbo",
    description: "The Ambient Documentation Agent listens during the consultation and delivers clinic-ready notes the moment it ends, so clinicians can focus on the patient.",
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
