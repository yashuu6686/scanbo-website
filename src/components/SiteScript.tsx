"use client";

import Script from "next/script";

export function SiteScript() {
  return <Script src="/assets/site.js?v=name-phone-1" strategy="afterInteractive" />;
}
