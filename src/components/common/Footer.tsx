import Link from "next/link";
import { CookieSettingsButton } from "@/components/common/CookieSettingsButton";
import { BrandLogo } from "@/components/common/BrandLogo";
import { socialItems } from "@/data/footer";
import {
  footerAppLinks,
  footerColumns,
  footerLegalLinks,
} from "@/data/navigation";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <Link className="logo" href="/" aria-label="Scanbo home">
              <BrandLogo />
            </Link>
            <div className="fbrand-kicker">The point-of-care intelligence platform</div>
            <h3 className="fbrand-title">The Intelligence Stack for Clinical Decisions.</h3>
            <p className="fbrand-copy">
              From real-time patient data acquisition to intelligent interpretation, decision making and clinical action, integrated directly at the point of care, this marks the shift toward agentic AI in healthcare.
            </p>
            <div className="fsocial" aria-label="Social media">
              {socialItems.map((item) => (
                <a
                  key={item.id}
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
              {footerAppLinks.map((app) => (
                <a
                  key={app.id}
                  className="fapp"
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={app.ariaLabel}
                >
                  {app.store === "apple" ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.09-3.13-1.05.05-2.32.7-3.07 1.58-.67.77-1.26 2-1.11 3.17 1.17.09 2.36-.6 3.09-1.62"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#EA4335"
                        d="M3.6 2.3 13.5 12 3.6 21.7c-.4-.3-.6-.8-.6-1.3V3.6c0-.5.2-1 .6-1.3Z"
                      />
                      <path
                        fill="#FBBC04"
                        d="m13.5 12 2.4-2.4 4.7 2.7c.7.4.7 1.4 0 1.8l-4.7 2.7L13.5 12Z"
                      />
                      <path
                        fill="#4285F4"
                        d="M13.5 12 3.6 2.3c.3-.2.6-.3 1-.3.4 0 .8.1 1.1.3l9.4 5.3L13.5 12Z"
                      />
                      <path
                        fill="#34A853"
                        d="M13.5 12 5.7 21.7c-.3.2-.7.3-1.1.3-.4 0-.7-.1-1-.3L13.5 12Z"
                      />
                    </svg>
                  )}
                  <span>
                    <small>{app.small}</small>
                    <b>{app.bold}</b>
                  </span>
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div className="fcol" key={col.id}>
              <h5>{col.title}</h5>
              {col.links.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <p className="fdisclaimer">
          Scanbo® D8 is not available outside India, as it is awaiting regulatory
          approval.
        </p>
        <div className="legal">
          <span>© 2026 Scanbo Holdings Inc. All rights reserved.</span>
          <span className="ll">
            {footerLegalLinks
              .filter((link) => link.href !== "/legal/sitemap/")
              .map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.label}
                </Link>
              ))}
            <CookieSettingsButton />
            {footerLegalLinks
              .filter((link) => link.href === "/legal/sitemap/")
              .map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.label}
                </Link>
              ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
