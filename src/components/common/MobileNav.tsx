import Link from "next/link";

export function MobileNav() {
  return (
    <div id="mnav" className="mnav" hidden>
      <details>
        <summary>Platform</summary>
        <Link className="all" href="/platform/">
          Platform overview →
        </Link>
        <Link href="/platform/scanbo-d8/">Scanbo® D8 (D8–D19)</Link>
        <Link href="/platform/hridaytaal-ecg-ai/">HridayTaal® Cardiac Agent</Link>
        <Link href="/platform/smart-scale/">Scanbo® Smart Scale</Link>
        <Link href="/platform/ambient-documentation/">Ambient Documentation</Link>
        <Link href="/platform/rxshield/">RxShield</Link>
        <Link href="/platform/scanbo-ehr/">Scanbo® EMR</Link>
      </details>
      <details>
        <summary>Whom We Serve</summary>
        <Link className="all" href="/who-we-serve/">
          All audiences →
        </Link>
        <Link href="/who-we-serve/hospitals-clinics/">Hospitals & clinics</Link>
        <Link href="/who-we-serve/physicians/">Physicians</Link>
        <Link href="/who-we-serve/pharmacists/">Pharmacists</Link>
        <Link href="/who-we-serve/community-health-workers/">
          Community health workers
        </Link>
        <Link href="/who-we-serve/individuals/">Individuals</Link>
        <Link href="/who-we-serve/accountable-care-organizations/">
          Accountable care organizations
        </Link>
      </details>
      <details>
        <summary>Insights</summary>
        <Link className="all" href="/insights/">
          Insights overview →
        </Link>
        <Link href="/insights/clinical-studies/">Clinical studies</Link>
        <Link href="/insights/customer-stories/">Customer stories</Link>
        <Link href="/insights/reimbursement-guide/">Reimbursement guide</Link>
      </details>
      <details>
        <summary>Company</summary>
        <Link className="all" href="/about/">
          About overview →
        </Link>
        <Link href="/about/company/">Who we are</Link>
        <Link href="/about/manufacturing-quality/">Manufacturing & quality</Link>
        <Link href="/about/data-philosophy/">Data philosophy</Link>
        <Link href="/about/newsroom/">Newsroom</Link>
        <Link href="/about/careers/">Careers</Link>
        <Link href="/about/contact/">Contact</Link>
      </details>
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
