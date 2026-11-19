import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./ReimbursementGuidePageContent";

export const metadata: Metadata = {
  title: "RPM and SMBP Reimbursement Guide | Scanbo",
  description: "Scanbo® D8 and Smart Scale fit existing Medicare SMBP and RPM billing frameworks. A guide to the codes and pathways, with no new code required.",
  alternates: { canonical: "/insights/reimbursement-guide/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "RPM and SMBP Reimbursement Guide | Scanbo",
    description: "Scanbo® D8 and Smart Scale fit existing Medicare SMBP and RPM billing frameworks. A guide to the codes and pathways, with no new code required.",
    url: "/insights/reimbursement-guide/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPM and SMBP Reimbursement Guide | Scanbo",
    description: "Scanbo® D8 and Smart Scale fit existing Medicare SMBP and RPM billing frameworks. A guide to the codes and pathways, with no new code required.",
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
