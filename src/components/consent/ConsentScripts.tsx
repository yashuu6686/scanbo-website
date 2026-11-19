"use client";

import { useEffect, useRef } from "react";
import {
  CONSENT_CHANGE_EVENT,
  hasCategory,
  readConsent,
  type ConsentState,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function getGaId(): string {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
  return /^G-[A-Z0-9]+$/i.test(id) ? id : "";
}

function getMetaPixelId(): string {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";
  return /^\d{5,20}$/.test(id) ? id : "";
}

function loadAnalytics(gaId: string) {
  if (!gaId || document.getElementById("scanbo-ga-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  window.gtag("js", new Date());
  window.gtag("config", gaId, { anonymize_ip: true });

  const script = document.createElement("script");
  script.id = "scanbo-ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
}

function loadMarketing(pixelId: string) {
  if (!pixelId || document.getElementById("scanbo-meta-pixel")) return;

  /* Meta Pixel bootstrap — only after marketing consent. */
  const stub = function (...args: unknown[]) {
    const queue = (stub as { callMethod?: (...a: unknown[]) => void; queue?: unknown[] });
    if (queue.callMethod) {
      queue.callMethod(...args);
    } else {
      (queue.queue = queue.queue || []).push(args);
    }
  } as ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue?: unknown[];
    loaded?: boolean;
    version?: string;
  };
  stub.queue = [];
  stub.loaded = true;
  stub.version = "2.0";
  window.fbq = stub;

  const script = document.createElement("script");
  script.id = "scanbo-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

function applyConsent(consent: ConsentState | null) {
  const gaId = getGaId();
  const pixelId = getMetaPixelId();

  if (hasCategory(consent, "analytics") && gaId) {
    loadAnalytics(gaId);
  }

  if (hasCategory(consent, "marketing") && pixelId) {
    loadMarketing(pixelId);
  }

  /* When analytics is revoked after prior grant, stop further events. */
  if (!hasCategory(consent, "analytics") && typeof window.gtag === "function" && gaId) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  }
}

/** Loads analytics/marketing scripts only after the matching consent is granted. */
export function ConsentScripts() {
  const applied = useRef(false);

  useEffect(() => {
    const sync = () => {
      applyConsent(readConsent());
      applied.current = true;
    };

    sync();

    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ consent: ConsentState }>).detail;
      applyConsent(detail?.consent ?? readConsent());
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  return null;
}
