export const CONSENT_STORAGE_KEY = "scanbo-cookie-consent";
/** Legacy key from the previous Accept/Decline banner. */
export const LEGACY_CONSENT_KEY = "scanbo-consent";
export const CONSENT_VERSION = 1;
export const CONSENT_TTL_DAYS = 365;
export const CONSENT_CHANGE_EVENT = "scanbo-consent-change";
export const CONSENT_OPEN_EVENT = "scanbo-open-cookie-settings";

export type ConsentCategory = "necessary" | "functional" | "analytics" | "marketing";

export type ConsentCategories = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  version: number;
  updatedAt: string;
  expiresAt: string;
  categories: ConsentCategories;
};

export const DEFAULT_REJECTED_CATEGORIES: ConsentCategories = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const DEFAULT_ACCEPTED_CATEGORIES: ConsentCategories = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function buildConsentState(
  categories: Omit<ConsentCategories, "necessary"> & { necessary?: true },
): ConsentState {
  const now = new Date();
  return {
    version: CONSENT_VERSION,
    updatedAt: now.toISOString(),
    expiresAt: addDays(now, CONSENT_TTL_DAYS).toISOString(),
    categories: {
      necessary: true,
      functional: Boolean(categories.functional),
      analytics: Boolean(categories.analytics),
      marketing: Boolean(categories.marketing),
    },
  };
}

function isValidConsent(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const state = value as ConsentState;
  if (typeof state.version !== "number") return false;
  if (typeof state.updatedAt !== "string" || typeof state.expiresAt !== "string") {
    return false;
  }
  const cats = state.categories;
  if (!cats || typeof cats !== "object") return false;
  return (
    cats.necessary === true &&
    typeof cats.functional === "boolean" &&
    typeof cats.analytics === "boolean" &&
    typeof cats.marketing === "boolean"
  );
}

export function isConsentExpired(state: ConsentState, now = new Date()): boolean {
  if (state.version !== CONSENT_VERSION) return true;
  const expires = Date.parse(state.expiresAt);
  if (Number.isNaN(expires)) return true;
  return expires <= now.getTime();
}

function migrateLegacyConsent(): ConsentState | null {
  try {
    const legacy = localStorage.getItem(LEGACY_CONSENT_KEY);
    if (legacy === "yes") {
      return buildConsentState(DEFAULT_ACCEPTED_CATEGORIES);
    }
    if (legacy === "no") {
      return buildConsentState(DEFAULT_REJECTED_CATEGORIES);
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isValidConsent(parsed) && !isConsentExpired(parsed)) {
        return parsed;
      }
    }
    const migrated = migrateLegacyConsent();
    if (migrated) {
      writeConsent(migrated);
      return migrated;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { consent: state } }),
  );
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}

export function hasCategory(
  state: ConsentState | null,
  category: ConsentCategory,
): boolean {
  if (!state) return category === "necessary";
  return Boolean(state.categories[category]);
}
