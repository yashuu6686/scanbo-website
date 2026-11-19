import type { ReactNode } from "react";
import Link from "next/link";

type SecondaryCta = {
  href: string;
  label: string;
};

type HeroCtasProps = {
  secondary: SecondaryCta;
  primaryHref?: string;
  primaryLabel?: string;
};

function CtaLink({
  className,
  href,
  children,
}: {
  className: string;
  href: string;
  children: ReactNode;
}) {
  // Hash-only targets stay as <a> so Next.js doesn't remount the page.
  if (href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

/** Hero CTA pair: Book a demo + page-specific secondary. */
export function HeroCtas({
  secondary,
  primaryHref = "/about/contact/",
  primaryLabel = "Book a demo →",
}: HeroCtasProps) {
  return (
    <div className="ctas">
      <CtaLink className="btn btn-lime" href={primaryHref}>
        {primaryLabel}
      </CtaLink>
      <CtaLink className="btn btn-ghost" href={secondary.href}>
        {secondary.label}
      </CtaLink>
    </div>
  );
}

/** Bottom CTA pair shared across platform pages. */
export function PlatformCtas() {
  return (
    <div className="ctas">
      <Link className="btn btn-lime" href="/about/contact/">
        Book a platform walkthrough →
      </Link>
      <Link className="btn btn-ghost" href="/about/contact/#investors">
        Investor inquiries
      </Link>
    </div>
  );
}
