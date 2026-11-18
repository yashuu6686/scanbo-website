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
    <a href={href} className={on ? "on" : undefined}>
      {label}
    </a>
  );
}

/** Desktop nav — identical to legacy pages aside from optional className="on". */
export function Header({ active }: HeaderProps) {
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="/">
          <img className="logo-h" src="/assets/logo_h.png" alt="Scanbo" />
        </a>
        <div className="navlinks">
          <div className="dd">
            <TopLink href="/platform/" label="Platform" active={active} />
            <div className="ddm">
              <a href="/platform/scanbo-d8/">
                <i>01</i>
                <b>Scanbo® D8</b>
                <span>Eight measurements in under five minutes</span>
              </a>
              <a href="/platform/hridaytaal-ecg-ai/">
                <i>02</i>
                <b>HridayTaal®</b>
                <span>AI that reads every ECG in real time</span>
              </a>
              <a href="/platform/smart-scale/">
                <i>03</i>
                <b>Scanbo® Smart Scale</b>
                <span>AI Body Score and 40+ metabolic indicators</span>
              </a>
              <a href="/platform/ambient-documentation/">
                <i>04</i>
                <b>Ambient Documentation</b>
                <span>Clinic-ready notes the moment the visit ends</span>
              </a>
              <a href="/platform/rxshield/">
                <i>05</i>
                <b>RxShield</b>
                <span>Drug interaction evidence you can defend</span>
              </a>
              <a href="/platform/scanbo-emr/">
                <i>06</i>
                <b>Scanbo® EMR</b>
                <span>The operational hub for connected care</span>
              </a>
              <a className="all" href="/platform/">
                Platform overview →
              </a>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/who-we-serve/" label="Who we serve" active={active} />
            <div className="ddm">
              <a href="/who-we-serve/hospitals-clinics/">
                <i>01</i>
                <b>Hospitals & clinics</b>
                <span>Enterprise diagnostics for connected care delivery</span>
              </a>
              <a href="/who-we-serve/physicians/">
                <i>02</i>
                <b>Physicians</b>
                <span>Diagnose faster and document less with AI</span>
              </a>
              <a href="/who-we-serve/pharmacists/">
                <i>03</i>
                <b>Pharmacists</b>
                <span>Medication safety and decision support with AI</span>
              </a>
              <a href="/who-we-serve/community-health-workers/">
                <i>04</i>
                <b>Community health workers</b>
                <span>Portable screening for frontline and rural care</span>
              </a>
              <a href="/who-we-serve/individuals/">
                <i>05</i>
                <b>Individuals</b>
                <span>Personal monitoring between visits and beyond the clinic</span>
              </a>
              <a href="/who-we-serve/accountable-care-organizations/">
                <i>06</i>
                <b>Accountable care organizations</b>
                <span>Scalable screening and insights for value-based care</span>
              </a>
              <a className="all" href="/who-we-serve/">
                All audiences →
              </a>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/insights/" label="Insights" active={active} />
            <div className="ddm">
              <a href="/insights/clinical-studies/">
                <i>01</i>
                <b>Clinical studies</b>
                <span>Clinical evidence and published research</span>
              </a>
              <a href="/insights/customer-stories/">
                <i>02</i>
                <b>Customer stories</b>
                <span>Real outcomes from clinical deployments</span>
              </a>
              <a href="/insights/reimbursement-guide/">
                <i>03</i>
                <b>Reimbursement guide</b>
                <span>Medicare CPT, RPM and SMBP pathways</span>
              </a>
              <a className="all" href="/insights/">
                Insights overview →
              </a>
            </div>
          </div>
          <div className="dd">
            <TopLink href="/about/" label="Company" active={active} />
            <div className="ddm">
              <a href="/about/company/">
                <i>01</i>
                <b>Who we are</b>
                <span>Who we are, why we exist and where we are going</span>
              </a>
              <a href="/about/manufacturing-quality/">
                <i>02</i>
                <b>Manufacturing & quality</b>
                <span>In-house manufacturing, quality systems and regulatory discipline</span>
              </a>
              <a href="/about/data-philosophy/">
                <i>03</i>
                <b>Data philosophy</b>
                <span>Consent-based data practices and patient ownership</span>
              </a>
              <a href="/about/newsroom/">
                <i>04</i>
                <b>Newsroom</b>
                <span>Press coverage, company updates and announcements</span>
              </a>
              <a href="/about/careers/">
                <i>05</i>
                <b>Careers</b>
                <span>Join the team building AI for clinical care</span>
              </a>
              <a href="/about/contact/">
                <i>06</i>
                <b>Contact</b>
                <span>Speak with Scanbo®</span>
              </a>
              <a className="all" href="/about/">
                About overview →
              </a>
            </div>
          </div>
        </div>
        <a className="btn btn-lime nav-cta" href="/about/contact/">
          Book a walkthrough
        </a>
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
