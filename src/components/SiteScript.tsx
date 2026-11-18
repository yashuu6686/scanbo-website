"use client";

import Script from "next/script";

export function SiteScript() {
  return <Script src="/assets/site.js?v=mobile-menu-2" strategy="afterInteractive" />;
}
