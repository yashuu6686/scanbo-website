export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 02
            </div>
            <h1>Real outcomes,
              <br />
              <span>in real care settings.</span>
            </h1>
            <p className="lede">How real organizations turn point-of-care intelligence into clinical and operational outcomes.</p>
            <div className="pstat">
              <span className="chip">1,100+ devices in India</span>
              <span className="chip">8M+ assessments</span>
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_stories.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">02 · CUSTOMER STORIES</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h16v11H8l-4 4z" />
                  <path d="M8 9h8M8 12h5" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Deployed across</div>
          <h2 style={{ marginTop: "14px" }}>In daily use.</h2>
          <div className="pchips">
            <span>Supraja Hospitals</span>
            <span>Rushcare Hospitals</span>
            <span>WWC Clinics — DIMBHA · Pune</span>
            <span>SGPGI MS · Neurology</span>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Featured stories</div>
          <h2 style={{ marginTop: "14px" }}>Three deployments, three outcomes.</h2>
          <div className="stories2">
            <div className="story2">
              <div>
                <div className="shead">
                  <img className="slog" src="/assets/logo_supraja.png" alt="Supraja Hospitals" width={120} height={40} />
                  <div>
                    <h4>Supraja Hospitals</h4>
                    <div className="splace">Multispecialty hospital · Hyderabad, India</div>
                  </div>
                </div>
                <span className="stag">Vitals Intelligence · Workflow</span>
                <h3>OPD and IPD documentation time reduced across a multispecialty hospital deployment.</h3>
                <p>Scanbo® D8 captures eight vital parameters in minutes and pushes data directly into the EMR. Supraja eliminated manual transcription across OPD and IPD, and the time recovered goes back to patient care.
                </p>
                <div className="pmeta">Live deployment · Scanbo® D8 + EMR</div>
              </div>
              <div className="sstats">
                <div>
                  <b>8</b>
                  <span>parameters per reading</span>
                  <em>Captured in minutes</em>
                </div>
                <div>
                  <b>Zero</b>
                  <span>manual transcription</span>
                  <em>Device to EMR, automatic</em>
                </div>
              </div>
            </div>
            <div className="story2">
              <div>
                <div className="shead">
                  <img className="slog" src="/assets/logo_dimbha.png" alt="DIMBHA — WWC Clinics" width={120} height={40} />
                  <div>
                    <h4>WWC Clinics — DIMBHA</h4>
                    <div className="splace">Diabetes reversal clinics · Pune, India</div>
                  </div>
                </div>
                <span className="stag">Vitals · Metabolic · Workflow · TeleCall</span>
                <h3>50 devices unified across a diabetes reversal network, with remote patient monitoring built in.</h3>
                <p>The network deployed Scanbo® D8, Smart Scale and EMR across its chronic care clinics. Video consultation and secure messaging extended clinical reach: patients receive continuous monitoring without returning to the clinic for every check-in.
                </p>
                <div className="pmeta">Live deployment · Full platform</div>
              </div>
              <div className="sstats">
                <div>
                  <b>50</b>
                  <span>devices deployed</span>
                  <em>Single connected system</em>
                </div>
                <div>
                  <b>3 layers</b>
                  <span>platform intelligence</span>
                  <em>D8 + Smart Scale + EMR</em>
                </div>
              </div>
            </div>
            <div className="story2">
              <div>
                <div className="shead">
                  <div className="sbadge sbadge-sgpgi" aria-hidden="true">
                    <b>SGPGI MS</b>
                    <span>Neurology OPD</span>
                  </div>
                  <div>
                    <h4>Dr. Jogendra Kumar Bastia</h4>
                    <div className="splace">Consultant Neurologist, MD · SGPGI MS</div>
                  </div>
                </div>
                <span className="stag">Vitals Intelligence · Clinical Documentation</span>
                <h3>Instant point-of-consultation vitals with zero manual entry, improving clinical note quality in a neurology OPD.</h3>
                <p>In a high-volume neurology outpatient setting, Scanbo® D8 delivers reliable multiparameter vitals at the moment of consultation. Every reading is recorded instantly into the EMR, with no transcription lag and no manual errors.
                </p>
                <div className="pmeta">Live deployment · Scanbo® D8 + EMR</div>
              </div>
              <div className="sstats">
                <div>
                  <b>0</b>
                  <span>manual entry errors</span>
                  <em>Auto-push to EMR</em>
                </div>
                <div>
                  <b>Instant</b>
                  <span>capture to record</span>
                  <em>At the point of consultation</em>
                </div>
              </div>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            <div>
              <b>1,100+</b>
              <span>devices operating in India</span>
            </div>
            <div>
              <b>8M+</b>
              <span>assessments completed</span>
            </div>
            <div>
              <b>1.2M+</b>
              <span>AI ECG analyses</span>
            </div>
            <div>
              <b>1B+</b>
              <span>health signals captured</span>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">From the field</div>
          <h2 style={{ marginTop: "14px" }}>In their words.</h2>
          <div className="qwall">
            <div className="qw">
              <blockquote>“Measurably reduced documentation time across OPD and IPD. That time goes back to patient care.”</blockquote>
              <cite>Supraja Hospitals
                <span>Multispecialty hospital · Hyderabad</span>
              </cite>
            </div>
            <div className="qw">
              <blockquote>“The EMR integration means every reading is recorded instantly, with no manual entry and no errors. It has genuinely improved the quality of my clinical notes.”
              </blockquote>
              <cite>Dr. Jogendra Kumar Bastia
                <span>Consultant Neurologist, MD · SGPGI MS</span>
              </cite>
            </div>
            <div className="qw">
              <blockquote>“D8, Smart Scale and EMR work as one system. Patients get continuous monitoring without needing to visit every time.”</blockquote>
              <cite>Clinic partner CEO
                <span>Diabetes reversal network · Pune</span>
              </cite>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">All stories</div>
          <h2 style={{ marginTop: "14px" }}>Every deployment.</h2>
          <div className="slist">
            <div className="sl">
              <div className="k">Primary care · Hyderabad</div>
              <h4>Supraja Hospitals</h4>
              <p>OPD and IPD documentation time reduced. Manual entry eliminated across all wards.</p>
              <span>Scanbo® D8 + EMR</span>
            </div>
            <div className="sl">
              <div className="k">Chronic care · Pune</div>
              <h4>WWC Clinics — DIMBHA</h4>
              <p>50 devices, full platform. Remote monitoring extended clinical reach without additional visits.</p>
              <span>D8 + Smart Scale + EMR</span>
            </div>
            <div className="sl">
              <div className="k">Neurology OPD · India</div>
              <h4>SGPGI MS · Dr. Bastia</h4>
              <p>Point-of-consultation vitals with instant EMR push. Zero manual errors. Improved note quality.</p>
              <span>Scanbo® D8 + EMR</span>
            </div>
            <div className="sl">
              <div className="k">Multispecialty · Hyderabad</div>
              <h4>Rushcare Hospitals</h4>
              <p>Documentation delays reduced. Clinical data flows from device to record without manual entry.</p>
              <span>Scanbo® D8 + EMR</span>
            </div>
            <div className="sl">
              <div className="k">Cardiology · India</div>
              <h4>Cardiac screening initiative</h4>
              <p>1.2M+ ECG AI analyses. Routine arrhythmia detection embedded in the point-of-care workflow.</p>
              <span>HridayTaal® Cardiac Agent</span>
            </div>
          </div>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">Insights</div>
          <h2 style={{ marginTop: "14px" }}>Evidence, stories and reimbursement.</h2>
          <div className="six">
            <a href="/insights/clinical-studies/">
              <i>01</i>
              <b>Clinical studies</b>
            </a>
            <a href="/insights/customer-stories/" className="on">
              <i>02</i>
              <b>Customer stories</b>
            </a>
            <a href="/insights/reimbursement-guide/">
              <i>03</i>
              <b>Reimbursement guide</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>What would Scanbo look like
            <br />in your care setting?
          </h2>
          <p className="lede">We work with health systems, chronic care providers, diagnostic programs and community health organizations.</p>
          <div className="ctas">
            <a className="btn btn-lime" href="/about/contact/">Book a platform walkthrough →</a>
            <a className="btn btn-ghost" href="/about/contact/#investors">Investor inquiries</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/customer-stories/#webpage\", \"url\": \"https://www.scanbo.com/insights/customer-stories/\", \"name\": \"Customer Stories | Scanbo\", \"description\": \"How hospitals, programs and clinics turn Scanbo's point-of-care intelligence into clinical and operational outcomes.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Customer Stories\", \"item\": \"https://www.scanbo.com/insights/customer-stories/\"}]}]}";
