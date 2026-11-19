import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Scanbo | Book a Walkthrough",
  description: "Book a platform walkthrough, ask about partnerships or reach investor relations and press. Scanbo has offices in Canada, the United States and India.",
  alternates: { canonical: "/about/contact/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Contact Scanbo | Book a Walkthrough",
    description: "Book a platform walkthrough, ask about partnerships or reach investor relations and press. Scanbo has offices in Canada, the United States and India.",
    url: "/about/contact/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Scanbo | Book a Walkthrough",
    description: "Book a platform walkthrough, ask about partnerships or reach investor relations and press. Scanbo has offices in Canada, the United States and India.",
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
