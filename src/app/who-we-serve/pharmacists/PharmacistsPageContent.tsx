import { PlatformCtas } from "@/components/common/Ctas";
import {
  pharmacistsCards,
  pharmacistsHeroChips,
  pharmacistsLinks,
  pharmacistsStats,
} from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 03
            </div>
            <h1>Medication safety,
              <br />
              <span>with evidence you can defend.</span>
            </h1>
            <p className="lede">Check interactions in seconds, see the exact source behind every finding, and keep an auditable record of every decision. Plus point-of-care screening at the pharmacy counter.
            </p>
            <div className="pstat">
              {pharmacistsHeroChips.map((chip) =>
                chip.link && chip.href ? (
                  <a
                    key={chip.id}
                    className="chip link"
                    href={chip.href}
                    rel={chip.rel}
                  >
                    {chip.label}
                  </a>
                ) : (
                  <span key={chip.id} className="chip">
                    {chip.label}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_pharmacists.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">03 · PHARMACISTS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
                  <path d="M9.2 9.2l5.6 5.6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">RxShield for pharmacists</div>
          <h2 style={{ marginTop: "14px" }}>Drug decisions
            <br />that hold up.
          </h2>
          <div className="pcards n4">
            {pharmacistsCards.map((card) => (
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
            {pharmacistsStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>Regulatory notice</b>
            <p>RxShield is a non-device clinical decision support tool under FDA §520(o)(1)(E) and operates in line with Health Canada CDS guidelines. Outputs are for reference by qualified healthcare professionals only.
            </p>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers pharmacists use.</h2>
          <div className="plinks n3">
            {pharmacistsLinks.map((link) => (
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
            <a href="/who-we-serve/pharmacists/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Evidence that holds up.
            <br />Decisions you can defend.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/pharmacists/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/pharmacists/\", \"name\": \"For Pharmacists | Medication Safety and Screening | Scanbo\", \"description\": \"Check drug interactions in seconds, see the source behind every finding and keep an auditable record, plus point-of-care screening at the counter.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"For Pharmacists\", \"item\": \"https://www.scanbo.com/who-we-serve/pharmacists/\"}]}]}";
