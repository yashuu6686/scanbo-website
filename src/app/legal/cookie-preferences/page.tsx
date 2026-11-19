import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./CookiePreferencesPageContent";

export const metadata: Metadata = {
  title: "Cookie Preferences | Scanbo",
  description: "The cookies the Scanbo website uses and how to manage your preferences.",
  alternates: { canonical: "/legal/cookie-preferences/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Cookie Preferences | Scanbo",
    description: "The cookies the Scanbo website uses and how to manage your preferences.",
    url: "/legal/cookie-preferences/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Preferences | Scanbo",
    description: "The cookies the Scanbo website uses and how to manage your preferences.",
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
