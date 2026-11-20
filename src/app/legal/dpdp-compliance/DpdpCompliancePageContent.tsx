import { LegalNav } from "@/components/common/LegalNav";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Compliance · India
          </div>
          <h1>DPDP Compliance Statement</h1>
          <p className="lupd">Digital Personal Data Protection Act, 2023 · Last updated: March 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/dpdp-compliance/" />
          <article className="lbody">
            <h3>Overview</h3> 
            <p>Scanbo® is committed to compliance with India's DPDP Act, 2023. As a company headquartered in India processing personal data of Indian citizens, this Act applies directly to our operations.
            </p> 
            <h3>Our Role as Data Fiduciary</h3> 
            <p>Under the DPDP Act, Scanbo® is a Data Fiduciary — we determine the purpose and means of processing personal data. For clinical data processed on behalf of healthcare providers, we may also act as a Data Processor.
            </p> 
            <h3>Your Rights as a Data Principal</h3> 
            <ul> 
              <li>
                <strong>Right to information:</strong> know what data is being processed and for what purpose
              </li> 
              <li>
                <strong>Right of access:</strong> obtain a summary of your personal data held by us
              </li> 
              <li>
                <strong>Right to correction and erasure:</strong> correct inaccurate data or request deletion
              </li> 
              <li>
                <strong>Right to grievance redressal:</strong> raise concerns with our Grievance Officer
              </li> 
              <li>
                <strong>Right to nominate:</strong> nominate an individual to act on your behalf
              </li> 
            </ul> 
            <h3>Grievance Officer — India</h3> 
            <div className="lbox">
              <strong>Grievance Officer (DPDP Act):</strong>
              <br />
              <a href="mailto:dpdp@scanbo.com">dpdp@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/dpdp-compliance/#webpage\", \"url\": \"https://www.scanbo.com/legal/dpdp-compliance/\", \"name\": \"DPDP Compliance Statement | Scanbo\", \"description\": \"Scanbo's compliance statement under India's Digital Personal Data Protection Act, 2023.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"DPDP Compliance Statement\", \"item\": \"https://www.scanbo.com/legal/dpdp-compliance/\"}]}]}";
