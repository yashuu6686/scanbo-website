import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Instructions for Use | Scanbo",
  description: "Intended use, safety notes and storage guidance for Scanbo® D8, Smart Scale and the HridayTaal® Cardiac Agent.",
  alternates: { canonical: "/legal/instructions-for-use/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Instructions for Use | Scanbo",
    description: "Intended use, safety notes and storage guidance for Scanbo® D8, Smart Scale and the HridayTaal® Cardiac Agent.",
    url: "/legal/instructions-for-use/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instructions for Use | Scanbo",
    description: "Intended use, safety notes and storage guidance for Scanbo® D8, Smart Scale and the HridayTaal® Cardiac Agent.",
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
