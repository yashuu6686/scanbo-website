# Scanbo Website Revamp — Deep Technical Audit Report

**Project:** `scanbo-website-revamp`  
**Stack:** Next.js 16.4.6 (App Router), React 19.3, TypeScript (strict), nodemailer  
**Audit date:** 2026-11-18  
**Scope:** Full read-only review of structure, React/Next.js usage, TypeScript, performance, API/data flow, security, UI quality, maintainability, and production readiness  
**Constraint honored:** No source code was modified during this audit  

---

### 1. Executive Summary

Overall, this is a **well-structured static marketing site ported into the Next.js App Router**. The shell architecture (`page.tsx` + `PageContent.tsx` + `SitePage`) is consistent, nearly all routes are Server Components, and the production build succeeds.

**Overall code quality:** Good for a content-heavy marketing site, weakened by large copy-pasted `PageContent` files, legacy global CSS/JS, and failing ESLint.

**Architecture quality:** Sound App Router shell; weak content componentization and an imperative `site.js` layer that is not fully App Router–safe.

**Performance condition:** React client JS is minimal (good). Transfer cost and LCP are hurt by raw `<img>`, large PNGs (up to ~776KB), Google Fonts via CDN, and a global `site.css` on every route.

**Security condition:** No exposed production secrets found in source. The sole API (`POST /api/forms/submit`) lacks server validation, rate limiting, upload caps, and Origin/CSRF checks — high abuse risk for a public SMTP endpoint.

**Production readiness:** **Build passes.** **ESLint fails (62 errors, 27 warnings).** Zero automated tests. One **critical functional bug**: form submit handlers bind once in `site.js` and do not survive App Router soft navigation from Header/Footer `next/link`.

**Verdict:** Not enterprise-ready without fixing form binding, hardening the form API, correcting metadata entity encoding, and clearing lint/CI gates. Content architecture is scalable only after extracting shared sections.

---

### 2. Overall Audit Statistics

Counts below are **unique verified root issues** (one issue ID each). Related symptoms are folded into the same ID where they share one root cause.

| Category | Issues Found |
|---|---:|
| Critical Issues | 1 |
| High Priority | 5 |
| Medium Priority | 11 |
| Low Priority | 14 |
| Performance Issues | 6 |
| Security Issues | 8 |
| React Issues | 2 |
| Next.js Issues | 7 |
| TypeScript Issues | 2 |
| Duplicate Code | 5 |
| Unused Code | 3 |
| **Total unique issues** | **31** |

**Checks run (read-only):**

| Check | Result |
|---|---|
| `npm run build` | **PASS** (43 routes generated; static pages + 1 dynamic API) |
| `npm run lint` | **FAIL** — 89 problems (62 errors, 27 warnings) |
| `npx tsc --noEmit` | **FAIL** — stale `.next/types` reference to removed `platform/scanbo-emr` (build’s own TS check still passed) |
| Unit / integration / e2e tests | **None found** |
| `loading.tsx` / `error.tsx` / `middleware.ts` | **Absent** |

---

### 3. Detailed File-by-File Findings

---

#### ISS-001 — Critical — Forms break after App Router soft navigation (+ PII leak risk)

| Field | Detail |
|---|---|
| **Severity** | Critical |
| **Category** | React / Next.js / Security / Data Flow |
| **File** | `public/assets/site.js` |
| **Lines** | 76–120 (form binding), 123–125 (career “Apply” links) |
| **Related** | `src/components/SiteScript.tsx` L1–6; `src/app/about/contact/PageContent.tsx` L15; `src/app/about/careers/PageContent.tsx` L107 |

**Existing implementation:**

```js
Array.prototype.forEach.call(document.querySelectorAll('form[data-form]'), function (form) {
  form.addEventListener('submit', function (e) { ... });
});
```

