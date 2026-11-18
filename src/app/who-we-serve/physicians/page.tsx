import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "For Physicians | Diagnose Faster, Document Less | Scanbo",
  description: "Clinical-grade readings, AI interpretation and a finished note, all inside the consultation. Scanbo helps physicians diagnose faster and document less.",
  alternates: { canonical: "/who-we-serve/physicians/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "For Physicians | Diagnose Faster, Document Less | Scanbo",
    description: "Clinical-grade readings, AI interpretation and a finished note, all inside the consultation. Scanbo helps physicians diagnose faster and document less.",
    url: "/who-we-serve/physicians/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Physicians | Diagnose Faster, Document Less | Scanbo",
    description: "Clinical-grade readings, AI interpretation and a finished note, all inside the consultation. Scanbo helps physicians diagnose faster and document less.",
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
