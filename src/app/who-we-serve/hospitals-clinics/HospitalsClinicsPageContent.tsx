import { PlatformCtas } from "@/components/common/Ctas";

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
              <span className="chip">D8 CDSCO approved</span>
              <span className="chip">FHIR R5 native</span>
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
            <div className="pcard">
              <div className="k">Vital capture</div>
              <h4>OPD and ward-level vital capture.</h4>
              <p>Scanbo® D8 reduces documentation time, eliminates manual entry errors and feeds data directly into Scanbo® EMR. Already deployed in neurology, diabetes and general OPD settings.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Patient flow</div>
              <h4>Real-time queue and scheduling.</h4>
              <p>A live queue dashboard shows who is waiting, who is in consultation and what is delayed. Booking, rescheduling and waitlisting happen in the same platform.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Documentation</div>
              <h4>Notes without transcription.</h4>
              <p>The Ambient Documentation Agent turns the consultation into structured notes, so clinicians face the patient, not the keyboard.</p>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>750+</b>
              <span>devices deployed</span>
            </div>
            <div>
              <b>7M+</b>
              <span>vital tests completed</span>
            </div>
            <div>
              <b>&lt;5 min</b>
              <span>per full assessment</span>
            </div>
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
            <a className="plink" href="/platform/scanbo-ehr/">
              <i>06</i>
              <b>Scanbo® EMR</b>
              <span>The operational hub for connected care</span>
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
