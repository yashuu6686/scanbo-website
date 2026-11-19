"use client";

import { useEffect, useId, useRef } from "react";
import type { ConsentCategories } from "@/lib/consent";

type DraftCategories = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookiePreferencesModalProps = {
  open: boolean;
  draft: DraftCategories;
  onChange: (next: DraftCategories) => void;
  onClose: () => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
};

const ROWS: Array<{
  key: keyof ConsentCategories;
  title: string;
  description: string;
  locked?: boolean;
}> = [
  {
    key: "necessary",
    title: "Strictly Necessary",
    description:
      "Required for the website to function securely. These cannot be disabled.",
    locked: true,
  },
  {
    key: "functional",
    title: "Functional Cookies",
    description:
      "Remember preferences such as language and region to improve your experience.",
  },
  {
    key: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors use the site. Data is aggregated where possible.",
  },
  {
    key: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to measure campaigns and show relevant content. Requires explicit consent.",
  },
];

export function CookiePreferencesModal({
  open,
  draft,
  onChange,
  onClose,
  onSave,
  onAcceptAll,
  onRejectAll,
}: CookiePreferencesModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = panel.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cc-overlay" role="presentation" onClick={onClose}>
      <div
        ref={panelRef}
        className="cc-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cc-modal-head">
          <h2 id={titleId}>Cookie preferences</h2>
          <button
            type="button"
            className="cc-icon-btn"
            aria-label="Close cookie preferences"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p className="cc-modal-lede">
          Choose which optional cookies Scanbo may use. Strictly necessary
          cookies stay on so the site can work.
        </p>

        <ul className="cc-cats">
          {ROWS.map((row) => {
            const checked =
              row.key === "necessary"
                ? true
                : draft[row.key as keyof DraftCategories];
            const disabled = Boolean(row.locked);
            return (
              <li key={row.key} className="cc-cat">
                <div className="cc-cat-copy">
                  <b>{row.title}</b>
                  <span>{row.description}</span>
                </div>
                <label className={`cc-switch${disabled ? " locked" : ""}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    aria-label={row.title}
                    onChange={(event) => {
                      if (row.key === "necessary") return;
                      onChange({
                        ...draft,
                        [row.key]: event.target.checked,
                      });
                    }}
                  />
                  <span aria-hidden="true" />
                </label>
              </li>
            );
          })}
        </ul>

        <div className="cc-modal-actions">
          <button type="button" className="cc-btn ghost" onClick={onRejectAll}>
            Reject all
          </button>
          <button type="button" className="cc-btn ghost" onClick={onAcceptAll}>
            Accept all
          </button>
          <button type="button" className="cc-btn primary" onClick={onSave}>
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}
