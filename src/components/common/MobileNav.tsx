import Link from "next/link";
import { mobileNavSections } from "@/data/navigation";

export function MobileNav() {
  return (
    <div id="mnav" className="mnav" hidden>
      {mobileNavSections.map((section) => (
        <details key={section.id}>
          <summary>{section.summary}</summary>
          <Link className="all" href={section.overview.href}>
            {section.overview.label}
          </Link>
          {section.items.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
        </details>
      ))}
      <a
        className="btn btn-signin msignin"
        href="https://app.scanbo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign in
      </a>
      <Link className="btn btn-lime mcta" href="/about/contact/">
        Book a walkthrough
      </Link>
    </div>
  );
}
