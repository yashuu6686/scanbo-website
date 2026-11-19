import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./DisclaimerPageContent";

export const metadata: Metadata = {
  title: "Disclaimer | Scanbo",
  description: "Scanbo&#x27;s disclaimer of liability and warranty terms for its products, software and services.",
  alternates: { canonical: "/legal/disclaimer/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Disclaimer | Scanbo",
    description: "Scanbo&#x27;s disclaimer of liability and warranty terms for its products, software and services.",
    url: "/legal/disclaimer/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Scanbo",
    description: "Scanbo&#x27;s disclaimer of liability and warranty terms for its products, software and services.",
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
