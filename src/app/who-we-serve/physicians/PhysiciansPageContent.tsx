import { PlatformCtas } from "@/components/common/Ctas";

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
              <span className="chip">AI decision support</span>
              <span className="chip">Any specialty</span>
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
            <div className="pcard">
              <div className="k">Triage support</div>
              <h4>Rhythm insight at the point of assessment.</h4>
              <p>HridayTaal® returns structured rhythm output with each ECG, so you can triage, escalate or continue monitoring without waiting for specialist review.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Documentation</div>
              <h4>A note within 60 seconds.</h4>
              <p>Ambient listens passively and structures the conversation into Subjective, Objective, Assessment and Plan, ready to review the moment the session ends.
              </p>
            </div>
            <div className="pcard">
              <div className="k">The record</div>
              <h4>Vitals already in the EMR.</h4>
              <p>Eight D8 measurements and every interpretation land in the same FHIR R5 record, visible over time across visits.</p>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>3 hrs</b>
              <span>saved per clinician, every day</span>
            </div>
            <div>
              <b>&lt;60s</b>
              <span>to the first draft note</span>
            </div>
            <div>
              <b>1M+</b>
              <span>ECG AI analyses completed</span>
            </div>
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
            <a className="plink" href="/platform/ambient-documentation/">
              <i>04</i>
              <b>Ambient Documentation</b>
              <span>Clinic-ready notes the moment the visit ends</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/rxshield/">
              <i>05</i>
              <b>RxShield</b>
              <span>Drug interaction evidence you can defend</span>
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
