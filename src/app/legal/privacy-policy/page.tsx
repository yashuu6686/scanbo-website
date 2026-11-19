import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PrivacyPolicyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Scanbo",
  description: "How Scanbo collects, uses and protects personal and clinical data, and the choices and rights you have.",
  alternates: { canonical: "/legal/privacy-policy/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Privacy Policy | Scanbo",
    description: "How Scanbo collects, uses and protects personal and clinical data, and the choices and rights you have.",
    url: "/legal/privacy-policy/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Scanbo",
    description: "How Scanbo collects, uses and protects personal and clinical data, and the choices and rights you have.",
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
