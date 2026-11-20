import type { ReactNode } from "react";
import Link from "next/link";

type SecondaryCta = {
  href: string;
  label: string;
};

type PageCtasProps = {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type HeroCtasProps = {
  secondary?: SecondaryCta;
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

/** Shared CTA pair — change only labels/hrefs when needed. */
export function PageCtas({
  primaryHref = "/about/contact/",
  primaryLabel = "Book a Demo →",
  secondaryHref = "/about/contact/",
  secondaryLabel = "Talk to Scanbo",
}: PageCtasProps) {
  return (
    <div className="ctas">
      <CtaLink className="btn btn-lime" href={primaryHref}>
        {primaryLabel}
      </CtaLink>
      <CtaLink className="btn btn-ghost" href={secondaryHref}>
        {secondaryLabel}
      </CtaLink>
    </div>
  );
}

/** Hero CTA pair: Book a Demo + optional page-specific secondary. */
export function HeroCtas({
  secondary,
  primaryHref = "/about/contact/",
  primaryLabel = "Book a Demo →",
}: HeroCtasProps) {
  return (
    <PageCtas
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondary?.href ?? "/about/contact/"}
      secondaryLabel={secondary?.label ?? "Talk to Scanbo"}
    />
  );
}

/** Bottom CTA pair shared across pages. Override labels only when needed. */
export function PlatformCtas({
  primaryHref = "/about/contact/",
  primaryLabel = "Book a platform walkthrough →",
  secondaryHref = "/about/contact/#investors",
  secondaryLabel = "Investor inquiries",
}: PageCtasProps = {}) {
  return (
    <PageCtas
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={secondaryHref}
      secondaryLabel={secondaryLabel}
    />
  );
}
