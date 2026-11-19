export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Whom We Serve</div>
          <h1>One device behind 
            <span>every door into healthcare.</span>
          </h1>
          <p className="lede">Whoever delivers the care, Scanbo brings the lab to the patient and the result to the record.</p>
        </div>
      </header>
      <section className="tight" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="aud">
            <div className="acard" id="aud-hospitals-clinics">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 8h6M12 5v6M8 21v-4h8v4" />
                </svg>
              </div>
              <h3>Hospitals &amp; clinics</h3>
              <p className="need">Triage still means several devices and manual data entry.</p>
              <ul>
                <li>Eight measurements in one workflow</li>
                <li>Results straight into the EMR</li>
                <li>Documentation time handed back to clinicians</li>
              </ul>
              <a className="amore" href="/who-we-serve/hospitals-clinics/">Learn more →</a>
            </div>
            <div className="acard" id="aud-physicians">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M5 3v5a5 5 0 0 0 10 0V3" />
                  <path d="M10 13v2a4 4 0 0 0 8 0v-2" />
                  <circle cx="18" cy="10" r="2.2" />
                </svg>
              </div>
              <h3>Physicians</h3>
              <p className="need">Diagnosis and documentation compete for the same minutes.</p>
              <ul>
                <li>Rhythm insight with every ECG</li>
                <li>Notes ready within 60 seconds</li>
                <li>Vitals already in the record</li>
              </ul>
              <a className="amore" href="/who-we-serve/physicians/">Learn more →</a>
            </div>
            <div className="acard" id="aud-pharmacists">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
                  <path d="M9.2 9.2l5.6 5.6" />
                </svg>
              </div>
              <h3>Pharmacists</h3>
              <p className="need">Prescribing safety depends on evidence you can trace.</p>
              <ul>
                <li>Interaction checks in under 2 seconds</li>
                <li>Every finding linked to its source</li>
                <li>Screening at the pharmacy counter</li>
              </ul>
              <a className="amore" href="/who-we-serve/pharmacists/">Learn more →</a>
            </div>
            <div className="acard" id="aud-community-health-workers">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <h3>Community health workers</h3>
              <p className="need">The people closest to patients have the fewest diagnostic tools.</p>
              <ul>
                <li>Portable and easy to use</li>
                <li>No lab, specialist or cold chain</li>
                <li>Results the clinician can trust</li>
              </ul>
              <a className="amore" href="/who-we-serve/community-health-workers/">Learn more →</a>
            </div>
            <div className="acard" id="aud-individuals">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="7" y="2" width="10" height="20" rx="2.5" />
                  <path d="M11 18h2" />
                  <path d="M9.5 10.5l1.5 1.5 3.5-3.5" />
                </svg>
              </div>
              <h3>Individuals</h3>
              <p className="need">Care happens between visits, too.</p>
              <ul>
                <li>Measure at home with Smart Scale</li>
                <li>Results in the Scanbo app</li>
                <li>TeleCall and secure chat with the care team</li>
              </ul>
              <a className="amore" href="/who-we-serve/individuals/">Learn more →</a>
            </div>
            <div className="acard" id="aud-employers-insurers">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                </svg>
              </div>
              <h3>Employers &amp; insurers</h3>
              <p className="need">Late detection drives avoidable claims and lost workdays.</p>
              <ul>
                <li>Workplace and member screening</li>
                <li>Earlier detection of chronic disease</li>
                <li>Data for prevention and underwriting</li>
              </ul>
            </div>
            <div className="acard" id="aud-us-acos">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l3-8 4 16 3-8h4" />
                </svg>
              </div>
              <h3>U.S. ACOs</h3>
              <p className="need">Value-based care needs early detection that existing codes already reimburse.</p>
              <ul>
                <li>Remote monitoring on established codes</li>
                <li>AI flags high-risk patients earlier</li>
                <li>Pilots completed in Florida and New York</li>
              </ul>
              <a className="amore" href="/who-we-serve/accountable-care-organizations/">Learn more →</a>
            </div>
          </div>
        </div>
      </section>
      <section id="us" className="light">
        <div className="wrap">
          <div className="eyebrow">United States</div>
          <h2 style={{ marginTop: "14px", maxWidth: "900px" }}>Built for existing U.S. reimbursement. No new CPT code required.</h2>
          <p className="lede" style={{ marginTop: "16px" }}>Scanbo D8 and Smart Scale fit established remote patient monitoring (RPM) and self-measured blood pressure (SMBP) pathways, a strong fit for ACOs and value-based care.
          </p>
          <div className="codes">
            <div className="code">
              <b>RPM setup and supply</b>
              <h4>99453 · 99454</h4>
              <p>Device setup, patient education and monthly device supply.</p>
            </div>
            <div className="code">
              <b>RPM management</b>
              <h4>99457 · 99458</h4>
              <p>Clinical staff time reviewing data and managing care.</p>
            </div>
            <div className="code">
              <b>Blood pressure</b>
              <h4>99473 · 99474</h4>
              <p>Self-measured blood pressure education and review.</p>
            </div>
          </div>
          <div className="facts" style={{ marginTop: "26px" }}>
            <span>2 ACO pilots completed: Florida and New York</span>
            <span>FDA 510(k) filing targeted Q1 2027</span>
          </div>
          <p className="fine2">Subject to FDA clearance and payer coverage. Codes shown are for orientation, not billing advice.</p>
        </div>
      </section>
      <section className="cta">
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/who-we-serve/#webpage\", \"url\": \"https://www.scanbo.com/who-we-serve/\", \"name\": \"Whom We Serve | Scanbo\", \"description\": \"Hospitals, physicians, pharmacists, community health workers, individuals and U.S. ACOs: how Scanbo brings the lab to the patient and the result to the record.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Whom We Serve\", \"item\": \"https://www.scanbo.com/who-we-serve/\"}]}]}";
