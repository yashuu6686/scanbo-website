import {
  aboutCertBadges,
  leadershipPeople,
  medicalAdvisoryTeam,
} from "@/data/about";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Company</div>
          <h1>Built by operators. 
            <span>Guided by clinicians.</span>
          </h1>
          <p className="lede">Scanbo Technologies Inc. builds point-of-care diagnostics so that a diagnosis takes minutes, not days, wherever the patient is.</p>
        </div>
      </header>
      <section className="light tight">
        <div className="wrap">
          <p className="bigq">“In an age of AI, this should take minutes, 
            <span>not days.</span>”
          </p>
          <p className="bigq-cite">
            <b>Ashissh Raichura</b> · Founder &amp; CEO
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="eyebrow">Leadership</div>
          <h2 style={{ marginTop: "14px" }}>The team.</h2>
          <div className="people">
            {leadershipPeople.map((person) => (
              <div key={person.id} className="person">
                <div className="role">{person.role}</div>
                <h4>{person.name}</h4>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
          <div className="boardline">
            <b>BOARD</b>Ashissh Raichura, Chair · Sokhie Puar · Nancy Goertzen, ICD.D · Patricia Steadman · Dr. Charles Garrison, MD
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Medical advisory team</div>
          <h2 style={{ marginTop: "14px" }}>Clinical expertise guiding the platform.</h2>
          <div className="people four">
            {medicalAdvisoryTeam.map((person) => (
              <div key={person.id} className="person">
                <div className="role">{person.role}</div>
                <h4>{person.name}</h4>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="quality" className="tight">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Manufacturing &amp; quality</div>
            <h2 style={{ marginTop: "14px" }}>Designed and made in-house.</h2>
            <p className="lede" style={{ marginTop: "16px" }}>From the device to the test strips, Scanbo controls the hardware, the chemistry and the software, under certified quality and security systems.
            </p>
            <a className="amore" href="/about/manufacturing-quality/">Manufacturing &amp; quality →</a>
          </div>
          <div className="certs" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {aboutCertBadges.map((badge) => (
              <span
                key={badge.id}
                style={{ border: "1px solid rgba(255,255,255,.2)", borderRadius: "12px", padding: "12px 16px", fontWeight: 700 }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 style={{ marginTop: "14px" }}>Who we are, and how we work.</h2>
          <div className="six">
            <a href="/about/company/">
              <i>01</i>
              <b>Who we are</b>
            </a>
            <a href="/about/manufacturing-quality/">
              <i>02</i>
              <b>Manufacturing &amp; quality</b>
            </a>
            <a href="/about/data-philosophy/">
              <i>03</i>
              <b>Data philosophy</b>
            </a>
            <a href="/about/newsroom/">
              <i>04</i>
              <b>Newsroom</b>
            </a>
            <a href="/about/careers/">
              <i>05</i>
              <b>Careers</b>
            </a>
            <a href="/about/contact/">
              <i>06</i>
              <b>Contact</b>
            </a>
          </div>
        </div>
      </section>
      <section id="investors" className="light tight">
        <div className="wrap">
          <div className="ir">
            <div>
              <h3>Investor relations</h3>
              <p>For investor materials and briefings, contact our team.</p>
            </div>
            <a className="btn" href="/about/contact/#investors">Investor inquiries →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"AboutPage\", \"@id\": \"https://www.scanbo.com/about/#webpage\", \"url\": \"https://www.scanbo.com/about/\", \"name\": \"About Scanbo | Point-of-Care Intelligence\", \"description\": \"Scanbo Technologies Inc. builds connected point-of-care diagnostics so a diagnosis takes minutes, not days, wherever the patient is.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}]}]}";
