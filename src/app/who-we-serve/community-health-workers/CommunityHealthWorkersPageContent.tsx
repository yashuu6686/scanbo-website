import { PlatformCtas } from "@/components/common/Ctas";
import { chwCards, chwHeroChips, chwLinks, chwStats } from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 04
            </div>
            <h1>Portable screening
              <br />
              <span>for frontline and rural care.</span>
            </h1>
            <p className="lede">The people closest to patients have the fewest diagnostic tools. Scanbo puts a clinical-grade assessment in their hands, with no lab, no specialist and no cold chain.
            </p>
            <div className="pstat">
              {chwHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_chw.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">04 · COMMUNITY HEALTH WORKERS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">In the field</div>
          <h2 style={{ marginTop: "14px" }}>A clinic's worth of screening,
            <br />in one device.
          </h2>
          <div className="pcards">
            {chwCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            {chwStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
            <blockquote>“Documentation time is gone. That time is back with our doctors.”</blockquote>
            <cite>Clinic partner CEO 
              <span>· 4,000 hours recovered across 50 devices · Diabetes reversal network, Pune</span>
            </cite>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers community programs use.</h2>
          <div className="plinks n3">
            {chwLinks.map((link) => (
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
            <a href="/who-we-serve/community-health-workers/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Bring screening
            <br />to the community.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/community-health-workers/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/community-health-workers/\", \"name\": \"For Community Health Workers | Portable Screening | Scanbo\", \"description\": \"Portable, clinical-grade screening for frontline and rural care, with no lab, no specialist and no cold chain. Built for community health workers.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"For Community Health Workers\", \"item\": \"https://www.scanbo.com/who-we-serve/community-health-workers/\"}]}]}";
