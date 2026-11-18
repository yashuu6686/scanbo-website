import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "The Scanbo Platform | Diagnostics, AI and Workflow",
  description: "One device, one connected record. See how Scanbo&#x27;s six intelligence layers bring diagnostics, AI and clinical workflow together at the point of care.",
  alternates: { canonical: "/platform/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "The Scanbo Platform | Diagnostics, AI and Workflow",
    description: "One device, one connected record. See how Scanbo&#x27;s six intelligence layers bring diagnostics, AI and clinical workflow together at the point of care.",
    url: "/platform/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Scanbo Platform | Diagnostics, AI and Workflow",
    description: "One device, one connected record. See how Scanbo&#x27;s six intelligence layers bring diagnostics, AI and clinical workflow together at the point of care.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="platform" />;
}
