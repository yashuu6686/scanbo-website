import { PlatformCtas } from "@/components/common/Ctas";

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
              <span className="chip">Urban and rural</span>
              <span className="chip">No cold chain</span>
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
            <div className="pcard">
              <div className="k">Portable screening</div>
              <h4>Screening in the field.</h4>
              <p>Validated in low-resource urban and rural deployments. Health workers screen patients and capture data directly into the clinical record.</p>
            </div>
            <div className="pcard">
              <div className="k">Cardiac insight</div>
              <h4>Cardiology intelligence without a cardiologist.</h4>
              <p>HridayTaal® gives community health workers structured cardiac interpretation once available only in specialist settings.</p>
            </div>
            <div className="pcard">
              <div className="k">Metabolic care</div>
              <h4>Built for chronic-disease programs.</h4>
              <p>Smart Scale and D8 together support diabetes and chronic-disease management, with trends visible to the clinical team over time.</p>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>8</b>
              <span>measurements per assessment</span>
            </div>
            <div>
              <b>&lt;5 min</b>
              <span>per full assessment</span>
            </div>
            <div>
              <b>750+</b>
              <span>devices deployed</span>
            </div>
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
            <a className="plink" href="/platform/smart-scale/">
              <i>03</i>
              <b>Scanbo® Smart Scale</b>
              <span>AI Body Score and 40+ metabolic indicators</span>
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
