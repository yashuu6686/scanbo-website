import { LegalNav } from "@/components/common/LegalNav";
import { dataRequestTimeline, dataRequestTypes } from "@/data/dataRequest";

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
          <LegalNav activeHref="/legal/data-request/" />
          <article className="lbody">
            <h3>Your Right to Access &amp; Control Your Data</h3> 
            <p>Under GDPR, HIPAA, and India's DPDP Act, you have the right to access, correct, delete, or receive a copy of your personal data held by Scanbo®.
            </p> 
            <div className="lgrid"> 
              {dataRequestTypes.map((item) => (
                <div className="lbox" key={item.id}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))} 
            </div> 
            <h3>Response Timeline</h3> 
            <ul> 
              {dataRequestTimeline.map((item) => (
                <li key={item.id}>
                  <strong>{item.region}</strong> {item.detail}
                </li>
              ))} 
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