**Problem:** Listeners attach only to forms present when `site.js` first runs. Header/Footer/MobileNav use `next/link` (client soft navigation). Navigating to Contact/Careers remounts form DOM **without** rebinding. Mobile menu already uses document-level delegation (L34–43) for this reason; forms do not.

Forms have `noValidate` and no `method`/`action`. Unbound submit falls back to native **GET**, which can put names, emails, phones, and messages into the URL, Referer, and access logs.

**Technical impact:** Broken lead capture / job applications for users who soft-navigate; possible PII exposure in logs/history.

**Recommended fix:** Use event delegation on `document` for `submit` on `form[data-form]` (same pattern as the menu), **or** migrate forms to React client components with `onSubmit` + `fetch`. Also rebind / delegate `a.job[data-position]` clicks.

**Example corrected approach:**

```js
document.addEventListener('submit', function (e) {
  var form = e.target && e.target.closest && e.target.closest('form[data-form]');
  if (!form) return;
  e.preventDefault();
  // existing validate + fetch logic
});
```

---

#### ISS-002 — High — Form API accepts unvalidated payloads

| Field | Detail |
|---|---|
| **Severity** | High |
| **Category** | Security / API / TypeScript |
| **File** | `src/app/api/forms/submit/route.ts` |
| **Lines** | 14–56 |
| **Related** | `src/lib/mail.ts` L55–140 |

**Existing implementation:** Contact JSON body fields are passed straight into `sendContactMail` with no required-field, email, phone, or length checks. Career multipart fields are similarly trusted. Client validation in `site.js` L61–74 is bypassable.

**Technical impact:** Spam, incomplete/garbage inbox data, header/`replyTo` abuse, oversized string payloads.

**Recommended fix:** Server-side schema validation (Zod or equivalent), reject with `400`, enforce max lengths, email format, and allowlists for `formType` / `position` / `role`.

---

#### ISS-003 — High — No rate limiting or server-side anti-bot controls

| Field | Detail |
|---|---|
| **Severity** | High |
| **Category** | Security / API |
| **File** | `src/app/api/forms/submit/route.ts` |
| **Lines** | 10–62 (entire handler) |
| **Related** | No `middleware.ts`; honeypot only in `site.js` L88 |

**Problem:** Unlimited unauthenticated POSTs can trigger SMTP sends. Honeypot `website_hp` is never checked on the server.

**Technical impact:** Mail bombing, SMTP cost/lockout, inbox DoS.

**Recommended fix:** IP/fingerprint rate limits (middleware, WAF, or Redis), CAPTCHA/Turnstile, and **server-side** empty honeypot enforcement.

---

#### ISS-004 — High — Unbounded resume upload (size/type)

| Field | Detail |
|---|---|
| **Severity** | High |
| **Category** | Security / API / Performance |
| **File** | `src/app/api/forms/submit/route.ts` L24–33; `src/lib/mail.ts` L110–117 |
| **Related** | Client-only 5 MB check: `public/assets/site.js` L69 |

**Problem:** Server buffers the full `File` into memory and attaches it with no size, MIME, or extension enforcement. Resume is not required server-side.

**Technical impact:** Memory DoS, malicious/oversized attachments emailed to `MAIL_TO`.

**Recommended fix:** Cap at 5 MB, allowlist `.pdf`/`.doc`/`.docx` (+ matching MIME), sanitize filename, require resume for career submissions, reject early before SMTP.

---

#### ISS-005 — High — HTML entities stored literally in Next.js `metadata`

| Field | Detail |
|---|---|
| **Severity** | High |
| **Category** | Next.js / SEO |
| **Files / lines** | Multiple `page.tsx` metadata strings, e.g.: |
| | `src/app/legal/page.tsx` L7, L14, L21 (`Scanbo&#x27;s`) |
| | `src/app/who-we-serve/hospitals-clinics/page.tsx` L6, L13, L20 (`&amp;`) |
| | Also: `platform/page.tsx`, `legal/non-discrimination/page.tsx`, `insights/clinical-studies/page.tsx`, `insights/customer-stories/page.tsx`, `legal/hipaa-notice/page.tsx`, `legal/dpdp-compliance/page.tsx`, `legal/disclaimer/page.tsx` |

