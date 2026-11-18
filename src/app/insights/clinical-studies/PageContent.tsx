export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 01
            </div>
            <h1>Validated at the
              <br />
              <span>point of care.</span>
            </h1>
            <p className="lede">Five peer-reviewed studies confirm Scanbo®'s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect, and recognized by PATH and WHO-aligned global health programs.
            </p>
            <div className="pstat">
              <span className="chip">5 peer-reviewed studies</span>
              <span className="chip">PubMed · PMC · ScienceDirect</span>
              <span className="chip">PATH · WHO global health</span>
              <span className="chip">2024–2025</span>
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_cuff.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">01 · CLINICAL STUDIES</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h9l4 4v14H6z" />
                  <path d="M15 3v4h4" />
                  <path d="M9 13l2 2 4-4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Published research</div>
          <h2 style={{ marginTop: "14px" }}>The evidence, source by source.</h2>
          <div className="pubs">
            <div className="pub">
              <div className="psrc">PubMed · 2025</div>
              <div className="k">Primary validation study</div>
              <h4>BP and blood glucose accuracy validated in an urban field setting</h4>
              <p>Confirms Scanbo® D8 measures blood pressure and glucose to clinical standards in a low-resource urban deployment, with no lab and no specialist infrastructure.
              </p>
              <div className="pmeta">Karthikeyan, Narayan et al. · PMID 40771298</div>
              <a href="https://pubmed.ncbi.nlm.nih.gov/40771298/" rel="noopener">Read on PubMed →</a>
            </div>
            <div className="pub">
              <div className="psrc">ScienceDirect · 2025</div>
              <div className="k">Lancet-family journal publication</div>
              <h4>Clinical performance across diverse patient populations</h4>
              <p>Peer-reviewed publication in a Lancet-family digital health journal, examining outcomes across real healthcare environments.</p>
              <div className="pmeta">DOI: 10.1016/S2514-6645(25)00050-5</div>
              <a href="https://www.sciencedirect.com/science/article/pii/S2514664525000505" rel="noopener">Read the study →</a>
            </div>
            <div className="pub">
              <div className="psrc">Semantic Scholar · 2025</div>
              <div className="k">Research indexing · global discovery</div>
              <h4>Indexed across global academic research databases</h4>
              <p>The research is independently indexed, citable and discoverable across global academic platforms: a signal of reproducible, peer-traceable clinical science.
              </p>
              <div className="pmeta">Karthikeyan, Narayan et al.</div>
              <a href="https://www.semanticscholar.org/paper/Evaluation-of-the-Bluetooth-enabled-Scanbo%C2%AE-device-A-Karthikeyan-Narayan/1acc53abce4c61e83b5816c53301e27d62c608e0" rel="noopener">Read the study →</a>
            </div>
            <div className="pub">
              <div className="psrc">PATH · 2024</div>
              <div className="k">WHO-aligned program recognition</div>
              <h4>Featured by PATH in next-generation primary care diagnostics</h4>
              <p>PATH, a WHO-aligned global health organization, selected Scanbo® as a featured technology in its evaluation of AI-powered diagnostic tools for next-generation primary healthcare.
              </p>
              <div className="pmeta">PATH Diagnostics Program · Global health initiative</div>
              <a href="https://www.path.org/who-we-are/programs/diagnostics/advancing-next-generation-phc-tools-ai-and-smartphone-sensors/" rel="noopener">View on PATH →</a>
            </div>
            <div className="pub">
              <div className="psrc">PATH report · 2024</div>
              <div className="k">Investor and partner reference</div>
              <h4>PATH: Innovations for Primary Health Care</h4>
              <p>PATH's report on AI-powered diagnostic innovation in global primary care: a credible third-party reference for investors, health system partners and procurement leads.
              </p>
              <div className="pmeta">PATH · Innovations for Primary Health Care report</div>
              <a href="https://media.path.org/documents/Innovations_for_Primary_Health_Care.pdf" rel="noopener">Download the PDF →</a>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Validated products</div>
          <h2 style={{ marginTop: "14px" }}>The layers behind the evidence.</h2>
          <div className="plinks n2">
            <a className="plink" href="/platform/scanbo-d8/">
              <i>01</i>
              <b>Scanbo® D8</b>
              <span>Eight measurements in under five minutes</span>
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
            <a href="/insights/clinical-studies/" className="on">
              <i>01</i>
              <b>Clinical studies</b>
            </a>
            <a href="/insights/customer-stories/">
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
          <h2 style={{ marginTop: "14px" }}>See the evidence
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/clinical-studies/#webpage\", \"url\": \"https://www.scanbo.com/insights/clinical-studies/\", \"name\": \"Clinical Studies | Peer-Reviewed Evidence | Scanbo\", \"description\": \"Peer-reviewed studies of Scanbo®'s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect and recognized by PATH.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Clinical Studies\", \"item\": \"https://www.scanbo.com/insights/clinical-studies/\"}]}]}";
