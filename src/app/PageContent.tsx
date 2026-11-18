export function PageContent() {
  return (
    <main id="main">
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">The point-of-care intelligence platform</div>
            <h1>Healthcare
              <br />
              <span>Starts Here.</span>
            </h1>
            <p className="lede">One connected platform: diagnostics, AI and clinical workflow at the point of care. Results in under five minutes, with no lab, no specialist and no cold chain.
            </p>
            <div className="ctas">
              <a className="btn btn-lime" href="/about/contact/">Book a platform walkthrough →</a>
              <a className="btn btn-ghost" href="/platform/">Explore the platform</a>
            </div>
            <p className="status">
              <em>
                <i></i>CDSCO approved in India
              </em>
              <span>·</span>
              <em>FDA 510(k) filing targeted Q2 2027</em>
            </p>
          </div>
          <div className="hero-art">
            <img className="ring" src="/assets/platform_ring.png" alt="The Scanbo platform: hardware, software, AI and clinical workflow in one" />
          </div>
        </div>
      </header>
      <div className="stats">
        <div className="wrap">
          <div className="stat">
            <b>1,100+</b>
            <span>devices operating in India</span>
          </div>
          <div className="stat">
            <b>8M+</b>
            <span>assessments completed</span>
          </div>
          <div className="stat">
            <b>1B+</b>
            <span>health signals captured</span>
          </div>
          <div className="stat">
            <b>1.2M+</b>
            <span>AI ECG analyses</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="wrap">
          <span className="lbl">In the field with</span>
          <span className="nm">Supraja Hospitals</span>
          <span className="nm">Rushcare Hospitals</span>
          <span className="nm">Diabetes reversal network, Pune</span>
          <span className="nm">U.S. ACO pilots, Florida &amp; New York</span>
        </div>
      </div>
      <section id="platform" className="light">
        <div className="wrap">
          <div className="eyebrow">The platform</div>
          <h2 style={{ marginTop: "14px" }}>Six intelligence layers.
            <br />One platform.
          </h2>
          <p className="lede" style={{ marginTop: "18px", maxWidth: "900px" }}>The device captures, the AI interprets, the record keeps it. All six layers share one FHIR R5 patient record.</p>
          <div className="duo">
            <div className="card lean">
              <div>
                <span className="tag">01 · Biomarkers 
                  <span className="live">Live</span>
                </span>
                <h3>
                  <a href="/platform/scanbo-d8/">Scanbo® D8</a>
                </h3>
                <p>Eight measurements at the point of care, including ECG and blood glucose, in under five minutes.</p>
              </div>
              <img loading="lazy" decoding="async" className="dev" src="/assets/device.png" alt="Scanbo D8 point-of-care device" />
            </div>
            <div className="card lean">
              <div>
                <span className="tag">02 · Cardiac AI 
                  <span className="live">Live</span>
                </span>
                <h3>
                  <a href="/platform/hridaytaal-ecg-ai/">HridayTaal®</a>
                </h3>
                <p>AI that reads every single-lead ECG in real time and flags the patients who need attention.</p>
              </div>
              <svg className="ecg ecg-live" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true">
                <g className="ecg-trace">
                  <path d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" />
                  <path d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" transform="translate(400 0)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="stack">
            <div className="scard">
              <div className="shead">
                <div className="sic">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 16a8 8 0 0 1 16 0z" />
                    <path d="M3 16h18v3H3z" />
                    <path d="M12 12l2-3" />
                  </svg>
                </div>
                <div>
                  <div className="snum">03 · Metabolic intelligence</div>
                  <h4>
                    <a href="/platform/smart-scale/">Scanbo® Smart Scale</a>
                  </h4>
                </div>
              </div>
              <p>Surfaces what mass conceals: visceral fat, skeletal muscle and 40+ metabolic indicators, captured directly into the FHIR R5 clinical record. 1M+ body scans recorded.
              </p>
              <div className="sstat">
                <span className="live">Deployed</span>
                <span>India</span>
              </div>
            </div>
            <div className="scard">
              <div className="shead">
                <div className="sic">
                  <svg viewBox="0 0 24 24">
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
                  </svg>
                </div>
                <div>
                  <div className="snum">04 · Summarization intelligence</div>
                  <h4>
                    <a href="/platform/ambient-documentation/">Ambient Documentation Agent</a>
                  </h4>
                </div>
              </div>
              <p>Autonomous conversion of clinical encounters into structured documentation. Zero transcription overhead, so clinicians focus on the patient.
              </p>
              <div className="sstat">
                <a className="try" href="/about/contact/">Try it →</a>
              </div>
            </div>
            <div className="scard">
              <div className="shead">
                <div className="sic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                    <path d="M8.5 12l2.5 2.5 4.5-5" />
                  </svg>
                </div>
                <div>
                  <div className="snum">05 · Defensive intelligence</div>
                  <h4>
                    <a href="/platform/rxshield/">RxShield Safety Agent</a>
                  </h4>
                </div>
              </div>
              <p>Real-time drug interaction analysis and prescribing safety. Catches contraindications before they reach the patient, at the point of prescribing.
              </p>
              <div className="sstat">
                <a className="try" href="/about/contact/">Try it →</a>
              </div>
            </div>
            <div className="scard">
              <div className="shead">
                <div className="sic">
                  <svg viewBox="0 0 24 24">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </div>
                <div>
                  <div className="snum">06 · Workflow intelligence</div>
                  <h4>
                    <a href="/platform/scanbo-emr/">Scanbo® EMR</a>
                  </h4>
                </div>
              </div>
              <p>The FHIR R5-native command center for clinical operations: scheduling, telehealth, queuing and interoperability, all connected to the D8 signal layer and the HridayTaal Cardiac Agent.
              </p>
              <div className="sstat">
                <span className="live">Deployed</span>
              </div>
            </div>
          </div>
          <div className="fhirrow">
            <div className="fhirpill">FHIR R5 native · The connective layer across all six</div>
            <a className="go" href="/platform/">Explore the platform →</a>
          </div>
        </div>
      </section>
      <section id="moat" className="white">
        <div className="wrap">
          <div className="eyebrow">The data moat</div>
          <h2 style={{ marginTop: "14px" }}>While others aggregate data, we create it.</h2>
          <p className="lede" style={{ marginTop: "18px", maxWidth: "980px" }}>Our proprietary signal layer gives AI a clinical foundation that is hard to replicate. Every signal comes directly from Scanbo hardware, in the room, at the moment of care.
          </p>
          <div className="moat">
            <div className="mbig">
              <h3 className="grad">Every device compounds the moat.</h3>
              <p>Each D8 deployed is a data acquisition node feeding proprietary health signals into the intelligence stack. This signal layer can’t be bought or licensed. It is built by owning the hardware in the room, at the moment of care.
              </p>
            </div>
            <div className="mstats">
              <div className="mstat">
                <div className="mrow">
                  <b className="gnum">2M+</b>
                  <span>Signals added monthly</span>
                </div>
                <p>Every device in the field is a data acquisition node. The moat widens every month.</p>
              </div>
              <div className="mstat">
                <div className="mrow">
                  <b className="gnum">100%</b>
                  <span>Proprietary data</span>
                </div>
                <p>Not licensed, not aggregated, not scraped. Generated by Scanbo hardware at the point of care.</p>
              </div>
              <div className="mstat">
                <div className="mrow">
                  <b className="gnum">8</b>
                  <span>Measurements per visit</span>
                </div>
                <p>Every assessment adds eight clinical-grade readings to the patient record, from our own sensors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="serve" className="tight light">
        <div className="wrap">
          <div className="eyebrow">Who we serve</div>
          <h2 style={{ marginTop: "14px" }}>One device behind every door into healthcare.</h2>
          <div className="wtiles">
            <a className="wtile" href="/who-we-serve/#aud-public-health-programs">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
                </svg>
              </div>
              <b>Public health programs</b>
            </a>
            <a className="wtile" href="/who-we-serve/hospitals-clinics/">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 8h6M12 5v6M8 21v-4h8v4" />
                </svg>
              </div>
              <b>Hospitals &amp; clinics</b>
            </a>
            <a className="wtile" href="/who-we-serve/community-health-workers/">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <b>Community health workers</b>
            </a>
            <a className="wtile" href="/who-we-serve/#aud-employers-insurers">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                </svg>
              </div>
              <b>Employers &amp; insurers</b>
            </a>
            <a className="wtile" href="/who-we-serve/accountable-care-organizations/">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <b>U.S. ACOs</b>
            </a>
          </div>
          <a className="usband" href="/who-we-serve/#us">
            <span className="lbl">United States</span>
            <span>2 ACO pilots completed in Florida and New York</span>
            <span>No new CPT code required</span>
            <span>FDA 510(k) filing targeted Q2 2027</span>
            <span className="go">→</span>
          </a>
        </div>
      </section>
      <section id="proof" className="white">
        <div className="wrap">
          <div className="eyebrow">Outcomes that ship</div>
          <h2 style={{ marginTop: "14px" }}>Real customers. Real results.</h2>
          <div className="outs">
            <div className="obig">
              <p className="oq">“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”</p>
              <h3 className="grad ohead">Zero diagnostic lag.</h3>
              <p className="obody">Device to EMR in seconds. Every reading captured, interpreted and recorded at the point of consultation. No transcription. No delay. No errors.
              </p>
              <div className="ocite">
                <b>Supraja Hospitals · Rushcare Hospitals</b>
                <span>Multispecialty networks · Hyderabad, India</span>
              </div>
            </div>
            <div className="ocol">
              <div className="ocard">
                <p className="oq">“Documentation time is gone. That time is back with our doctors.”</p>
                <h3 className="ohead2">4,000 hours 
                  <span className="grad">recovered.</span>
                </h3>
                <p className="obody">Documentation time eliminated across 50 devices in a diabetes reversal network.</p>
                <div className="ocite">
                  <b>Clinic partner CEO</b>
                  <span>Diabetes reversal network · Pune, India</span>
                </div>
              </div>
              <div className="ocard">
                <p className="oq">“Vitals at the point of consultation, already in the EMR before I finish the examination.”</p>
                <h3 className="ohead2">Instant. 
                  <span className="grad">No errors.</span>
                </h3>
                <p className="obody">Point-of-consultation vitals with auto-push to the EMR. Clinical note quality measurably improved.</p>
                <div className="ocite">
                  <b>Dr. Jogendra Kumar Bastia, MD</b>
                  <span>Consultant Neurologist · SGPGI MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="trust paper">
        <div className="wrap">
          <div className="lbl">Quality, security and regulatory</div>
          <div className="certs">
            <span>CDSCO</span>
            <span>ISO 13485</span>
            <span>ISO 27001</span>
            <span>SOC 2 Type II</span>
            <span>MDSAP</span>
            <span>HIPAA</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
      <section className="white gap">
        <div className="wrap">
          <div className="gap-head solo">
            <div>
              <div className="eyebrow">The gap</div>
              <h2 style={{ marginTop: "14px" }}>The challenge is not demand. It's access.</h2>
              <p className="lede" style={{ marginTop: "20px" }}>Chronic disease now causes most deaths worldwide, and it is growing fastest where labs are hardest to reach. Every extra visit and every wait for a lab is a chance to lose a patient.
              </p>
            </div>
          </div>
          <div className="tcard">
            <div className="thead">
              <span>Time to a routine test result</span>
              <small>log scale</small>
            </div>
            <div className="trow">
              <div className="tl">
                <b>United States</b>
                <span>to release routine outpatient blood-test results</span>
              </div>
              <div className="tbar">
                <i style={{ width: "76.3%" }}></i>
              </div>
              <div className="tv">24–96+ hours</div>
            </div>
            <div className="trow">
              <div className="tl">
                <b>United Kingdom</b>
                <span>to report routine blood tests</span>
              </div>
              <div className="tbar">
                <i style={{ width: "73.4%" }}></i>
              </div>
              <div className="tv">~72 hours</div>
            </div>
            <div className="trow">
              <div className="tl">
                <b>Developing countries</b>
                <span>median to receive centralized-lab results</span>
              </div>
              <div className="tbar">
                <i style={{ width: "98.2%" }}></i>
              </div>
              <div className="tv">~35 days</div>
            </div>
            <div className="trow s">
              <div className="tl">
                <b>With Scanbo</b>
                <span>at the point of care, in the first visit</span>
              </div>
              <div className="tbar">
                <i style={{ width: "5.2%" }}></i>
              </div>
              <div className="tv">Under 5 minutes</div>
            </div>
          </div>
          <p className="quote">“In an age of AI, this should take minutes, not days.”
            <small>Ashissh Raichura, Founder &amp; CEO</small>
          </p>
          <p className="src">Sources: Flow Health and Sapio Sciences (2024); Oxford University Hospitals NHS (2024); Journal of the International AIDS Society (2021). More on the global burden of chronic disease on our 
            <a href="/insights/#burden">Evidence page</a>.
          </p>
        </div>
      </section>
      <section id="cta" className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Five minutes.
            <br />Eight measurements.
            <br />One connected record.
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"Organization\", \"@id\": \"https://www.scanbo.com/#organization\", \"name\": \"Scanbo\", \"legalName\": \"Scanbo Technologies Inc.\", \"url\": \"https://www.scanbo.com/\", \"logo\": \"https://www.scanbo.com/assets/logo-512.png\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"1048 165 Street\", \"addressLocality\": \"Surrey\", \"addressRegion\": \"BC\", \"postalCode\": \"V4A 9A2\", \"addressCountry\": \"CA\"}, \"sameAs\": [\"https://www.linkedin.com/company/scanbo/\"], \"contactPoint\": [{\"@type\": \"ContactPoint\", \"contactType\": \"customer support\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"areaServed\": [\"CA\", \"US\"]}, {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"partnerships@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"investor relations\", \"email\": \"ir@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"press\", \"email\": \"press@scanbo.com\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://www.scanbo.com/#website\", \"url\": \"https://www.scanbo.com/\", \"name\": \"Scanbo\", \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}, \"inLanguage\": \"en\"}, {\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/#webpage\", \"url\": \"https://www.scanbo.com/\", \"name\": \"Scanbo® | Point-of-Care Diagnostics and Clinical AI\", \"description\": \"Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}]}";
