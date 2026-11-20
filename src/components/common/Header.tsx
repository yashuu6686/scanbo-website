import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { NAV_SECTION_HREF } from "@/constants/navigation";
import type { NavSection } from "@/components/shell/types";

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
            <div className="ddm">
              <Link href="/platform/scanbo-d8/">
                <i>01</i>
                <b>Scanbo® D8 (D8–D19)</b>
                <span>19 lab-grade parameters · CDSCO Approved</span>
              </Link>
              <Link href="/platform/hridaytaal-ecg-ai/">
                <i>02</i>
                <b>HridayTaal® Cardiac Agent</b>
                <span>1M+ ECG analyses · AFIB &amp; arrhythmia detection</span>
              </Link>
              <Link href="/platform/smart-scale/">
                <i>03</i>
                <b>Scanbo® Smart Scale</b>
                <span>AI Body Score and 40+ metabolic indicators</span>
              </Link>
              <Link href="/platform/ambient-documentation/">
                <i>04</i>
                <b>Ambient Documentation</b>
                <span>Clinic-ready notes the moment the visit ends</span>
              </Link>
              <Link href="/platform/rxshield/">
                <i>05</i>
                <b>RxShield</b>
                <span>Drug interaction evidence you can defend</span>
              </Link>
              <Link href="/platform/scanbo-ehr/">
                <i>06</i>
                <b>Scanbo® EMR</b>
                <span>The operational hub for connected care</span>
              </Link>
              <Link className="all" href="/platform/">
                Platform overview →
              </Link>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/who-we-serve/" label="Whom We Serve" active={active} />
            <div className="ddm">
              <Link href="/who-we-serve/hospitals-clinics/">
                <i>01</i>
                <b>Hospitals & clinics</b>
                <span>Enterprise diagnostics for connected care delivery</span>
              </Link>
              <Link href="/who-we-serve/physicians/">
                <i>02</i>
                <b>Physicians</b>
                <span>Diagnose faster and document less with AI</span>
              </Link>
              <Link href="/who-we-serve/pharmacists/">
                <i>03</i>
                <b>Pharmacists</b>
                <span>Medication safety and decision support with AI</span>
              </Link>
              <Link href="/who-we-serve/community-health-workers/">
                <i>04</i>
                <b>Community health workers</b>
                <span>Portable screening for frontline and rural care</span>
              </Link>
              <Link href="/who-we-serve/individuals/">
                <i>05</i>
                <b>Individuals</b>
                <span>Personal monitoring between visits and beyond the clinic</span>
              </Link>
              <Link href="/who-we-serve/accountable-care-organizations/">
                <i>06</i>
                <b>Accountable care organizations</b>
                <span>Scalable screening and insights for value-based care</span>
              </Link>
              <Link className="all" href="/who-we-serve/">
                All audiences →
              </Link>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/insights/" label="Insights" active={active} />
            <div className="ddm">
              <Link href="/insights/clinical-studies/">
                <i>01</i>
                <b>Clinical studies</b>
                <span>Clinical evidence and published research</span>
              </Link>
              <Link href="/insights/customer-stories/">
                <i>02</i>
                <b>Customer stories</b>
                <span>Real outcomes from clinical deployments</span>
              </Link>
              <Link href="/insights/reimbursement-guide/">
                <i>03</i>
                <b>Reimbursement guide</b>
                <span>Medicare CPT, RPM and SMBP pathways</span>
              </Link>
              <Link className="all" href="/insights/">
                Insights overview →
              </Link>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/about/" label="Company" active={active} />
            <div className="ddm">
              <Link href="/about/company/">
                <i>01</i>
                <b>Who we are</b>
                <span>Who we are, why we exist and where we are going</span>
              </Link>
              <Link href="/about/manufacturing-quality/">
                <i>02</i>
                <b>Manufacturing & quality</b>
                <span>In-house manufacturing, quality systems and regulatory discipline</span>
              </Link>
              <Link href="/about/data-philosophy/">
                <i>03</i>
                <b>Data philosophy</b>
                <span>Consent-based data practices and patient ownership</span>
              </Link>
              <Link href="/about/newsroom/">
                <i>04</i>
                <b>Newsroom</b>
                <span>Press coverage, company updates and announcements</span>
              </Link>
              <Link href="/about/careers/">
                <i>05</i>
                <b>Careers</b>
                <span>Join the team building AI for clinical care</span>
              </Link>
              <Link href="/about/contact/">
                <i>06</i>
                <b>Contact</b>
                <span>Speak with Scanbo®</span>
              </Link>
              <Link className="all" href="/about/">
                About overview →
              </Link>
            </div>
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
