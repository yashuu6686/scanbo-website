export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Privacy
          </div>
          <h1>Data Request</h1>
          <p className="lupd">Last updated: March 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <aside className="lnav">
            <b>Legal</b>
            <a href="/legal/privacy-policy/">Privacy Policy</a>
            <a href="/legal/terms-conditions/">Terms &amp; Conditions</a>
            <a href="/legal/cookie-preferences/">Cookie Preferences</a>
            <a href="/legal/hipaa-notice/">HIPAA Notice of Privacy Practices</a>
            <a href="/legal/gdpr-statement/">GDPR Statement</a>
            <a href="/legal/dpdp-compliance/">DPDP Compliance Statement</a>
            <a href="/legal/data-request/" className="on">Data Request</a>
            <a href="/legal/instructions-for-use/">Instructions for Use</a>
            <a href="/legal/telehealth/">Telehealth Policy</a>
            <a href="/legal/responsible-disclosure/">Responsible Disclosure</a>
            <a href="/legal/non-discrimination/">Non-Discrimination Policy</a>
            <a href="/legal/disclaimer/">Disclaimer</a>
            <a href="/legal/sitemap/">Sitemap</a>
          </aside>
          <article className="lbody">
            <h3>Your Right to Access &amp; Control Your Data</h3> 
            <p>Under GDPR, HIPAA, and India's DPDP Act, you have the right to access, correct, delete, or receive a copy of your personal data held by Scanbo®.
            </p> 
            <div className="lgrid"> 
              <div className="lbox">
                <h4>Access Request</h4>
                <p>Receive a copy of all personal data we hold about you.</p>
              </div> 
              <div className="lbox">
                <h4>Correction Request</h4>
                <p>Update or correct inaccurate personal data we hold.</p>
              </div> 
              <div className="lbox">
                <h4>Deletion Request</h4>
                <p>Request erasure of your personal data subject to legal obligations.</p>
              </div> 
              <div className="lbox">
                <h4>Portability Request</h4>
                <p>Receive your data in a structured, machine-readable format.</p>
              </div> 
            </div> 
            <h3>Response Timeline</h3> 
            <ul> 
              <li>
                <strong>India (DPDP):</strong> 30 days of verified request
              </li> 
              <li>
                <strong>EU/UK (GDPR):</strong> 30 days, extendable to 90 for complex requests
              </li> 
              <li>
                <strong>USA (HIPAA / CCPA):</strong> 30 days of verified request
              </li> 
            </ul> 
            <div className="lbox">
              <strong>Submit a data request:</strong> 
              <a href="mailto:privacy@scanbo.com">privacy@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/data-request/#webpage\", \"url\": \"https://www.scanbo.com/legal/data-request/\", \"name\": \"Data Request | Scanbo\", \"description\": \"How to request access to, correction of, deletion of or a copy of your personal data held by Scanbo.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Data Request\", \"item\": \"https://www.scanbo.com/legal/data-request/\"}]}]}";
