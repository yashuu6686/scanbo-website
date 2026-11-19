import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Telehealth Policy | RxShield | Scanbo",
  description: "Guidelines for using the RxShield Safety Agent in telehealth and virtual care settings in the U.S. and Canada.",
  alternates: { canonical: "/legal/telehealth/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Telehealth Policy | RxShield | Scanbo",
    description: "Guidelines for using the RxShield Safety Agent in telehealth and virtual care settings in the U.S. and Canada.",
    url: "/legal/telehealth/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telehealth Policy | RxShield | Scanbo",
    description: "Guidelines for using the RxShield Safety Agent in telehealth and virtual care settings in the U.S. and Canada.",
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
