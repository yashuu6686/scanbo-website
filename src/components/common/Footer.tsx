import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="logo" href="/">
              <img
                loading="lazy"
                decoding="async"
                className="logo-st"
                src="/assets/logo_stacked.png"
                alt="Scanbo"
              />
            </Link>
            <p style={{ marginTop: "16px", maxWidth: "300px" }}>
              A connected diagnostic platform for community healthcare.
            </p>
          </div>
          <div>
            <h5>Platform</h5>
            <Link href="/platform/scanbo-d8/">Scanbo® D8 (D8–D19)</Link>
            <Link href="/platform/hridaytaal-ecg-ai/">HridayTaal® Cardiac Agent</Link>
            <Link href="/platform/smart-scale/">Smart Scale</Link>
            <Link href="/platform/rxshield/">RxShield</Link>
            <Link href="/platform/ambient-documentation/">Ambient Documentation</Link>
            <Link href="/platform/scanbo-ehr/">Scanbo® EMR</Link>
          </div>
          <div>
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
          <div>
            <h5>Insights</h5>
            <Link href="/insights/clinical-studies/">Clinical studies</Link>
            <Link href="/insights/customer-stories/">Customer stories</Link>
            <Link href="/insights/reimbursement-guide/">Reimbursement guide</Link>
            <Link href="/about/newsroom/">Newsroom</Link>
          </div>
          <div>
            <h5>Company</h5>
            <Link href="/about/company/">About</Link>
            <Link href="/about/manufacturing-quality/">Manufacturing & quality</Link>
            <Link href="/about/data-philosophy/">Data philosophy</Link>
            <Link href="/about/careers/">Careers</Link>
            <Link href="/about/contact/">Contact</Link>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Scanbo Technologies Inc. All rights reserved.</span>
          <span className="ll">
            <Link href="/legal/privacy-policy/">Privacy</Link>
            <Link href="/legal/terms-conditions/">Terms</Link>
            <Link href="/legal/hipaa-notice/">HIPAA notice</Link>
            <Link href="/legal/gdpr-statement/">GDPR</Link>
            <Link href="/legal/dpdp-compliance/">DPDP</Link>
            <Link href="/legal/cookie-preferences/">Cookies</Link>
            <Link href="/legal/sitemap/">Sitemap</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
