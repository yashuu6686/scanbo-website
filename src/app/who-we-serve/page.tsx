import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Who We Serve | Scanbo",
  description: "Hospitals, physicians, pharmacists, community health workers, individuals and U.S. ACOs: how Scanbo brings the lab to the patient and the result to the record.",
  alternates: { canonical: "/who-we-serve/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Who We Serve | Scanbo",
    description: "Hospitals, physicians, pharmacists, community health workers, individuals and U.S. ACOs: how Scanbo brings the lab to the patient and the result to the record.",
    url: "/who-we-serve/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve | Scanbo",
    description: "Hospitals, physicians, pharmacists, community health workers, individuals and U.S. ACOs: how Scanbo brings the lab to the patient and the result to the record.",
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
