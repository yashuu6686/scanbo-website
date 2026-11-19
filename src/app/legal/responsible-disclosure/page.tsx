import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Responsible Disclosure | Scanbo",
  description: "How to report a security vulnerability to Scanbo, and what we commit to in return.",
  alternates: { canonical: "/legal/responsible-disclosure/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Responsible Disclosure | Scanbo",
    description: "How to report a security vulnerability to Scanbo, and what we commit to in return.",
    url: "/legal/responsible-disclosure/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Disclosure | Scanbo",
    description: "How to report a security vulnerability to Scanbo, and what we commit to in return.",
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
