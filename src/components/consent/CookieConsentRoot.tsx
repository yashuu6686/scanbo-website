"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { CookiePreferencesModal } from "@/components/consent/CookiePreferencesModal";
import { ConsentScripts } from "@/components/consent/ConsentScripts";
import {
  CONSENT_OPEN_EVENT,
  DEFAULT_ACCEPTED_CATEGORIES,
  DEFAULT_REJECTED_CATEGORIES,
  buildConsentState,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

type Draft = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

function toDraft(consent: ConsentState | null): Draft {
  return {
    functional: consent?.categories.functional ?? false,
    analytics: consent?.categories.analytics ?? false,
    marketing: consent?.categories.marketing ?? false,
  };
}

export function CookieConsentRoot() {
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState<Draft>(toDraft(null));

  useEffect(() => {
    const existing = readConsent();
    setDraft(toDraft(existing));
    setBannerOpen(!existing);
    setReady(true);

    function onOpen() {
      const current = readConsent();
      setDraft(toDraft(current));
      setModalOpen(true);
      setBannerOpen(false);
    }

    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  const persist = useCallback((next: Draft) => {
    const state = buildConsentState({
      necessary: true,
      ...next,
    });
    writeConsent(state);
    setDraft(next);
    setBannerOpen(false);
    setModalOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist({
      functional: DEFAULT_ACCEPTED_CATEGORIES.functional,
      analytics: DEFAULT_ACCEPTED_CATEGORIES.analytics,
      marketing: DEFAULT_ACCEPTED_CATEGORIES.marketing,
    });
  }, [persist]);

  const rejectAll = useCallback(() => {
    persist({
      functional: DEFAULT_REJECTED_CATEGORIES.functional,
      analytics: DEFAULT_REJECTED_CATEGORIES.analytics,
      marketing: DEFAULT_REJECTED_CATEGORIES.marketing,
    });
  }, [persist]);

  if (!ready) {
    return <ConsentScripts />;
  }

  return (
    <>
      <ConsentScripts />

      {bannerOpen && !modalOpen ? (
        <div
          className="cookie cc-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <p>
            We use cookies to run this site and, with your permission, to
            understand usage and support marketing. See our{" "}
            <Link href="/legal/cookie-preferences/">cookie policy</Link>.
          </p>
          <div className="cc-banner-actions">
            <button type="button" className="cc-btn ghost" onClick={rejectAll}>
              Reject all
            </button>
            <button
              type="button"
              className="cc-btn ghost"
              onClick={() => {
                setDraft(toDraft(readConsent()));
                setModalOpen(true);
              }}
            >
              Customize preferences
            </button>
            <button type="button" className="cc-btn primary" onClick={acceptAll}>
              Accept all
            </button>
          </div>
        </div>
      ) : null}

      <CookiePreferencesModal
        open={modalOpen}
        draft={draft}
        onChange={setDraft}
        onClose={() => setModalOpen(false)}
        onSave={() => persist(draft)}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
      />
    </>
  );
}
