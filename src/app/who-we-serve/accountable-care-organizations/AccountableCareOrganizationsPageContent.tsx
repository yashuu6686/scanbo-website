import { PlatformCtas } from "@/components/common/Ctas";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/who-we-serve/">Whom We Serve</a> · 06
            </div>
            <h1>Scalable screening
              <br />
              <span>for value-based care.</span>
            </h1>
            <p className="lede">Value-based care needs early detection that existing codes already reimburse. Two U.S. ACOs evaluated the full clinical stack and chose to pilot before FDA clearance.
            </p>
            <div className="pstat">
              <span className="chip">2 ACO pilots completed · FL &amp; NY</span>
              <span className="chip">FDA 510(k) filing targeted Q1 2027</span>
            </div>
          </div>
          <div className="part">
            <div className="artcard uiwrap">
              <span className="bign">06 · ACCOUNTABLE CARE ORGANIZATIONS</span>
              <div className="trendsvg">
                <svg viewBox="0 0 170 128" aria-hidden="true">
                  <rect x="2" y="2" width="166" height="124" rx="14" fill="#F4F8FA" />
                  <rect x="14" y="14" width="56" height="7" rx="3.5" fill="#06202E" opacity=".8" />
                  <rect x="128" y="14" width="28" height="7" rx="3.5" fill="#A9BECA" />
                  <g stroke="#DCE6EB" strokeWidth="1">
                    <path d="M14 46h142M14 72h142M14 98h142" />
                  </g>
                  <polyline points="20,52 50,44 80,56 110,48 148,40" fill="none" stroke="#4FBAD6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  <polyline points="20,88 50,80 80,94 110,86 148,98" fill="none" stroke="#06202E" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  <g fill="#fff" stroke="#2B7F9A" strokeWidth="2">
                    <circle cx="20" cy="52" r="3.5" />
                    <circle cx="50" cy="44" r="3.5" />
                    <circle cx="80" cy="56" r="3.5" />
                    <circle cx="110" cy="48" r="3.5" />
                    <circle cx="20" cy="88" r="3.5" />
                    <circle cx="50" cy="80" r="3.5" />
                    <circle cx="80" cy="94" r="3.5" />
                    <circle cx="110" cy="86" r="3.5" />
                  </g>
                  <circle cx="148" cy="40" r="5.5" fill="#A7D000" stroke="#06202E" strokeWidth="1.5" />
                  <rect x="104" y="108" width="52" height="12" rx="6" fill="#A7D000" />
                  <text x="130" y="117" textAnchor="middle" fontFamily="Archivo,Arial" fontWeight="800" fontSize="8" fill="#06202E" letterSpacing=".6">AI FLAG</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">U.S. market entry</div>
          <h2 style={{ marginTop: "14px" }}>Two ACO pilots completed.
            <br />Pre-FDA clearance.
          </h2>
          <p className="lede pintro">Accountable care organizations in Florida and New York evaluated the full clinical stack (data security, integration and outcomes) and chose to pilot before regulatory clearance.
          </p>
          <div className="pcards">
            <div className="pcard">
              <div className="k">Remote monitoring</div>
              <h4>RPM with billing fit.</h4>
              <p>Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. No new CPT code required.</p>
            </div>
            <div className="pcard">
              <div className="k">Cardiac screening</div>
              <h4>Population-level AFib screening.</h4>
              <p>In high-volume primary care, AFib detection at the point of consultation has real population-health value. HridayTaal® makes routine ECG screening clinically useful.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Earlier detection</div>
              <h4>AI flags high-risk patients earlier.</h4>
              <p>Readings and AI interpretations sit in one FHIR R5 record, so care teams see risk building across visits.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Reimbursement</div>
          <h2 style={{ marginTop: "14px" }}>Built for existing U.S. reimbursement.</h2>
          <p className="lede pintro">Codes shown are for orientation, not billing advice. Subject to FDA clearance and payer coverage.</p>
          <div className="specs one">
            <div className="spec">
              <h4>Established pathways</h4>
              <dl>
                <div className="row">
                  <dt>RPM setup and supply · 99453, 99454</dt>
                  <dd>Device setup, patient education and monthly device supply</dd>
                </div>
                <div className="row">
                  <dt>RPM management · 99457, 99458</dt>
                  <dd>Clinical staff time reviewing data and managing care</dd>
                </div>
                <div className="row">
                  <dt>Blood pressure · 99473, 99474</dt>
                  <dd>Self-measured blood pressure education and review</dd>
                </div>
                <div className="row">
                  <dt>ECG · 93040–93042</dt>
                  <dd>Rhythm ECG with interpretation and report</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers ACOs use.</h2>
          <div className="plinks n4">
            <a className="plink" href="/platform/scanbo-d8/">
              <i>01</i>
              <b>Scanbo® D8</b>
              <span>Eight measurements in under five minutes</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/smart-scale/">
              <i>03</i>
              <b>Scanbo® Smart Scale</b>
              <span>AI Body Score and 40+ metabolic indicators</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/hridaytaal-ecg-ai/">
              <i>02</i>
              <b>HridayTaal® Cardiac Agent</b>
              <span>AI that reads every ECG in real time</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/scanbo-ehr/">
              <i>06</i>
              <b>Scanbo® EMR</b>
              <span>The operational hub for connected care</span>
              <em>Learn more →</em>
            </a>
          </div>
        </div>
      </section>
      <section className="light tight">
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
            <a href="/who-we-serve/individuals/">
              <i>05</i>
              <b>Individuals</b>
            </a>
            <a href="/who-we-serve/accountable-care-organizations/" className="on">
              <i>06</i>
              <b>Accountable care organizations</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Talk to our
            <br />U.S. team.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/accountable-care-organizations/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/accountable-care-organizations/\", \"name\": \"For U.S. ACOs | Screening for Value-Based Care | Scanbo\", \"description\": \"Early detection that existing U.S. codes already reimburse. How accountable care organizations use Scanbo for scalable screening in value-based care.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"For U.S. ACOs\", \"item\": \"https://www.scanbo.com/who-we-serve/accountable-care-organizations/\"}]}]}";