**Problem:** The Metadata API expects plain text. Entities are emitted literally in `<title>` / Open Graph / Twitter descriptions.

**Technical impact:** Broken SERP and social preview snippets (e.g. visible `&#x27;` / `&amp;`).

**Recommended fix:** Use real characters (`'` / `&`) in all metadata strings. Do not HTML-encode metadata.

---

#### ISS-006 — High — Country option labels do not match `PHONE` map keys

| Field | Detail |
|---|---|
| **Severity** | High |
| **Category** | Bug / Data Flow |
| **Files** | `src/app/about/contact/PageContent.tsx` L68, L79, L188 |
| | `src/app/about/careers/PageContent.tsx` L168, L179, L288 |
| | `public/assets/site.js` L13 (`Cape Verde`, `Congo`, `Sao Tome and Principe`) |

**Problem:** Forms use `Cabo Verde`, `Congo (Republic)`, `São Tomé and Príncipe`. `PHONE[v('country')]` misses → empty `countryCode`.

**Technical impact:** Incomplete phone data on contact/career emails for those countries.

**Recommended fix:** Align option `value`s with `PHONE` keys (or share one country data module used by both UI and script).

---

#### ISS-007 — Medium — Multipart career endpoint lacks Origin/CSRF defense

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Security / API |
| **File** | `src/app/api/forms/submit/route.ts` L14–35; `site.js` L93–99 |

**Problem:** Career submissions use `multipart/form-data` with no custom headers, CSRF token, or Origin allowlist. Cross-site POSTs can still hit the server (response may be opaque; send still occurs).

**Technical impact:** Cross-site spam applications / attachment floods.

**Recommended fix:** Validate `Origin` / `Sec-Fetch-Site`, require a CSRF token or CAPTCHA, combine with rate limits (ISS-003).

---

#### ISS-008 — Medium — Unvalidated `replyTo` / subject from user input

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Security |
| **File** | `src/lib/mail.ts` L70–74, L85–93, L119–123 |

**Problem:** `replyTo` and subjects include raw user email/name. HTML body escaping via `esc()` (L37–42) is good; headers are weaker.

**Technical impact:** Odd/`replyTo` abuse; theoretical header issues; phishing reply vectors.

**Recommended fix:** Strict email validation before setting `replyTo`; strip CR/LF from subject components.

---

#### ISS-009 — Medium — No security headers / CSP

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Security |
| **File** | `next.config.ts` L3–75 (redirects only; no `headers`) |

**Problem:** No CSP, frame protections, Referrer-Policy, Permissions-Policy, or HSTS configuration in app config.

**Technical impact:** Weaker defense-in-depth against XSS/clickjacking.

**Recommended fix:** Add `headers()` in `next.config.ts` or middleware with baseline CSP and standard hardening headers.

---

#### ISS-010 — Medium — Page bodies use raw `<a>` instead of `next/link`

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Next.js / Performance / UX |
| **Files** | Nearly all `PageContent.tsx` (e.g. `src/app/PageContent.tsx` L15–16); Header/Footer/MobileNav correctly use `Link` |
| **Lint** | `@next/next/no-html-link-for-pages` errors in e.g. `NotFoundContent.tsx` L12, `legal/sitemap/PageContent.tsx` L37 |

**Problem:** In-page CTAs trigger full document navigations. Combined with ISS-001, UX is inconsistent: soft nav via chrome can break forms; hard nav via CTAs “accidentally” reloads and rebinds them.

**Technical impact:** Slower navigations, no prefetch, worsens form-binding bug surface.

**Recommended fix:** Prefer `Link` for internal routes **after** fixing form binding (ISS-001).

---

