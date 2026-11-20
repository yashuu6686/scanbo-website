import { PlatformCtas } from "@/components/common/Ctas";
import {
  individualsCards,
  individualsHeroChips,
  individualsLinks,
} from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 05
            </div>
            <h1>Monitoring between visits,
              <br />
              <span>beyond the clinic.</span>
            </h1>
            <p className="lede">Measure at home, see your results in the Scanbo® app, and stay connected to your care team, with your readings flowing into the record they use.
            </p>
            <div className="pstat">
              {individualsHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_individuals.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">05 · INDIVIDUALS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <rect x="7" y="2" width="10" height="20" rx="2.5" />
                  <path d="M11 18h2" />
                  <path d="M9.5 10.5l1.5 1.5 3.5-3.5" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">For patients</div>
          <h2 style={{ marginTop: "14px" }}>Your health picture,
            <br />between appointments.
          </h2>
          <div className="pcards n4">
            {individualsCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers patients use.</h2>
          <div className="plinks n3">
            {individualsLinks.map((link) => (
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
            <a href="/who-we-serve/hospitals-clinics/">
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
            <a href="/who-we-serve/individuals/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Ask your clinic
            <br />about Scanbo.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/individuals/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/individuals/\", \"name\": \"Health Monitoring Between Visits | Scanbo\", \"description\": \"Measure at home, see your results in the Scanbo® app and stay connected to your care team, with readings flowing into the record they use.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Health Monitoring Between Visits\", \"item\": \"https://www.scanbo.com/who-we-serve/individuals/\"}]}]}";
