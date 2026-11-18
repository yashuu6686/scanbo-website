export function MobileNav() {
  return (
    <div id="mnav" className="mnav" hidden>
      <details>
        <summary>Platform</summary>
        <a className="all" href="/platform/">
          Platform overview →
        </a>
        <a href="/platform/scanbo-d8/">Scanbo® D8</a>
        <a href="/platform/hridaytaal-ecg-ai/">HridayTaal®</a>
        <a href="/platform/smart-scale/">Scanbo® Smart Scale</a>
        <a href="/platform/ambient-documentation/">Ambient Documentation</a>
        <a href="/platform/rxshield/">RxShield</a>
        <a href="/platform/scanbo-emr/">Scanbo® EMR</a>
      </details>
      <details>
        <summary>Who we serve</summary>
        <a className="all" href="/who-we-serve/">
          All audiences →
        </a>
        <a href="/who-we-serve/hospitals-clinics/">Hospitals & clinics</a>
        <a href="/who-we-serve/physicians/">Physicians</a>
        <a href="/who-we-serve/pharmacists/">Pharmacists</a>
        <a href="/who-we-serve/community-health-workers/">
          Community health workers
        </a>
        <a href="/who-we-serve/individuals/">Individuals</a>
        <a href="/who-we-serve/accountable-care-organizations/">
          Accountable care organizations
        </a>
      </details>
      <details>
        <summary>Insights</summary>
        <a className="all" href="/insights/">
          Insights overview →
        </a>
        <a href="/insights/clinical-studies/">Clinical studies</a>
        <a href="/insights/customer-stories/">Customer stories</a>
        <a href="/insights/reimbursement-guide/">Reimbursement guide</a>
      </details>
      <details>
        <summary>Company</summary>
        <a className="all" href="/about/">
          About overview →
        </a>
        <a href="/about/company/">Who we are</a>
        <a href="/about/manufacturing-quality/">Manufacturing & quality</a>
        <a href="/about/data-philosophy/">Data philosophy</a>
        <a href="/about/newsroom/">Newsroom</a>
        <a href="/about/careers/">Careers</a>
        <a href="/about/contact/">Contact</a>
      </details>
      <a className="btn btn-lime mcta" href="/about/contact/">
        Book a walkthrough
      </a>
    </div>
  );
}
