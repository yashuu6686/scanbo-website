import Link from "next/link";
import { CookieSettingsButton } from "@/components/common/CookieSettingsButton";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scanbo/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H4.1V19.5h2.84V8.5ZM5.52 4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM19.9 19.5h-2.84v-5.66c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V19.5H10.17V8.5h2.72v1.5h.04c.38-.72 1.3-1.48 2.68-1.48 2.87 0 3.4 1.89 3.4 4.34V19.5Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/scanboai",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.66 4.5h2.52l-5.51 6.3 6.48 8.7h-5.07l-3.97-5.2-4.54 5.2H5.05l5.9-6.75L4.7 4.5h5.2l3.58 4.76L17.66 4.5Zm-.88 13.5h1.4L7.3 5.9H5.8l10.98 12.1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@scanboai",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 8.2 28.4 28.4 0 0 0 2.1 12a28.4 28.4 0 0 0 .3 3.8 2.7 2.7 0 0 0 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9 28.4 28.4 0 0 0 .3-3.8 28.4 28.4 0 0 0-.3-3.8ZM10.2 14.7V9.3L14.9 12l-4.7 2.7Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scanboofficial/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.5-7.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.8 1a5.1 5.1 0 0 0-1.4-3.6 5.1 5.1 0 0 0-3.6-1.4H8.7A5.1 5.1 0 0 0 5.1 5.8 5.1 5.1 0 0 0 3.7 9.4v6.6a5.1 5.1 0 0 0 1.4 3.6 5.1 5.1 0 0 0 3.6 1.4h6.6a5.1 5.1 0 0 0 3.6-1.4 5.1 5.1 0 0 0 1.4-3.6V9.4Zm-1.6 6.6a3.5 3.5 0 0 1-3.5 3.5H8.7a3.5 3.5 0 0 1-3.5-3.5V9.4A3.5 3.5 0 0 1 8.7 5.9h6.6a3.5 3.5 0 0 1 3.5 3.5v6.6Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ScanboAI",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 19.5v-6.3h2.1l.3-2.6h-2.4V9c0-.8.2-1.3 1.4-1.3h1.5V5.4c-.3 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.1v2.6h2.1v6.3h3Z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <Link className="logo" href="/" aria-label="Scanbo home">
              <img
                loading="lazy"
                decoding="async"
                className="logo-st"
                src="/assets/logo_stacked.png"
                alt="Scanbo"
              />
            </Link>
            <p className="fbrand-copy">
              A connected diagnostic platform for community healthcare.
            </p>
            <div className="fsocial" aria-label="Social media">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="fapps" aria-label="Download the Scanbo app">
              <a
                className="fapp"
                href="https://apps.apple.com/in/app/scanbo-3-0/id6479600172"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.09-3.13-1.05.05-2.32.7-3.07 1.58-.67.77-1.26 2-1.11 3.17 1.17.09 2.36-.6 3.09-1.62"
                  />
                </svg>
                <span>
                  <small>Download on the</small>
                  <b>App Store</b>
                </span>
              </a>
              <a
                className="fapp"
                href="https://play.google.com/store/apps/details?id=com.scanbo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#EA4335" d="M3.6 2.3 13.5 12 3.6 21.7c-.4-.3-.6-.8-.6-1.3V3.6c0-.5.2-1 .6-1.3Z" />
                  <path fill="#FBBC04" d="m13.5 12 2.4-2.4 4.7 2.7c.7.4.7 1.4 0 1.8l-4.7 2.7L13.5 12Z" />
                  <path fill="#4285F4" d="M13.5 12 3.6 2.3c.3-.2.6-.3 1-.3.4 0 .8.1 1.1.3l9.4 5.3L13.5 12Z" />
                  <path fill="#34A853" d="M13.5 12 5.7 21.7c-.3.2-.7.3-1.1.3-.4 0-.7-.1-1-.3L13.5 12Z" />
                </svg>
                <span>
                  <small>GET IT ON</small>
                  <b>Google Play</b>
                </span>
              </a>
            </div>
          </div>
          <div className="fcol">
            <h5>Platform</h5>
            <Link href="/platform/scanbo-d8/">Scanbo® D8 (D8–D19)</Link>
            <Link href="/platform/hridaytaal-ecg-ai/">HridayTaal® Cardiac Agent</Link>
            <Link href="/platform/smart-scale/">Smart Scale</Link>
            <Link href="/platform/rxshield/">RxShield</Link>
            <Link href="/platform/ambient-documentation/">Ambient Documentation</Link>
            <Link href="/platform/scanbo-ehr/">Scanbo® EMR</Link>
          </div>
          <div className="fcol">
            <h5>Whom We Serve</h5>
            <Link href="/who-we-serve/hospitals-clinics/">Hospitals & clinics</Link>
            <Link href="/who-we-serve/physicians/">Physicians</Link>
            <Link href="/who-we-serve/pharmacists/">Pharmacists</Link>
            <Link href="/who-we-serve/community-health-workers/">
              Community health workers
            </Link>
            <Link href="/who-we-serve/individuals/">Individuals</Link>
            <Link href="/who-we-serve/accountable-care-organizations/">U.S. ACOs</Link>
          </div>
          <div className="fcol">
            <h5>Insights</h5>
            <Link href="/insights/clinical-studies/">Clinical studies</Link>
            <Link href="/insights/customer-stories/">Customer stories</Link>
            <Link href="/insights/reimbursement-guide/">Reimbursement guide</Link>
            <Link href="/about/newsroom/">Newsroom</Link>
          </div>
          <div className="fcol">
            <h5>Company</h5>
            <Link href="/about/company/">About</Link>
            <Link href="/about/manufacturing-quality/">Manufacturing & quality</Link>
            <Link href="/about/data-philosophy/">Data philosophy</Link>
            <Link href="/about/careers/">Careers</Link>
            <Link href="/about/contact/">Contact</Link>
          </div>
        </div>
        <p className="fdisclaimer">
          Scanbo® D8 is not available outside India, as it is awaiting regulatory
          approval.
        </p>
        <div className="legal">
          <span>© 2026 Scanbo Technologies Inc. All rights reserved.</span>
          <span className="ll">
            <Link href="/legal/privacy-policy/">Privacy</Link>
            <Link href="/legal/terms-conditions/">Terms</Link>
            <Link href="/legal/hipaa-notice/">HIPAA notice</Link>
            <Link href="/legal/gdpr-statement/">GDPR</Link>
            <Link href="/legal/dpdp-compliance/">DPDP</Link>
            <Link href="/legal/cookie-preferences/">Cookies</Link>
            <CookieSettingsButton />
            <Link href="/legal/sitemap/">Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
