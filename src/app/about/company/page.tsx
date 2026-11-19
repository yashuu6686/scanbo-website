import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./CompanyPageContent";

export const metadata: Metadata = {
  title: "Who We Are | Scanbo",
  description: "Scanbo® builds the infrastructure that closes the gap between a health signal and a clinical decision, at the point of care, not after it.",
  alternates: { canonical: "/about/company/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Who We Are | Scanbo",
    description: "Scanbo® builds the infrastructure that closes the gap between a health signal and a clinical decision, at the point of care, not after it.",
    url: "/about/company/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Scanbo",
    description: "Scanbo® builds the infrastructure that closes the gap between a health signal and a clinical decision, at the point of care, not after it.",
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
