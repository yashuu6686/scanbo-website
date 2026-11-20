import { LegalNav } from "@/components/common/LegalNav";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Compliance · European Union
          </div>
          <h1>GDPR Statement</h1>
          <p className="lupd">Effective: March 2026 · Applies to EEA/UK customers</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/gdpr-statement/" />
          <article className="lbody">
            <h3>Our Commitment Under GDPR</h3> 
            <p>Scanbo® is committed to full compliance with the General Data Protection Regulation (EU) 2016/679 and the UK GDPR for all personal data of individuals in the EEA and United Kingdom.
            </p> 
            <h3>Legal Bases for Processing</h3> 
            <ul> 
              <li>
                <strong>Contract performance:</strong> delivering contracted services
              </li> 
              <li>
                <strong>Legal obligation:</strong> complying with EU or national law
              </li> 
              <li>
                <strong>Legitimate interests:</strong> product improvement, security, fraud prevention
              </li> 
              <li>
                <strong>Consent:</strong> marketing, non-essential cookies
              </li> 
              <li>
                <strong>Public health / vital interests:</strong> applicable in clinical contexts
              </li> 
            </ul> 
            <h3>Your Rights Under GDPR</h3> 
            <ul> 
              <li>Right of access (Art. 15) · Right to rectification (Art. 16)</li> 
              <li>Right to erasure (Art. 17) · Right to restriction (Art. 18)</li> 
              <li>Right to data portability (Art. 20) · Right to object (Art. 21)</li> 
              <li>Rights related to automated decision making (Art. 22)</li> 
            </ul> 
            <h3>International Transfers</h3> 
            <p>Transfers from the EEA to India use Standard Contractual Clauses approved by the European Commission.</p> 
            <h3>Supervisory Authority</h3> 
            <p>You may lodge a complaint with your local supervisory authority. Full list at 
              <a href="https://edpb.europa.eu" rel="noopener">edpb.europa.eu</a>.
            </p> 
            <div className="lbox">
              <strong>GDPR queries:</strong> 
              <a href="mailto:gdpr@scanbo.com">gdpr@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/gdpr-statement/#webpage\", \"url\": \"https://www.scanbo.com/legal/gdpr-statement/\", \"name\": \"GDPR Statement | Scanbo\", \"description\": \"How Scanbo complies with the EU GDPR and UK GDPR for individuals in the EEA and United Kingdom.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"GDPR Statement\", \"item\": \"https://www.scanbo.com/legal/gdpr-statement/\"}]}]}";
