"use client";

import Script from "next/script";

export function SiteScript() {
  return <Script src="/assets/site.js" strategy="afterInteractive" />;
}
