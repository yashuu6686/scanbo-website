"use client";

import { openCookieSettings } from "@/lib/consent";

/** Footer control that reopens the cookie preferences modal. */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cookie-settings-link"
      onClick={openCookieSettings}
    >
      Cookie Settings
    </button>
  );
}
