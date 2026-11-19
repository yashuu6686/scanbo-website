export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Legal and 
            <span>compliance.</span>
          </h1>
          <p className="lede">Our policies, privacy notices and medical device information, in one place.</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap">
          <div className="lcards">
            <a className="lcard" href="/legal/privacy-policy/">
              <small>Legal</small>
              <b>Privacy Policy</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/terms-conditions/">
              <small>Legal</small>
              <b>Terms &amp; Conditions</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/cookie-preferences/">
              <small>Legal</small>
              <b>Cookie Preferences</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/hipaa-notice/">
              <small>Compliance · North America</small>
              <b>HIPAA Notice of Privacy Practices</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/gdpr-statement/">
              <small>Compliance · European Union</small>
              <b>GDPR Statement</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/dpdp-compliance/">
              <small>Compliance · India</small>
              <b>DPDP Compliance Statement</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/data-request/">
              <small>Privacy</small>
              <b>Data Request</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/instructions-for-use/">
              <small>Medical Device</small>
              <b>Instructions for Use</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/telehealth/">
              <small>Legal · RxShield Safety Agent</small>
              <b>Telehealth Policy</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/responsible-disclosure/">
              <small>Security</small>
              <b>Responsible Disclosure</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/non-discrimination/">
              <small>Legal</small>
              <b>Non-Discrimination Policy</b>
              <em>Read →</em>
            </a>
            <a className="lcard" href="/legal/disclaimer/">
              <small>Legal · Scanbo</small>
              <b>Disclaimer</b>
              <em>Read →</em>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"CollectionPage\", \"@id\": \"https://www.scanbo.com/legal/#webpage\", \"url\": \"https://www.scanbo.com/legal/\", \"name\": \"Legal and Compliance | Scanbo\", \"description\": \"Scanbo's privacy, terms, compliance and medical device notices, including HIPAA, GDPR and DPDP statements.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}]}]}";
