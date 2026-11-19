"use client";

import { CookieConsentRoot } from "@/components/consent/CookieConsentRoot";

/** Site-wide cookie consent UI (banner + preferences modal + script gating). */
export function CookieBanner() {
  return <CookieConsentRoot />;
}
