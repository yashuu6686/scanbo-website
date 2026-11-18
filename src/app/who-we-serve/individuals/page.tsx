import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "Health Monitoring Between Visits | Scanbo",
  description: "Measure at home, see your results in the Scanbo® app and stay connected to your care team, with readings flowing into the record they use.",
  alternates: { canonical: "/who-we-serve/individuals/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Health Monitoring Between Visits | Scanbo",
    description: "Measure at home, see your results in the Scanbo® app and stay connected to your care team, with readings flowing into the record they use.",
    url: "/who-we-serve/individuals/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Monitoring Between Visits | Scanbo",
    description: "Measure at home, see your results in the Scanbo® app and stay connected to your care team, with readings flowing into the record they use.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="who-we-serve" />;
}
