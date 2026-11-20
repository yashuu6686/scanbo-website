import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NAV_SECTION_HREF } from "@/constants/navigation";
import type { NavSection } from "@/components/shell/types";
import {
  aboutDropdownItems,
  aboutOverviewLink,
  insightsDropdownItems,
  insightsOverviewLink,
  platformDropdownItems,
  platformOverviewLink,
  whomWeServeDropdownItems,
  whomWeServeOverviewLink,
  type DropdownNavItem,
  type OverviewLink,
} from "@/data/navigation";

type HeaderProps = {
  active?: NavSection;
};

function TopLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: NavSection;
}) {
  const section = (Object.keys(NAV_SECTION_HREF) as NavSection[]).find(
    (key) => NAV_SECTION_HREF[key] === href,
  );
  const on = active && section === active;
  return (
    <Link href={href} className={on ? "on" : undefined}>
      {label}
    </Link>
  );
}

function DropdownMenu({
  items,
  overview,
}: {
  items: DropdownNavItem[];
  overview: OverviewLink;
}) {
  return (
    <div className="ddm">
      {items.map((item) => {
        const approvedLabel = "CDSCO Approved";
        const approvedIndex = item.description.indexOf(approvedLabel);

        return (
          <Link key={item.id} href={item.href}>
            <i>{item.num}</i>
            <b>{item.title}</b>
            <span>
              {approvedIndex >= 0 ? (
                <>
                  {item.description.slice(0, approvedIndex)}
                  <em className="approved-label">{approvedLabel}</em>
                  {item.description.slice(approvedIndex + approvedLabel.length)}
                </>
              ) : (
                item.description
              )}
            </span>
          </Link>
        );
      })}
      <Link className="all" href={overview.href}>
        {overview.label}
      </Link>
    </div>
  );
}

/** Desktop nav — identical to legacy pages aside from optional className="on". */
export function Header({ active }: HeaderProps) {
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Scanbo home">
          <BrandLogo />
        </Link>
        <div className="navlinks">
          <div className="dd">
            <TopLink href="/platform/" label="Platform" active={active} />
            <DropdownMenu
              items={platformDropdownItems}
              overview={platformOverviewLink}
            />
          </div>
          <div className="dd">
            <TopLink href="/who-we-serve/" label="Whom We Serve" active={active} />
            <DropdownMenu
              items={whomWeServeDropdownItems}
              overview={whomWeServeOverviewLink}
            />
          </div>
          <div className="dd">
            <TopLink href="/insights/" label="Insights" active={active} />
            <DropdownMenu
              items={insightsDropdownItems}
              overview={insightsOverviewLink}
            />
          </div>
          <div className="dd">
            <TopLink href="/about/" label="About" active={active} />
            <DropdownMenu
              items={aboutDropdownItems}
              overview={aboutOverviewLink}
            />
          </div>
        </div>
        <div className="nav-actions">
          <a
            className="btn btn-signin nav-signin"
            href="https://app.scanbo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign in
          </a>
          <Link className="btn btn-lime nav-cta" href="/about/contact/">
            Book a walkthrough
          </Link>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mnav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
