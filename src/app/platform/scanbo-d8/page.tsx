import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./ScanboD8PageContent";

export const metadata: Metadata = {
  title: "Scanbo® D8 | Multiparameter Point-of-Care Device",
  description: "Scanbo® D8 captures eight clinical parameters in one connected handheld device, with no lab, no manual entry and no specialist infrastructure.",
  alternates: { canonical: "/platform/scanbo-d8/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Scanbo® D8 | Multiparameter Point-of-Care Device",
    description: "Scanbo® D8 captures eight clinical parameters in one connected handheld device, with no lab, no manual entry and no specialist infrastructure.",
    url: "/platform/scanbo-d8/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanbo® D8 | Multiparameter Point-of-Care Device",
    description: "Scanbo® D8 captures eight clinical parameters in one connected handheld device, with no lab, no manual entry and no specialist infrastructure.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="platform">
      <PageContent />
    </SitePage>
  );
}
