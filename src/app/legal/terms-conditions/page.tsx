import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./TermsConditionsPageContent";

export const metadata: Metadata = {
  title: "Terms and Conditions | Scanbo",
  description: "The terms and conditions that apply to using the Scanbo website, products and services.",
  alternates: { canonical: "/legal/terms-conditions/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Terms and Conditions | Scanbo",
    description: "The terms and conditions that apply to using the Scanbo website, products and services.",
    url: "/legal/terms-conditions/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Scanbo",
    description: "The terms and conditions that apply to using the Scanbo website, products and services.",
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
