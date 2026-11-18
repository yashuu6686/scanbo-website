import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices | Scanbo",
  description: "Scanbo&#x27;s HIPAA Notice of Privacy Practices for U.S. customers: how protected health information is used, disclosed and safeguarded.",
  alternates: { canonical: "/legal/hipaa-notice/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "HIPAA Notice of Privacy Practices | Scanbo",
    description: "Scanbo&#x27;s HIPAA Notice of Privacy Practices for U.S. customers: how protected health information is used, disclosed and safeguarded.",
    url: "/legal/hipaa-notice/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA Notice of Privacy Practices | Scanbo",
    description: "Scanbo&#x27;s HIPAA Notice of Privacy Practices for U.S. customers: how protected health information is used, disclosed and safeguarded.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} />;
}
