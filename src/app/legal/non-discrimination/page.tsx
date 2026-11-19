import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./NonDiscriminationPageContent";

export const metadata: Metadata = {
  title: "Non-Discrimination Policy | Scanbo",
  description: "Scanbo&#x27;s commitment to non-discrimination and accessibility across its products and services.",
  alternates: { canonical: "/legal/non-discrimination/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Non-Discrimination Policy | Scanbo",
    description: "Scanbo&#x27;s commitment to non-discrimination and accessibility across its products and services.",
    url: "/legal/non-discrimination/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Discrimination Policy | Scanbo",
    description: "Scanbo&#x27;s commitment to non-discrimination and accessibility across its products and services.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd}>
      <PageContent />
    </SitePage>
  );
}