#### ISS-011 — Medium — Zero `next/image`; many raw `<img>` tags

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Performance / Next.js |
| **Evidence** | 0 imports of `next/image`; ~22+ `<img>` usages across PageContents + Header/Footer |
| **Examples** | `Header.tsx` L35; `PageContent.tsx` L27, L82; `platform/smart-scale/PageContent.tsx` L23 |
| **Lint** | 27 `@next/next/no-img-element` warnings |

**Problem:** No automatic resizing, modern formats, or priority LCP handling.

**Technical impact:** Worse LCP/bandwidth; large assets served raw (see ISS-025 assets).

**Recommended fix:** Migrate heroes/logos/product shots to `next/image` with explicit dimensions / `priority` on LCP images.

---

#### ISS-012 — Medium — Fonts and CSS bypass Next optimization pipeline

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Performance / Next.js |
| **File** | `src/app/layout.tsx` L35–46 |

**Existing implementation:** Google Fonts CSS + `/assets/site.css?v=specs-align-2` linked manually in `<head>`.

**Problem:** Bypasses `next/font` (self-host, less CLS) and Next CSS hashing/splitting. Manual query-string cache busting.

**Technical impact:** Extra third-party latency, privacy cost, weaker caching, full ~68KB CSS on every route.

**Recommended fix:** `next/font/google` for Archivo; import critical CSS through the App Router where feasible.

---

#### ISS-013 — Medium — Mobile menu lacks focus trap / inert background

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Accessibility |
| **Files** | `public/assets/site.js` L24–48; `MobileNav.tsx` L4–58; `Header.tsx` ~L179–189 |

**Problem:** Escape closes menu and restores focus (good), but Tab can leave the open panel into page content while `body.menu-open`.

**Technical impact:** Keyboard/AT users can interact with content that appears “behind” the open menu.

**Recommended fix:** Focus trap + `inert` / `aria-modal` dialog pattern on the overlay.

---

#### ISS-014 — Medium — Landmark / navigation labeling gaps

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Accessibility / Semantic HTML |
| **Files** | `Header.tsx` L32 (`<nav>` as root, no `<header>`); `MobileNav.tsx` (`#mnav` div without `role="navigation"` / `aria-label`) |

**Problem:** Missing banner landmark; mobile drawer not clearly announced as navigation.

**Recommended fix:** `<header><nav aria-label="Primary">…</nav></header>`; mobile `nav aria-label="Mobile"`.

---

#### ISS-015 — Medium — Cookie UI is an empty React shell + imperative `innerHTML`

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Architecture / Hydration risk / Security (latent) |
| **Files** | `CookieBanner.tsx` L1–2; `site.js` L127–149; `GA_ID = ''` at L8 |

**Problem:** Banner HTML is injected via `innerHTML` only when `GA_ID` is set. Soft remounts can wipe injected state; dialog semantics are weak. Currently dormant because `GA_ID` is empty.

**Technical impact:** Latent fragility when analytics is enabled.

**Recommended fix:** Implement consent UI as a React client component; load GA from there with an allowlisted ID.

---

#### ISS-016 — Medium — ESLint gate fails (62 errors)

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Code Quality / Production Readiness |
| **Command** | `npm run lint` → ✖ 89 problems (62 errors, 27 warnings) |

**Dominant error classes:**
- `react/no-unescaped-entities` across many PageContents (apostrophes/quotes in copy)
- `@next/next/no-html-link-for-pages` (e.g. `NotFoundContent.tsx` L12)
- `@next/next/no-img-element` warnings for raw `<img>`

**Technical impact:** CI/quality gates cannot pass; signals unfinished Next migration hygiene.

**Recommended fix:** Fix or intentionally configure lint rules for marketing copy; convert internal links/images where appropriate. Do not silence blindly without review.

---

#### ISS-017 — Medium — Heavy duplication of page sections (SoC)

