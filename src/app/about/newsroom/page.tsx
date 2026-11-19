import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Newsroom | Scanbo in the News",
  description: "Scanbo in the news: executive interviews, authored articles and coverage across business, health and technology media.",
  alternates: { canonical: "/about/newsroom/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Newsroom | Scanbo in the News",
    description: "Scanbo in the news: executive interviews, authored articles and coverage across business, health and technology media.",
    url: "/about/newsroom/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsroom | Scanbo in the News",
    description: "Scanbo in the news: executive interviews, authored articles and coverage across business, health and technology media.",
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
