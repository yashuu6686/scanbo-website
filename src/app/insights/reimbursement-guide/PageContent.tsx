export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 03
            </div>
            <h1>Built for existing
              <br />
              <span>U.S. reimbursement.</span>
            </h1>
            <p className="lede">Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. Deploy using established pathways, with no new code required.
            </p>
            <div className="pstat">
              <span className="chip">No new CPT code required</span>
              <span className="chip">SMBP · RPM · ECG pathways</span>
              <span className="chip">Strong fit for ACOs</span>
            </div>
          </div>
          <div className="part">
            <div className="artcard uiwrap">
              <span className="bign">03 · REIMBURSEMENT GUIDE</span>
              <div className="ui">
                <div className="uh">
                  <b>2026 Medicare rates</b>
                  <em className="ok">No new code</em>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99453</i>RPM setup
                  </span>
                  <b>$22.00</b>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99454</i>Device supply · monthly
                  </span>
                  <b>$47.06</b>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99457</i>RPM management · monthly
                  </span>
                  <b>$51.77</b>
                </div>
                <div className="ur tot">
                  <span>Core RPM per patient, per year</span>
                  <b>~$1,208</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Best-fit code pathways</div>
          <h2 style={{ marginTop: "14px" }}>Two products. Established codes.</h2>
          <p className="lede pintro">CMS already recognizes weight, blood pressure, pulse oximetry and respiratory rate as billable RPM parameters: the exact parameters Scanbo® captures. Providers deploy Scanbo® inside billing frameworks they already use.
          </p>
          <div className="specs">
            <div className="spec">
              <h4>Scanbo® D8 · BP, cardiometabolic and rhythm monitoring</h4>
              <dl>
                <div className="row">
                  <dt>SMBP</dt>
                  <dd>99473 · 99474</dd>
                </div>
                <div className="row">
                  <dt>RPM</dt>
                  <dd>99453 · 99454 · 99457 · 99458</dd>
                </div>
                <div className="row">
                  <dt>Physician review</dt>
                  <dd>99091</dd>
                </div>
                <div className="row">
                  <dt>Rhythm ECG</dt>
                  <dd>93040 · 93041 · 93042</dd>
                </div>
              </dl>
            </div>
            <div className="spec">
              <h4>Scanbo® Smart Scale · connected weight monitoring</h4>
              <dl>
                <div className="row">
                  <dt>RPM</dt>
                  <dd>99453 · 99454 · 99457 · 99458</dd>
                </div>
                <div className="row">
                  <dt>Physician review</dt>
                  <dd>99091</dd>
                </div>
                <div className="row">
                  <dt>Why it fits</dt>
                  <dd>CMS materials specifically cite weight as a remote physiologic monitoring parameter</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="pfoot">D8 has the broadest reimbursement story of the two; Smart Scale is a clean RPM-first entry point.</p>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">2026 Medicare reimbursement rates</div>
          <h2 style={{ marginTop: "14px" }}>What each code pays.</h2>
          <p className="lede pintro">National average non-facility rates · Source: CMS Physician Fee Schedule · Effective January 1, 2026</p>
          <div className="rates">
            <div className="rgrp">
              <h4>Step 1 · SMBP: self-measured blood pressure · Scanbo® D8</h4>
              <div className="rrow">
                <b>CPT 99473</b>
                <span>SMBP device setup and patient education, one-time per device</span>
                <em>One-time</em>
                <strong>$11.90</strong>
              </div>
              <div className="rrow">
                <b>CPT 99474</b>
                <span>SMBP readings review and treatment management, min. 12 readings/month</span>
                <em>Monthly</em>
                <strong>~$14.46</strong>
              </div>
            </div>
            <div className="rgrp">
              <h4>Step 2 · RPM: remote physiologic monitoring · Scanbo® D8 and Smart Scale</h4>
              <div className="rrow">
                <b>CPT 99453</b>
                <span>RPM device setup and patient education, one-time per device</span>
                <em>One-time</em>
                <strong>$22.00</strong>
              </div>
              <div className="rrow">
                <b>CPT 99454</b>
                <span>Device supply, data collection and transmission, min. 16 days/month</span>
                <em>Monthly</em>
                <strong>$47.06</strong>
              </div>
              <div className="rrow">
                <b>CPT 99457</b>
                <span>RPM clinical management, first 20 min/month, live interaction required</span>
                <em>Monthly</em>
                <strong>$51.77</strong>
              </div>
              <div className="rrow">
                <b>CPT 99458</b>
                <span>RPM add-on, each additional 20 min/month, up to 2× per month</span>
                <em>Monthly</em>
                <strong>$41.00</strong>
              </div>
              <div className="rrow">
                <b>CPT 99091</b>
                <span>Physician data review and interpretation, 30 min/month</span>
                <em>Monthly</em>
                <strong>$38.21</strong>
              </div>
            </div>
            <div className="rgrp">
              <h4>Step 3 · ECG: rhythm ECG billing pathways · Scanbo® D8 + HridayTaal®</h4>
              <div className="rrow">
                <b>CPT 93040</b>
                <span>Rhythm ECG with interpretation and report</span>
                <em>Per use</em>
                <strong>~$18.00</strong>
              </div>
              <div className="rrow">
                <b>CPT 93041</b>
                <span>Rhythm ECG tracing only, without interpretation</span>
                <em>Per use</em>
                <strong>~$25.00</strong>
              </div>
              <div className="rrow">
                <b>CPT 93042</b>
                <span>Rhythm ECG interpretation and report only</span>
                <em>Per use</em>
                <strong>~$30.00</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Revenue model</div>
          <h2 style={{ marginTop: "14px" }}>What an ACO can bill.</h2>
          <p className="lede pintro">Illustrative revenue per year, based on 2026 CMS national average non-facility rates. Key billing rule: RPM codes bill once per patient per 30-day period, regardless of device count, so D8 and Smart Scale on the same patient are one RPM billing set. The figures below model separate patient cohorts per product.
          </p>
          <div className="specs">
            <div className="spec">
              <h4>Scanbo® D8 · per patient, per year</h4>
              <dl>
                <div className="row">
                  <dt>99453 · RPM setup</dt>
                  <dd>$22.00 × 1</dd>
                </div>
                <div className="row">
                  <dt>99454 · Device supply</dt>
                  <dd>$47.06 × 12 = $564.72</dd>
                </div>
                <div className="row">
                  <dt>99457 · RPM management</dt>
                  <dd>$51.77 × 12 = $621.24</dd>
                </div>
                <div className="row">
                  <dt>Core RPM per patient / year</dt>
                  <dd>~$1,208</dd>
                </div>
                <div className="row">
                  <dt>Optional</dt>
                  <dd>99458 ($492/yr) · 99091 ($458/yr) · SMBP codes · ECG adjuncts</dd>
                </div>
              </dl>
            </div>
            <div className="spec">
              <h4>Scanbo® Smart Scale · per patient, per year</h4>
              <dl>
                <div className="row">
                  <dt>99453 · RPM setup</dt>
                  <dd>$22.00 × 1</dd>
                </div>
                <div className="row">
                  <dt>99454 · Device supply</dt>
                  <dd>$47.06 × 12 = $564.72</dd>
                </div>
                <div className="row">
                  <dt>99457 · RPM management</dt>
                  <dd>$51.77 × 12 = $621.24</dd>
                </div>
                <div className="row">
                  <dt>Core RPM per patient / year</dt>
                  <dd>~$1,208</dd>
                </div>
                <div className="row">
                  <dt>Optional</dt>
                  <dd>99458 ($492/yr) · 99091 ($458/yr)</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            <div>
              <b>~$121k</b>
              <span>D8 · 100 patients · Year 1 incl. setup</span>
            </div>
            <div>
              <b>~$121k</b>
              <span>Smart Scale · 100 patients · Year 1 incl. setup</span>
            </div>
            <div>
              <b>~$242k</b>
              <span>Both · 200 patients · Year 1 combined</span>
            </div>
            <div>
              <b>~$238k/yr</b>
              <span>Year 2+ recurring · 200 patients</span>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>About these figures</b>
            <p>Based on 2026 Medicare national average non-facility rates. Core RPM codes only (99453, 99454, 99457); RPM billed once per patient per 30-day period regardless of the number of devices. Excludes 99458, 99091, SMBP codes and ECG adjuncts. Rates vary by region. Subject to FDA clearance and payer coverage; for orientation, not billing advice.
            </p>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Reimbursable products</div>
          <h2 style={{ marginTop: "14px" }}>The layers that bill.</h2>
          <div className="plinks n3">
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
              <b>HridayTaal®</b>
              <span>AI that reads every ECG in real time</span>
              <em>Learn more →</em>
            </a>
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
            <a href="/insights/customer-stories/">
              <i>02</i>
              <b>Customer stories</b>
            </a>
            <a href="/insights/reimbursement-guide/" className="on">
              <i>03</i>
              <b>Reimbursement guide</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Ready to deploy Scanbo
            <br />in your ACO or clinic?
          </h2>
          <p className="lede">Talk to our U.S. healthcare team.</p>
          <div className="ctas">
            <a className="btn btn-lime" href="/about/contact/">Book a platform walkthrough →</a>
            <a className="btn btn-ghost" href="/about/contact/#investors">Investor inquiries</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/reimbursement-guide/#webpage\", \"url\": \"https://www.scanbo.com/insights/reimbursement-guide/\", \"name\": \"RPM and SMBP Reimbursement Guide | Scanbo\", \"description\": \"Scanbo® D8 and Smart Scale fit existing Medicare SMBP and RPM billing frameworks. A guide to the codes and pathways, with no new code required.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"RPM and SMBP Reimbursement Guide\", \"item\": \"https://www.scanbo.com/insights/reimbursement-guide/\"}]}]}";
