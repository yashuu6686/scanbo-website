export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Insights</div>
          <h1>The evidence behind 
            <span>the platform.</span>
          </h1>
          <p className="lede">Published research, real deployments and U.S. reimbursement pathways: everything you need to evaluate Scanbo, in one place.</p>
        </div>
      </header>
      <div className="stats">
        <div className="wrap">
          <div className="stat">
            <b>1,100+</b>
            <span>devices in use</span>
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
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Explore insights</div>
          <h2 style={{ marginTop: "14px" }}>Three ways to evaluate Scanbo.</h2>
          <div className="plinks n3">
            <a className="plink" href="/insights/clinical-studies/">
              <i>01</i>
              <b>Clinical studies</b>
              <span>Clinical evidence and published research</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/insights/customer-stories/">
              <i>02</i>
              <b>Customer stories</b>
              <span>Real outcomes from clinical deployments</span>
              <em>Learn more →</em>
            </a>
            <a className="plink" href="/insights/reimbursement-guide/">
              <i>03</i>
              <b>Reimbursement guide</b>
              <span>Medicare CPT, RPM and SMBP pathways</span>
              <em>Learn more →</em>
            </a>
          </div>
        </div>
      </section>
      <section className="white" id="studies">
        <div className="wrap">
          <div className="eyebrow">Clinical studies</div>
          <h2 style={{ marginTop: "14px" }}>Validated at the point of care.</h2>
          <p className="lede pintro">Peer-reviewed research indexed on PubMed and ScienceDirect, and recognition from PATH and WHO-aligned global health programs.</p>
          <div className="evlist">
            <a className="evrow" href="https://pubmed.ncbi.nlm.nih.gov/40771298/" rel="noopener">
              <span className="evs">PubMed · 2025</span>
              <b>BP and blood glucose accuracy validated in an urban field setting</b>
              <em>Read on PubMed →</em>
            </a>
            <a className="evrow" href="https://www.sciencedirect.com/science/article/pii/S2514664525000505" rel="noopener">
              <span className="evs">ScienceDirect · 2025</span>
              <b>Clinical performance across diverse patient populations</b>
              <em>Read the study →</em>
            </a>
            <a className="evrow" href="https://www.semanticscholar.org/paper/Evaluation-of-the-Bluetooth-enabled-Scanbo%C2%AE-device-A-Karthikeyan-Narayan/1acc53abce4c61e83b5816c53301e27d62c608e0" rel="noopener">
              <span className="evs">Semantic Scholar · 2025</span>
              <b>Indexed across global academic research databases</b>
              <em>Read the study →</em>
            </a>
            <a className="evrow" href="https://www.path.org/who-we-are/programs/diagnostics/advancing-next-generation-phc-tools-ai-and-smartphone-sensors/" rel="noopener">
              <span className="evs">PATH · 2024</span>
              <b>Featured by PATH in next-generation primary care diagnostics</b>
              <em>View on PATH →</em>
            </a>
            <a className="evrow" href="https://media.path.org/documents/Innovations_for_Primary_Health_Care.pdf" rel="noopener">
              <span className="evs">PATH report · 2024</span>
              <b>PATH: Innovations for Primary Health Care</b>
              <em>Download the PDF →</em>
            </a>
          </div>
          <a className="evmore" href="/insights/clinical-studies/">All clinical studies →</a>
        </div>
      </section>
      <section className="light" id="stories">
        <div className="wrap">
          <div className="eyebrow">Customer stories</div>
          <h2 style={{ marginTop: "14px" }}>In their words.</h2>
          <div className="stories">
            <div className="story dark">
              <div className="res">Zero diagnostic lag.</div>
              <div>
                <blockquote>“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”</blockquote>
                <cite>Supraja Hospitals · Rushcare Hospitals 
                  <span>· Multispecialty networks, Hyderabad</span>
                </cite>
              </div>
            </div>
            <div className="story">
              <div className="res">4,000 hours recovered.</div>
              <div>
                <blockquote>“Documentation time is gone. That time is back with our doctors.”</blockquote>
                <cite>Clinic partner CEO 
                  <span>· Diabetes reversal network across 50 devices, Pune</span>
                </cite>
              </div>
            </div>
            <div className="story">
              <div className="res">Instant. No errors.</div>
              <div>
                <blockquote>“Vitals at the point of consultation, already in the EMR before I finish the examination.”</blockquote>
                <cite>Dr. Jogendra Kumar Bastia, MD 
                  <span>· Consultant Neurologist</span>
                </cite>
              </div>
            </div>
          </div>
          <a className="evmore" href="/insights/customer-stories/">All customer stories →</a>
        </div>
      </section>
      <section className="white" id="reimbursement">
        <div className="wrap">
          <div className="eyebrow">Reimbursement guide</div>
          <h2 style={{ marginTop: "14px" }}>Built for existing U.S. reimbursement.</h2>
          <p className="lede pintro">Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. No new CPT code required.</p>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            <div>
              <b>10</b>
              <span>established CPT codes across SMBP, RPM and ECG</span>
            </div>
            <div>
              <b>~$1,208</b>
              <span>core RPM revenue per patient, per year</span>
            </div>
            <div>
              <b>2</b>
              <span>U.S. ACO pilots completed: Florida and New York</span>
            </div>
          </div>
          <div className="codes">
            <div className="code">
              <b>SMBP · Scanbo® D8</b>
              <h4>99473 · 99474</h4>
              <p>Self-measured blood pressure setup, education and review.</p>
            </div>
            <div className="code">
              <b>RPM · D8 and Smart Scale</b>
              <h4>99453 · 99454 · 99457 · 99458</h4>
              <p>Device setup, monthly supply and clinical management time.</p>
            </div>
            <div className="code">
              <b>ECG · D8 + HridayTaal®</b>
              <h4>93040 · 93041 · 93042</h4>
              <p>Rhythm ECG tracing, interpretation and report.</p>
            </div>
          </div>
          <p className="fine2">Based on 2026 CMS national average non-facility rates. Subject to FDA clearance and payer coverage; for orientation, not billing advice.</p>
          <a className="evmore" href="/insights/reimbursement-guide/">Read the reimbursement guide →</a>
        </div>
      </section>
      <section id="burden" className="light">
        <div className="wrap">
          <div className="eyebrow">The global burden</div>
          <h2 style={{ marginTop: "14px" }}>A global problem, growing fastest where labs are scarce.</h2>
          <div className="burden3">
            <div className="bt">
              <b>74%</b>
              <span>of deaths worldwide are from chronic disease</span>
            </div>
            <div className="bt">
              <b>589M</b>
              <span>adults living with diabetes, 3 in 4 in low- and middle-income countries</span>
            </div>
            <div className="bt hi">
              <b>~4 in 10</b>
              <span>don't know they have it: 252M people undiagnosed</span>
            </div>
          </div>
          <p className="src">Sources: World Health Organization, noncommunicable diseases fact sheet; IDF Diabetes Atlas, 11th edition (2025).</p>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">Where Scanbo works today</div>
          <h2 style={{ marginTop: "14px" }}>Wherever care happens.</h2>
          <div className="pchips">
            <span>Hospitals</span>
            <span>Multispecialty clinics</span>
            <span>Community health programs</span>
            <span>Chronic-disease networks</span>
            <span>Public health programs</span>
            <span>U.S. ACO pilots</span>
          </div>
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/#webpage\", \"url\": \"https://www.scanbo.com/insights/\", \"name\": \"Insights | Evidence, Stories and Reimbursement | Scanbo\", \"description\": \"Published research, real deployments and U.S. reimbursement pathways: the evidence behind the Scanbo platform, in one place.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}]}]}";