| Field | Detail |
|---|---|
| **Severity** | Medium |
| **Category** | Duplicate Code / Maintainability |
| **Evidence** | CTA “Book a platform walkthrough” band in ~26 PageContents |
| | Legal sidebar `lnav` duplicated in **13** legal pages |
| | Audience switcher grids duplicated across 6 who-we-serve pages |
| | Country `<select>` (~200 options) duplicated in contact + careers |
| | Nav trees restated in Header + MobileNav + Footer |

**Technical impact:** Drift risk (one page updated, others stale); large files (newsroom 568 lines, home 420, careers 418, contact 378).

**Recommended fix:** Extract `CtaSection`, `LegalNav`, `AudienceSwitcher`, shared country list, and a single nav data source.

---

#### ISS-018 — Medium — JSON-LD via string + `dangerouslySetInnerHTML`

| Field | Detail |
|---|---|
| **Severity** | Medium (maintainability) / Low (security today) |
| **Category** | Next.js / SEO / Security (future footgun) |
| **File** | `SitePage.tsx` L20–24; every `PageContent` exports escaped string `jsonLd` |

**Problem:** Works with static strings today, but is hard to maintain and XSS-sensitive if content ever becomes CMS/user-driven.

**Recommended fix:** Typed objects + `JSON.stringify` in Server Components; escape `</` sequences.

---

#### ISS-019 — Low — Unnecessary `"use client"` on `SiteScript`

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Next.js / React |
| **File** | `src/components/SiteScript.tsx` L1–6 |

**Problem:** `next/script` can be used from Server Components; this forces a thin client boundary.

**Recommended fix:** Drop `"use client"` unless other client APIs are needed.

---

#### ISS-020 — Low — Title template is identity-only

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | SEO |
| **File** | `src/app/layout.tsx` L6–8 (`template: "%s"`) |

**Problem:** No shared brand suffix; every page hand-authors full titles.

**Recommended fix:** e.g. `template: "%s | Scanbo"` and shorten child titles.

---

#### ISS-021 — Low — Empty live `role="alert"` nodes always in DOM

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Accessibility |
| **Files** | Contact/Careers forms, e.g. `contact/PageContent.tsx` L22, L27, L33 |

**Problem:** Empty alert regions can confuse some assistive tech.

**Recommended fix:** Set `role="alert"` only when message text exists (ideally from React form state).

---

#### ISS-022 — Low — Footer heading level skips outline

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Semantic HTML |
| **File** | `Footer.tsx` (e.g. L23, L32, L43, L50 — `<h5>` labels) |

**Recommended fix:** Use non-heading labels styled as section titles, or a consistent heading outline.

---

#### ISS-023 — Low — `CORS_ORIGINS=*` documented but unused

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Security / Config |
| **File** | `.env.example` L4–6; key present in `.env.local`; **zero code references** |

**Problem:** Suggests wide-open CORS if someone later wires it literally as `*`.

**Recommended fix:** Remove unused var or implement allowlist-only CORS; never `*`.

---

#### ISS-024 — Low — `window.SCANBO_API_BASE` can redirect form POSTs

| Field | Detail |
|---|---|
| **Severity** | Low (elevates with XSS) |
| **Category** | Security / Data Flow |
| **File** | `site.js` L10, L107 |

**Problem:** Form endpoint base is overridable from `window`.

**Recommended fix:** Hardcode same-origin relative `/api/forms/submit/`.

---

#### ISS-025 — Low — Large unoptimized static image assets

| Field | Detail |
|---|---|
| **Severity** | Low–Medium (performance) |
| **Category** | Performance |
| **Evidence** | `smart_scale.png` ~776KB; `device.png` ~528KB; `og-image.png` ~376KB; `platform_ring.png` ~156KB |

**Recommended fix:** Compress, convert to WebP/AVIF, serve via `next/image`.

---

#### ISS-026 — Low — Form/country PHONE map shipped on every page

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Performance |
| **File** | `public/assets/site.js` L13 (~3.5KB map) loaded globally via `SiteScript` |

**Recommended fix:** Split form logic; load only on `/about/contact/` and `/about/careers/`.

