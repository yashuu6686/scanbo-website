import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { html, jsonLd } from "./content";

export const metadata: Metadata = {
  title: "Clinical Studies | Peer-Reviewed Evidence | Scanbo",
  description: "Peer-reviewed studies of Scanbo®&#x27;s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect and recognized by PATH.",
  alternates: { canonical: "/insights/clinical-studies/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Clinical Studies | Peer-Reviewed Evidence | Scanbo",
    description: "Peer-reviewed studies of Scanbo®&#x27;s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect and recognized by PATH.",
    url: "/insights/clinical-studies/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Studies | Peer-Reviewed Evidence | Scanbo",
    description: "Peer-reviewed studies of Scanbo®&#x27;s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect and recognized by PATH.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return <SitePage mainHtml={html} jsonLd={jsonLd} activeNav="insights" />;
}
