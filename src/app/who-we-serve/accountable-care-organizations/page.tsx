import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "For U.S. ACOs | Screening for Value-Based Care | Scanbo",
  description: "Early detection that existing U.S. codes already reimburse. How accountable care organizations use Scanbo for scalable screening in value-based care.",
  alternates: { canonical: "/who-we-serve/accountable-care-organizations/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "For U.S. ACOs | Screening for Value-Based Care | Scanbo",
    description: "Early detection that existing U.S. codes already reimburse. How accountable care organizations use Scanbo for scalable screening in value-based care.",
    url: "/who-we-serve/accountable-care-organizations/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For U.S. ACOs | Screening for Value-Based Care | Scanbo",
    description: "Early detection that existing U.S. codes already reimburse. How accountable care organizations use Scanbo for scalable screening in value-based care.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="who-we-serve">
      <PageContent />
    </SitePage>
  );
}