---

#### ISS-027 — Low — No `loading.tsx` / `error.tsx` / error boundaries

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Next.js / UX |
| **Evidence** | None under `src/app/`; only `not-found.tsx` exists |

**Recommended fix:** Add route-level `error.tsx` at minimum for API/form failure UX at the React layer; `loading.tsx` optional for a mostly static site.

---

#### ISS-028 — Low — Zero automated tests

| Field | Detail |
|---|---|
| **Severity** | Low (process) / High for enterprise bar |
| **Category** | Testing |
| **Evidence** | No `*.test.*`, `*.spec.*`, Playwright/Vitest/Jest configs; `package.json` scripts: `dev`/`build`/`start`/`lint` only |

**Recommended fix:** At minimum: API route validation tests, form binding smoke test, metadata snapshot checks, critical link crawl.

---

#### ISS-029 — Low — Stale README vs actual stack

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Documentation |
| **File** | `README.md` (stock create-next-app / Geist text) |

**Problem:** App actually uses Archivo via Google Fonts in `layout.tsx`, not Geist/`next/font` as README implies.

**Recommended fix:** Rewrite README for this project’s real setup, env vars, and form/mail flow.

---

#### ISS-030 — Low — External links use `rel="noopener"` without `target="_blank"`

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | UI / Accessibility consistency |
| **Examples** | `about/newsroom/PageContent.tsx` (external `ncard` links); `insights/PageContent.tsx` |

**Problem:** `noopener` is meaningless without a new tab; users leave the site same-tab with no external cue.

**Recommended fix:** Either same-tab (drop `rel`) or `target="_blank"` + `rel="noopener noreferrer"` + visible indication.

---

#### ISS-031 — Low — Exported mail helpers unused outside module

| Field | Detail |
|---|---|
| **Severity** | Low |
| **Category** | Unused Code |
| **File** | `src/lib/mail.ts` L9 (`getMailConfig`), L21 (`createTransport`) |

**Recommended fix:** Stop exporting if only used internally, or keep intentionally for tests.

---

### 4. Architecture Review

#### What works well
- Consistent App Router pattern: `page.tsx` (metadata) → `SitePage` (chrome) → `PageContent` (body).
- Almost entirely Server Components; only `SiteScript` and `MobileMenuInit` are client components.
- Shared chrome is cleanly separated (`Header`, `Footer`, `MobileNav`, `SkipLink`).
- Trailing slash + legacy redirects in `next.config.ts` are thoughtful.
- Form → SMTP path is centralized (`route.ts` + `mail.ts`).
- Strict TypeScript config; minimal dependency surface (`next`, `react`, `nodemailer`).

#### Architectural weaknesses
1. **Static-site port mindset:** Pages are monolithic JSX dumps, not a component design system.
2. **Dual runtime:** React owns markup; imperative `site.js` owns behavior (forms, menu, cookies). Menu was partially adapted for App Router; forms were not.
3. **Nav data drift:** Same destinations declared in Header, MobileNav, Footer, and many in-body links.
4. **No middleware layer** for rate limits, security headers, or bot defenses.
5. **Content ⊗ presentation coupling** makes CMS migration or A/B testing expensive.
6. **Oversized files:** `site.css` (923), newsroom (568), home (420), careers (418), contact (378).

#### Recommended direction (when approved to implement)
- Keep RSC-first pages.
- Extract shared marketing sections.
- Move form/cookie logic into React client islands **or** fully document-delegate imperative handlers.
- Introduce a single navigation/content config module.
- Add middleware for security/rate limiting on `/api/forms/*`.

---

### 5. Performance Review

