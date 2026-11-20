import type { Metadata, Viewport } from "next";
import { SiteScript } from "@/components/SiteScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scanbo.com"),
  title: {
    default: "Scanbo® | Point-of-Care Diagnostics and Clinical AI",
    template: "%s",
  },
  description:
    "Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#06202E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/site.css?v=tm-mark-1" />
      </head>
      <body>
        {children}
        <SiteScript />
      </body>
    </html>
  );
}
