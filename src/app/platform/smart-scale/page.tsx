import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "Smart Scale | AI Body Composition Analysis | Scanbo",
  description: "The Scanbo Smart Scale measures body composition and generates an AI Body Score from visceral fat, muscle and metabolic indicators, tracked over time.",
  alternates: { canonical: "/platform/smart-scale/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Smart Scale | AI Body Composition Analysis | Scanbo",
    description: "The Scanbo Smart Scale measures body composition and generates an AI Body Score from visceral fat, muscle and metabolic indicators, tracked over time.",
    url: "/platform/smart-scale/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Scale | AI Body Composition Analysis | Scanbo",
    description: "The Scanbo Smart Scale measures body composition and generates an AI Body Score from visceral fat, muscle and metabolic indicators, tracked over time.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="platform" />;
}