| Bottleneck | Evidence | Impact | Recommendation |
|---|---|---|---|
| Raw images / no `next/image` | ISS-011; lint warnings | LCP, bandwidth | Migrate + compress |
| Large PNGs | `smart_scale.png` ~776KB, `device.png` ~528KB | Transfer size | WebP/AVIF + resize |
| Google Fonts CDN | `layout.tsx` L35–45 | Extra RTTs, CLS risk | `next/font` |
| Global `site.css` | ~68KB / 923 lines every route | Unused CSS cost | Split or critical CSS |
| Global `site.js` | Forms + PHONE map on all pages | Extra JS on non-form routes | Route-scoped loading |
| Hard `<a>` navigations | PageContents | Full reloads | `next/link` after ISS-001 |
| Client React surface | Only 2 `"use client"` modules | **Good** | Preserve RSC-first approach |

**Core Web Vitals outlook:** JS runtime is light (positive for INP/TBT). LCP and CLS are the main risks due to unoptimized heroes/fonts. Measurable gains expected from image + font work alone.

---

### 6. Security Review

#### Confirmed / high-confidence risks
1. **Public SMTP form endpoint with no server validation** (ISS-002).
2. **No rate limiting / CAPTCHA** (ISS-003).
3. **Unbounded resume buffering** (ISS-004).
4. **Form soft-nav failure → possible GET PII leak** (ISS-001).
5. **Multipart CSRF-style spam** (ISS-007).
6. **Weak header/`replyTo` hygiene** (ISS-008).
7. **Missing security headers** (ISS-009).
8. **Client-only honeypot** (folded into ISS-003/007).

#### What looked OK
- `.env*` gitignored; no `NEXT_PUBLIC_*` secrets in code.
- `.env.local` exists for SMTP (values not reproduced here; shape appears configuration/placeholder-like at audit time — **verify real credentials are rotated and never committed**).
- Email HTML uses `esc()` escaping.
- No auth/session attack surface (marketing site).
- Open redirects in `next.config.ts` are fixed internal paths only.
- No user-controlled `dangerouslySetInnerHTML` today (JSON-LD is static).
- Dependency surface is small (`nodemailer` is the main backend risk — keep patched).

#### Potential (not confirmed exploit) risks
- `window.SCANBO_API_BASE` override (ISS-024).
- Cookie `innerHTML` path when GA is enabled (ISS-015).
- Cookie policy copy vs actual cookie behavior (compliance mismatch).

---

### 7. Testing & Build Review

#### Actual results
| Command | Outcome |
|---|---|
| `npm run build` | **Success** — compiled; TS finished; 43 pages generated |
| Routes | 40 static marketing/legal pages + `/_not-found` + dynamic `/api/forms/submit` |
| `npm run lint` | **Failure** — 62 errors, 27 warnings |
| `npx tsc --noEmit` | **Failure** — `.next/types/validator.ts` still references removed `src/app/platform/scanbo-emr/page.js` (stale cache artifact; `next build` TS pass succeeded) |
| Tests | **None** |

#### Missing coverage (highest value first)
1. Form API: validation, size limits, honeypot, Origin checks.
2. Soft-navigation form submit still works (ISS-001 regression test).
3. Metadata plain-text (no entity) assertions for affected pages.
4. Country → phone code mapping for all select options.
5. Critical internal link / redirect smoke suite.
6. Accessibility checks for mobile menu focus trap.

#### Production environment notes
- Build is compatible with Next 16 / React 19 as configured.
- SMTP env vars required at runtime for forms (`SMTP_*`, `MAIL_FROM`, `MAIL_TO`).
- `CORS_ORIGINS` is documented but unused.
- Static `public/robots.txt` + `public/sitemap.xml` present; no App Router `robots.ts` / `sitemap.ts`.

---

### 8. Priority-Wise Action Plan

#### Immediate Fixes
1. **ISS-001** — Delegate form (and job Apply) event handlers so soft navigation works; prevent GET PII leak.
2. **ISS-002 / ISS-004** — Server validation + resume size/type caps.
3. **ISS-003** — Rate limit + server honeypot (+ CAPTCHA if traffic warrants).
4. **ISS-005** — Replace HTML entities in metadata with plain characters.
5. **ISS-006** — Align country labels/values with `PHONE` keys.

