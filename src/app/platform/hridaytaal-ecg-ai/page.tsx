import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "HridayTaal® Cardiac Agent | AI ECG Analysis | Scanbo",
  description: "The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.",
  alternates: { canonical: "/platform/hridaytaal-ecg-ai/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "HridayTaal® Cardiac Agent | AI ECG Analysis | Scanbo",
    description: "The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.",
    url: "/platform/hridaytaal-ecg-ai/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HridayTaal® Cardiac Agent | AI ECG Analysis | Scanbo",
    description: "The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="platform" />;
}
