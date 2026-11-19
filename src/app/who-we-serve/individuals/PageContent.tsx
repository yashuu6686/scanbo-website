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
              <span className="chip">Scanbo® app</span>
              <span className="chip">Patient data is never sold</span>
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
            <div className="pcard">
              <div className="k">At home</div>
              <h4>Between-visit data that matters.</h4>
              <p>Measure with Scanbo® Smart Scale at home. Data flows automatically into the clinical record, so your clinician sees trends between visits.</p>
            </div>
            <div className="pcard">
              <div className="k">In the app</div>
              <h4>Your results, in one place.</h4>
              <p>Readings appear in the Scanbo® app, with automatic trend tracking over time. The scale recognizes up to eight users.</p>
            </div>
            <div className="pcard">
              <div className="k">Stay in touch</div>
              <h4>Consultations from any device.</h4>
              <p>Audio and video TeleCall and secure chat connect you with your care team, with no app download required for calls.</p>
            </div>
            <div className="pcard">
              <div className="k">Your data</div>
              <h4>Patient data is never sold.</h4>
              <p>Every reading is stored securely in a HIPAA-compliant record, with AES encryption.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Built on</div>
          <h2 style={{ marginTop: "14px" }}>The layers patients use.</h2>
          <div className="plinks n3">
            <a className="plink" href="/platform/smart-scale/">
              <i>03</i>
              <b>Scanbo® Smart Scale</b>
              <span>AI Body Score and 40+ metabolic indicators</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/scanbo-ehr/">
              <i>06</i>
              <b>Scanbo® EMR</b>
              <span>The operational hub for connected care</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/platform/scanbo-d8/">
              <i>01</i>
              <b>Scanbo® D8</b>
              <span>Eight measurements in under five minutes</span>
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
          <div className="ctas">
            <a className="btn btn-lime" href="/about/contact/">Book a platform walkthrough →</a>
            <a className="btn btn-ghost" href="/about/contact/#investors">Investor inquiries</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/individuals/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/individuals/\", \"name\": \"Health Monitoring Between Visits | Scanbo\", \"description\": \"Measure at home, see your results in the Scanbo® app and stay connected to your care team, with readings flowing into the record they use.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Health Monitoring Between Visits\", \"item\": \"https://www.scanbo.com/who-we-serve/individuals/\"}]}]}";
