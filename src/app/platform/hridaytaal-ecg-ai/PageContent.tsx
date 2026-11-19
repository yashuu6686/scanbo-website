export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 02 · Cardiac intelligence
            </div>
            <h1>Cardiac intelligence,
              <br />
              <span>at the point of care.</span>
            </h1>
            <p className="lede">The deployed Cardiac Intelligence layer. The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.
            </p>
            <div className="pstat">
              <span className="live">Live</span>
              <span className="chip">1M+ ECG analyses</span>
              <span className="chip">CDSCO approved</span>
            </div>
            <div className="ctas">
              <a className="btn btn-lime" href="/about/contact/">Book a demo →</a>
              <a className="btn btn-ghost" href="/insights/clinical-studies/">Clinical evidence</a>
            </div>
          </div>
          <div className="part">
            <div className="artcard ro">
              <span className="bign">02 · CARDIAC INTELLIGENCE</span>
              <svg className="ecgbig" viewBox="0 0 400 64" preserveAspectRatio="none">
                <path d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" />
              </svg>
              <div className="readout">
                <div>
                  <i>RHYTHM</i>
                  <b>Sinus</b>
                </div>
                <div>
                  <i>HEART RATE</i>
                  <b>72 bpm</b>
                </div>
                <div>
                  <i>HRV</i>
                  <b>44 ms</b>
                </div>
                <div>
                  <i>AFIB</i>
                  <b>Not detected</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">The intelligence layer</div>
          <h2 style={{ marginTop: "14px" }}>Beyond ECG capture.
            <br />Structured cardiac insight.
          </h2>
          <p className="lede pintro">Standard point-of-care ECG tools display a trace. HridayTaal® goes further, applying AI to identify rhythm patterns, surface irregularities and return structured output that supports clinical decision making.
          </p>
          <div className="pcards">
            <div className="pcard">
              <div className="k">Signal interpretation</div>
              <h4>Raw signal in. Structured insight out.</h4>
              <p>HridayTaal® takes a raw single-lead ECG trace and returns clinically relevant rhythm interpretation, automatically, at the point of care.</p>
            </div>
            <div className="pcard">
              <div className="k">Point-of-care AI</div>
              <h4>Interpretation where the patient is.</h4>
              <p>No specialist required for initial rhythm assessment. HridayTaal® delivers AI interpretation at the front line: in clinics, pharmacies and community care settings.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Platform-embedded</div>
              <h4>Intelligence inside the care workflow.</h4>
              <p>Interpretation outputs connect directly into Scanbo® EMR. Every rhythm insight is documented, timestamped and visible over time alongside the patient record.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Deployed capabilities · available now</div>
          <h2 style={{ marginTop: "14px" }}>What HridayTaal®
            <br />identifies today.
          </h2>
          <p className="lede pintro">These capabilities are live in clinical deployment, running on every ECG captured through Scanbo® D8.</p>
          <div className="specs">
            <div className="spec">
              <h4>Rhythm & rate analysis</h4>
              <dl>
                <div className="row">
                  <dt>Predicted heart rate</dt>
                  <dd>AI-derived beats per minute from the ECG trace</dd>
                </div>
                <div className="row">
                  <dt>Heart-rate variability</dt>
                  <dd>Beat-to-beat variation as an autonomic nervous system signal</dd>
                </div>
                <div className="row">
                  <dt>Heart rhythm classification</dt>
                  <dd>Structured rhythm type identification (sinus, arrhythmia and more)</dd>
                </div>
                <div className="row">
                  <dt>Heart-rate type</dt>
                  <dd>Normal, bradycardia and tachycardia classification</dd>
                </div>
              </dl>
            </div>
            <div className="spec">
              <h4>Irregularity detection</h4>
              <dl>
                <div className="row">
                  <dt>Atrial fibrillation (AFib)</dt>
                  <dd>Detection and classification of AFib episodes</dd>
                </div>
                <div className="row">
                  <dt>Sinus arrhythmia</dt>
                  <dd>Respiratory-linked rhythm variation</dd>
                </div>
                <div className="row">
                  <dt>Missing heartbeats: count</dt>
                  <dd>Number of ectopic or absent beats in the trace</dd>
                </div>
                <div className="row">
                  <dt>Missing heartbeats: location</dt>
                  <dd>Position of absent beats within the recorded trace</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>1M+</b>
              <span>ECG AI analyses completed</span>
            </div>
            <div>
              <b>8</b>
              <span>rhythm and irregularity outputs</span>
            </div>
            <div>
              <b>Every</b>
              <span>D8 ECG analyzed automatically</span>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Clinical value</div>
          <h2 style={{ marginTop: "14px" }}>Faster insight.
            <br />More structured interpretation.
          </h2>
          <p className="lede pintro">A single-lead ECG at the point of care is only as useful as the interpretation behind it. HridayTaal® turns a raw trace into structured output, without needing a cardiologist at every location.
          </p>
          <div className="pcards n4">
            <div className="pcard">
              <div className="k">Triage support</div>
              <h4>Rhythm insight at the point of assessment.</h4>
              <p>Clinicians receive structured rhythm output with each ECG, so they can triage, escalate or continue monitoring without waiting for specialist review.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Longitudinal monitoring</div>
              <h4>Rhythm patterns across time.</h4>
              <p>Every interpretation is recorded in Scanbo® EMR, so trends emerge over multiple visits. Intermittent arrhythmias become visible. Progression becomes detectable.
              </p>
            </div>
            <div className="pcard">
              <div className="k">AFib screening</div>
              <h4>Population-level cardiac screening.</h4>
              <p>In high-volume primary care, AFib detection at the point of consultation has real population-health value. HridayTaal® makes routine ECG screening clinically useful.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Distributed care</div>
              <h4>Cardiology intelligence without a cardiologist.</h4>
              <p>Community health workers and primary care clinicians gain structured cardiac interpretation once available only in specialist settings.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Intelligence roadmap</div>
          <h2 style={{ marginTop: "14px" }}>The Analyst is expanding its scope.</h2>
          <p className="lede pintro">Cardiac Intelligence is expanding over time. Each generation of HridayTaal® adds deeper signal analysis — extending the rhythm insight available at the point of care.
          </p>
          <div className="rmap n3">
            <div className="rmap-card on">
              <div className="k">Currently deployed</div>
              <b className="rmap-title">Rhythm Intelligence</b>
              <span>A1.1 — Live</span>
              <ul>
                <li>Predicted heart rate</li>
                <li>Heart rate variability</li>
                <li>Rhythm classification</li>
                <li>Rate type (brady / tachy)</li>
                <li>AFib detection</li>
                <li>Sinus arrhythmia</li>
                <li>Missing beat count &amp; location</li>
              </ul>
            </div>
            <div className="rmap-card">
              <div className="k">Expanding intelligence</div>
              <b className="rmap-title">Interval &amp; Waveform Analysis</b>
              <span>A2 — In Development</span>
              <ul>
                <li>Heart interval irregularity analysis</li>
                <li>QRS waveform &amp; duration</li>
                <li>PR interval measurement</li>
                <li>QRSD classification</li>
                <li>QTc interval analysis</li>
                <li>Ventricular fibrillation</li>
                <li>Atrial flutter</li>
              </ul>
            </div>
            <div className="rmap-card">
              <div className="k">Research &amp; development</div>
              <b className="rmap-title">Beyond ECG Rhythm</b>
              <span>A3 — Pre-clinical R&amp;D</span>
              <ul>
                <li>Sleep apnea detection (R&amp;D)</li>
                <li>Non-invasive blood pressure (R&amp;D)</li>
              </ul>
              <p className="rmap-note">These capabilities are in active pre-clinical research and are not yet deployed or validated for clinical use.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="pint">
            <div>
              <div className="eyebrow">Platform integration</div>
              <h3>The intelligence layer
                <br />
                <span className="gradline">inside every D8 ECG.</span>
              </h3>
              <p>Every ECG captured by Scanbo® D8 is automatically analysed by HridayTaal®. Rhythm interpretation flows into Scanbo® EMR alongside vitals, body composition, and longitudinal patient data — giving clinicians a connected picture, not isolated readings.
              </p>
            </div>
            <a className="btn btn-soft" href="/platform/scanbo-d8/">See Scanbo® D8 →</a>
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>Clinical positioning</b>
            <p>HridayTaal® is a decision-support layer. It provides structured rhythm output to assist clinically trained professionals and does not replace physician judgment. Outputs are structured for clinical documentation and review: designed to augment, not automate, cardiac assessment.
            </p>
          </div>
        </div>
      </section>
      <section className="light tight">
        <div className="wrap">
          <div className="eyebrow">One platform</div>
          <h2 style={{ marginTop: "14px" }}>Six intelligence layers. One patient record.</h2>
          <div className="six">
            <a href="/platform/scanbo-d8/">
              <i>01</i>
              <b>Scanbo® D8</b>
            </a>
            <a href="/platform/hridaytaal-ecg-ai/" className="on">
              <i>02</i>
              <b>HridayTaal® Cardiac Agent</b>
            </a>
            <a href="/platform/smart-scale/">
              <i>03</i>
              <b>Scanbo® Smart Scale</b>
            </a>
            <a href="/platform/ambient-documentation/">
              <i>04</i>
              <b>Ambient Documentation</b>
            </a>
            <a href="/platform/rxshield/">
              <i>05</i>
              <b>RxShield</b>
            </a>
            <a href="/platform/scanbo-ehr/">
              <i>06</i>
              <b>Scanbo® EMR</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>See HridayTaal®
            <br />in your workflow.
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/#webpage\", \"url\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/\", \"name\": \"HridayTaal® Cardiac Agent | AI ECG Analysis | Scanbo\", \"description\": \"The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"HridayTaal® Cardiac Agent\", \"item\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/\"}]}]}";
