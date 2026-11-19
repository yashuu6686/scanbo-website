import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./HospitalsClinicsPageContent";

export const metadata: Metadata = {
  title: "Point-of-Care Diagnostics for Hospitals &amp; Clinics | Scanbo",
  description: "Eight measurements, AI interpretation and the patient record in one workflow, from the OPD to the ward. Point-of-care diagnostics for hospitals and clinics.",
  alternates: { canonical: "/who-we-serve/hospitals-clinics/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Point-of-Care Diagnostics for Hospitals &amp; Clinics | Scanbo",
    description: "Eight measurements, AI interpretation and the patient record in one workflow, from the OPD to the ward. Point-of-care diagnostics for hospitals and clinics.",
    url: "/who-we-serve/hospitals-clinics/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Point-of-Care Diagnostics for Hospitals &amp; Clinics | Scanbo",
    description: "Eight measurements, AI interpretation and the patient record in one workflow, from the OPD to the ward. Point-of-care diagnostics for hospitals and clinics.",
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
