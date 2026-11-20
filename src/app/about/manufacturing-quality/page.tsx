import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./ManufacturingQualityPageContent";

export const metadata: Metadata = {
  title: "Manufacturing and Quality | ISO 13485, MDSAP | Scanbo",
  description: "Scanbo® manufactures its own devices under direct quality control, with ISO 13485-aligned systems and MDSAP audit readiness.",
  alternates: { canonical: "/about/manufacturing-quality/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Manufacturing and Quality | ISO 13485, MDSAP | Scanbo",
    description: "Scanbo® manufactures its own devices under direct quality control, with ISO 13485-aligned systems and MDSAP audit readiness.",
    url: "/about/manufacturing-quality/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing and Quality | ISO 13485, MDSAP | Scanbo",
    description: "Scanbo® manufactures its own devices under direct quality control, with ISO 13485-aligned systems and MDSAP audit readiness.",
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
