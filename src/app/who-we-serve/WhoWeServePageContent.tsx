import { PlatformCtas } from "@/components/common/Ctas";
import {
  whoWeServeAudienceCards,
  whoWeServeCptCodes,
  whoWeServeUsFacts,
} from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Whom We Serve</div>
          <h1>One device behind 
            <span>every door into healthcare.</span>
          </h1>
          <p className="lede">Whoever delivers the care, Scanbo brings the lab to the patient and the result to the record.</p>
        </div>
      </header>
      <section className="tight" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="aud">
            {whoWeServeAudienceCards.map((card) => (
              <div className="acard" id={card.elementId} key={card.id}>
                <div className="ic">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="need">{card.need}</p>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {card.href ? (
                  <a className="amore" href={card.href}>
                    Learn more →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="us" className="light">
        <div className="wrap">
          <div className="eyebrow">United States</div>
          <h2 style={{ marginTop: "14px", maxWidth: "900px" }}>Built for existing U.S. reimbursement. No new CPT code required.</h2>
          <p className="lede" style={{ marginTop: "16px" }}>Scanbo D8 and Smart Scale fit established remote patient monitoring (RPM) and self-measured blood pressure (SMBP) pathways, a strong fit for ACOs and value-based care.
          </p>
          <div className="codes">
            {whoWeServeCptCodes.map((code) => (
              <div className="code" key={code.id}>
                <b>{code.category}</b>
                <h4>{code.codes}</h4>
                <p>{code.description}</p>
              </div>
            ))}
          </div>
          <div className="facts" style={{ marginTop: "26px" }}>
            {whoWeServeUsFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
          <p className="fine2">Subject to FDA clearance and payer coverage. Codes shown are for orientation, not billing advice.</p>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Five minutes.
            <br />Eight measurements.
            <br />One connected record.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/\", \"name\": \"Whom We Serve | Scanbo\", \"description\": \"Hospitals, physicians, pharmacists, community health workers, individuals and U.S. ACOs: how Scanbo brings the lab to the patient and the result to the record.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}]}]}";
