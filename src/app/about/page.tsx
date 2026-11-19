import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "About Scanbo | Point-of-Care Intelligence",
  description: "Scanbo Technologies Inc. builds connected point-of-care diagnostics so a diagnosis takes minutes, not days, wherever the patient is.",
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "About Scanbo | Point-of-Care Intelligence",
    description: "Scanbo Technologies Inc. builds connected point-of-care diagnostics so a diagnosis takes minutes, not days, wherever the patient is.",
    url: "/about/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Scanbo | Point-of-Care Intelligence",
    description: "Scanbo Technologies Inc. builds connected point-of-care diagnostics so a diagnosis takes minutes, not days, wherever the patient is.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="about">
      <PageContent />
    </SitePage>
  );
}
