import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Insights | Evidence, Stories and Reimbursement | Scanbo",
  description: "Published research, real deployments and U.S. reimbursement pathways: the evidence behind the Scanbo platform, in one place.",
  alternates: { canonical: "/insights/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Insights | Evidence, Stories and Reimbursement | Scanbo",
    description: "Published research, real deployments and U.S. reimbursement pathways: the evidence behind the Scanbo platform, in one place.",
    url: "/insights/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Evidence, Stories and Reimbursement | Scanbo",
    description: "Published research, real deployments and U.S. reimbursement pathways: the evidence behind the Scanbo platform, in one place.",
    images: ["/assets/og-image.png"],
  },
};

export default function Page() {
  return (
    <SitePage jsonLd={jsonLd} activeNav="insights">
      <PageContent />
    </SitePage>
  );
}
