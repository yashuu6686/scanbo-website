import { PlatformCtas } from "@/components/common/Ctas";
import {
  physiciansCards,
  physiciansHeroChips,
  physiciansLinks,
  physiciansStats,
} from "@/data/whoWeServe";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 02
            </div>
            <h1>Diagnose faster.
              <br />
              <span>Document less.</span>
            </h1>
            <p className="lede">Clinical-grade readings, AI interpretation and a finished note, all inside the consultation, so the visit is about the patient, not the paperwork.
            </p>
            <div className="pstat">
              {physiciansHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_stethoscope.jpg" alt="" style={{ objectPosition: "center 30%" }} />
              <span className="bign">02 · PHYSICIANS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3v5a5 5 0 0 0 10 0V3" />
                  <path d="M10 13v2a4 4 0 0 0 8 0v-2" />
                  <circle cx="18" cy="10" r="2.2" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">In the consultation</div>
          <h2 style={{ marginTop: "14px" }}>Everything you need,
            <br />before the patient leaves.
          </h2>
          <div className="pcards">
            {physiciansCards.map((card) => (
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
            {physiciansStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
            <blockquote>“Vitals at the point of consultation, already in the EMR before I finish the examination.”</blockquote>
            <cite>Dr. Jogendra Kumar Bastia, MD 
              <span>· Consultant Neurologist, SGPGI MS</span>
            </cite>
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>Clinical positioning</b>
            <p>HridayTaal® and RxShield are decision-support tools. They assist clinically trained professionals and never replace physician judgment.</p>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers physicians use.</h2>
          <div className="plinks n4">
            {physiciansLinks.map((link) => (
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
            <a href="/who-we-serve/physicians/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>See it in
            <br />your consultation.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/physicians/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/physicians/\", \"name\": \"For Physicians | Diagnose Faster, Document Less | Scanbo\", \"description\": \"Clinical-grade readings, AI interpretation and a finished note, all inside the consultation. Scanbo helps physicians diagnose faster and document less.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"For Physicians\", \"item\": \"https://www.scanbo.com/who-we-serve/physicians/\"}]}]}";
