import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./SitemapPageContent";

export const metadata: Metadata = {
  title: "Sitemap | Scanbo",
  description: "Every page on scanbo.com, grouped by section: platform, who we serve, insights, about and legal.",
  alternates: { canonical: "/legal/sitemap/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Sitemap | Scanbo",
    description: "Every page on scanbo.com, grouped by section: platform, who we serve, insights, about and legal.",
    url: "/legal/sitemap/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Scanbo",
    description: "Every page on scanbo.com, grouped by section: platform, who we serve, insights, about and legal.",
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
