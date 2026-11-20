import { PlatformCtas } from "@/components/common/Ctas";
import {
  hospitalsClinicsCards,
  hospitalsClinicsHeroChips,
  hospitalsClinicsLinks,
  hospitalsClinicsStats,
} from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 01
            </div>
            <h1>Enterprise diagnostics
              <br />
              <span>for connected care.</span>
            </h1>
            <p className="lede">Triage still means several devices and manual data entry. Scanbo brings eight measurements, AI interpretation and the patient record into one workflow, from the OPD to the ward.
            </p>
            <div className="pstat">
              {hospitalsClinicsHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_hands.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">01 · HOSPITALS & CLINICS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 8h6M12 5v6M8 21v-4h8v4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">What changes</div>
          <h2 style={{ marginTop: "14px" }}>One workflow, from vitals
            <br />to the record.
          </h2>
          <div className="pcards">
            {hospitalsClinicsCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}
                </p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            {hospitalsClinicsStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
            <blockquote>“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”</blockquote>
            <cite>Supraja Hospitals · Rushcare Hospitals 
              <span>· Multispecialty networks, Hyderabad</span>
            </cite>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers hospitals and clinics use.</h2>
          <div className="plinks n4">
            {hospitalsClinicsLinks.map((link) => (
              <a className="plink" href={link.href} key={link.id}>
                <i>{link.num}</i>
                <b>{link.title}</b>
                <span>{link.description}</span>
                <em>{link.cta}</em>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">Whom We Serve</div>
          <h2 style={{ marginTop: "14px" }}>Six audiences. One platform.</h2>
          <div className="six">
            <a href="/who-we-serve/hospitals-clinics/" className="on">
              <i>01</i>
              <b>Hospitals & clinics</b>
            </a>
            <a href="/who-we-serve/physicians/">
              <i>02</i>
              <b>Physicians</b>
            </a>
            <a href="/who-we-serve/pharmacists/">
              <i>03</i>
              <b>Pharmacists</b>
            </a>
            <a href="/who-we-serve/community-health-workers/">
              <i>04</i>
              <b>Community health workers</b>
            </a>
            <a href="/who-we-serve/individuals/">
              <i>05</i>
              <b>Individuals</b>
            </a>
            <a href="/who-we-serve/accountable-care-organizations/">
              <i>06</i>
              <b>Accountable care organizations</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>See Scanbo in
            <br />your hospital.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/hospitals-clinics/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/hospitals-clinics/\", \"name\": \"Point-of-Care Diagnostics for Hospitals & Clinics | Scanbo\", \"description\": \"Eight measurements, AI interpretation and the patient record in one workflow, from the OPD to the ward. Point-of-care diagnostics for hospitals and clinics.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Point-of-Care Diagnostics for Hospitals & Clinics\", \"item\": \"https://www.scanbo.com/who-we-serve/hospitals-clinics/\"}]}]}";
