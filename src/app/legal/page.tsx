import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./LegalPageContent";

export const metadata: Metadata = {
  title: "Legal and Compliance | Scanbo",
  description: "Scanbo&#x27;s privacy, terms, compliance and medical device notices, including HIPAA, GDPR and DPDP statements.",
  alternates: { canonical: "/legal/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Legal and Compliance | Scanbo",
    description: "Scanbo&#x27;s privacy, terms, compliance and medical device notices, including HIPAA, GDPR and DPDP statements.",
    url: "/legal/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal and Compliance | Scanbo",
    description: "Scanbo&#x27;s privacy, terms, compliance and medical device notices, including HIPAA, GDPR and DPDP statements.",
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