#### Before Production
1. **ISS-007 / ISS-008 / ISS-009** — Origin/CSRF checks, `replyTo` hygiene, security headers.
2. **ISS-016** — Make `npm run lint` pass in CI.
3. Clear stale `.next` types / ensure `tsc` and build agree.
4. Verify real SMTP credentials, mailbox monitoring, and abuse alerting.
5. Smoke-test Contact + Careers via Header soft nav and hard refresh.

#### Performance Improvements
1. **ISS-011 / ISS-025** — `next/image` + compress large PNGs.
2. **ISS-012** — `next/font` + CSS strategy cleanup.
3. **ISS-010** — Internal `Link` usage after forms are fixed.
4. **ISS-026** — Route-scoped form JS.

#### Long-Term Refactoring
1. **ISS-017** — Extract CTA / LegalNav / AudienceSwitcher / country list / nav config.
2. **ISS-015 / ISS-018** — React cookie consent; typed JSON-LD objects.
3. **ISS-028** — Introduce Vitest/Playwright baseline.
4. **ISS-027 / ISS-029** — Error boundaries + accurate README.
5. Consider CMS or content modules if page volume keeps growing.

---

### 9. Final Technical Assessment

| Dimension | Score ( /10 ) | Justification |
|---|---:|---|
| **Overall code quality** | **6.5** | Clean shell and RSC discipline; undermined by lint failures, duplication, and imperative form bug |
| **Architecture** | **6.0** | Good App Router shell; weak content modularization; dual React/`site.js` runtime |
| **Performance** | **5.5** | Small React bundle, but unoptimized images/fonts/global CSS dominate real UX cost |
| **Security** | **4.5** | No leaked secrets found; public form API is under-hardened for enterprise abuse scenarios |
| **Maintainability** | **5.0** | Consistent patterns help; copy-paste PageContents and dual behavior layers hurt change safety |
| **Production readiness** | **5.5 / Not ready for enterprise launch** | Build succeeds, but critical form bug + API abuse gaps + failing lint/no tests block a strict go-live |

#### Bottom line
This codebase is a **credible Next.js marketing foundation** with strong Server Component defaults and coherent routing. It is **not yet production-hardened** for enterprise standards until form soft-navigation, API validation/rate limits, metadata encoding, and CI lint/test gates are fixed.

---

### Appendix A — Project inventory (audit scope)

```
scanbo-website-revamp/
├── public/assets/          # site.css, site.js, images
├── public/sitemap.xml, robots.txt, favicons
├── src/app/                # 40 page.tsx routes + PageContent.tsx pairs
│   ├── api/forms/submit/route.ts
│   ├── layout.tsx, not-found.tsx
│   ├── about|platform|who-we-serve|insights|legal/...
├── src/components/         # SitePage, SiteScript, MobileMenuInit, common/*
├── src/constants/navigation.ts
├── src/lib/mail.ts
├── next.config.ts, tsconfig.json, eslint.config.mjs
└── package.json
```

**Routes:** 40 static pages + 1 API route + custom 404.  
**Client components:** 2 (`SiteScript`, `MobileMenuInit`).  
**Hooks used:** `useEffect` + `usePathname` only (in `MobileMenuInit`). No Redux/Context app state.  
**Unused package dependencies:** None of the declared deps appear unused (`nodemailer` is used by mail/API). Extraneous nested packages observed via `npm ls` (`@emnapi/runtime`, `@img/sharp-wasm32`) — not direct app imports.

---

### Appendix B — Intentionally not changed

Per audit instructions: **no source files were modified, refactored, renamed, or deleted.**  
No UI, content, theme, images, business logic, or API contracts were altered.

**Awaiting explicit approval before implementing any recommended fixes.**

---

*Report generated from static analysis, targeted file inspection, and executed `build` / `lint` / `tsc` checks on 2026-11-18.*
