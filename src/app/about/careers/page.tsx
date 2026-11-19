import type { Metadata } from "next";
import { SitePage } from "@/components/SitePage";
import { PageContent, jsonLd } from "./PageContent";

export const metadata: Metadata = {
  title: "Careers at Scanbo | Open Roles",
  description: "Join a focused team building clinical devices, AI and software used in real healthcare settings. See open roles at Scanbo and apply online.",
  alternates: { canonical: "/about/careers/" },
  openGraph: {
    type: "website",
    siteName: "Scanbo",
    locale: "en_US",
    title: "Careers at Scanbo | Open Roles",
    description: "Join a focused team building clinical devices, AI and software used in real healthcare settings. See open roles at Scanbo and apply online.",
    url: "/about/careers/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Scanbo: healthcare starts here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Scanbo | Open Roles",
    description: "Join a focused team building clinical devices, AI and software used in real healthcare settings. See open roles at Scanbo and apply online.",
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
