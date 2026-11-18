import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "Customer Stories | Scanbo",
  description: "How hospitals, programs and clinics turn Scanbo&#x27;s point-of-care intelligence into clinical and operational outcomes.",
  alternates: { canonical: "/insights/customer-stories/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Customer Stories | Scanbo",
    description: "How hospitals, programs and clinics turn Scanbo&#x27;s point-of-care intelligence into clinical and operational outcomes.",
    url: "/insights/customer-stories/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Stories | Scanbo",
    description: "How hospitals, programs and clinics turn Scanbo&#x27;s point-of-care intelligence into clinical and operational outcomes.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="insights" />;
}
