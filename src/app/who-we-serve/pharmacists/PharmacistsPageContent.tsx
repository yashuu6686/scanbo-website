import { PlatformCtas } from "@/components/common/Ctas";

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
              <a className="chip link" href="https://scanbo.ai/rxshield" rel="noopener">Try RxShield →</a>
              <span className="chip">Free for HCPs · U.S. &amp; Canada</span>
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
            <div className="pcard">
              <div className="k">Interaction checks</div>
              <h4>Fewer adverse events, faster evidence.</h4>
              <p>Interaction analysis from FDA-approved prescribing information, clinical guidelines and peer-reviewed literature, source-linked in under two seconds.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Audit trail</div>
              <h4>Defend every decision.</h4>
              <p>Every check generates a unique Decision ID: an immutable snapshot of what was shown, when, and from which sources.</p>
            </div>
            <div className="pcard">
              <div className="k">Alternatives</div>
              <h4>Alternatives with full context.</h4>
              <p>Where alternatives exist, RxShield shows them with contraindication data inline. Black-box warnings are always displayed.</p>
            </div>
            <div className="pcard">
              <div className="k">At the counter</div>
              <h4>Screening where patients already are.</h4>
              <p>Scanbo® D8 is purpose-built for pharmacies, and HridayTaal® delivers AI ECG interpretation in pharmacy settings, with no specialist on site.
              </p>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>&lt;2s</b>
              <span>from drug entry to complete evidence</span>
            </div>
            <div>
              <b>100%</b>
              <span>of findings linked to the exact source passage</span>
            </div>
            <div>
              <b>0</b>
              <span>autonomous clinical decisions by AI</span>
            </div>
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
            <a className="plink" href="/platform/rxshield/">
              <i>05</i>
              <b>RxShield</b>
              <span>Drug interaction evidence you can defend</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/scanbo-d8/">
              <i>01</i>
              <b>Scanbo® D8</b>
              <span>Eight measurements in under five minutes</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/hridaytaal-ecg-ai/">
              <i>02</i>
              <b>HridayTaal® Cardiac Agent</b>
              <span>AI that reads every ECG in real time</span>
              <em>Learn more →</em>
            </a>
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
