import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Data Request | Scanbo",
  description: "How to request access to, correction of, deletion of or a copy of your personal data held by Scanbo.",
  alternates: { canonical: "/legal/data-request/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Data Request | Scanbo",
    description: "How to request access to, correction of, deletion of or a copy of your personal data held by Scanbo.",
    url: "/legal/data-request/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Request | Scanbo",
    description: "How to request access to, correction of, deletion of or a copy of your personal data held by Scanbo.",
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
