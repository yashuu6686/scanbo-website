import { PlatformCtas } from "@/components/common/Ctas";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 05 · Defensive intelligence
            </div>
            <h1>Drug intelligence
              <br />
              <span>clinicians can defend.</span>
            </h1>
            <p className="lede">Check interactions, verify against sources, and defend every decision with a complete, auditable evidence trail. Built for U.S. and Canadian healthcare professionals.
            </p>
            <div className="pstat">
              <a className="chip link" href="https://scanbo.ai/rxshield" rel="noopener">Try it →</a>
              <span className="chip">Non-device CDS · FDA §520(o)(1)(E)</span>
              <span className="chip">Free for HCPs · U.S. &amp; Canada</span>
            </div>
          </div>
          <div className="part">
            <div className="artcard uiwrap">
              <span className="bign">05 · DEFENSIVE INTELLIGENCE</span>
              <div className="ui">
                <div className="uh">
                  <b>Interaction check</b>
                  <em className="ok">✓ Complete</em>
                </div>
                <div className="ur">
                  <span>Evidence retrieved</span>
                  <b>&lt;2s</b>
                </div>
                <div className="ur">
                  <span>Sources cross-checked</span>
                  <b>4×</b>
                </div>
                <div className="ur">
                  <span>Findings linked to source</span>
                  <b>100%</b>
                </div>
                <div className="ur">
                  <span>Decision ID</span>
                  <b>Logged</b>
                </div>
                <div className="ufoot">Clinician decides · 0 autonomous decisions</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">How it works</div>
          <h2 style={{ marginTop: "14px" }}>Evidence retrieval,
            <br />plus clinician authority.
          </h2>
          <p className="lede pintro">When regulatory-grade evidence retrieval meets clinical judgment, drug decisions become far more defensible.</p>
          <div className="split2">
            <div className="col">
              <h4>The clinician does</h4>
              <ul>
                <li>Reviews evidence independently via source-passage links</li>
                <li>Applies clinical judgment to the individual patient</li>
                <li>Weighs risk and benefit in the full clinical context</li>
                <li>Verifies against current official prescribing information</li>
                <li>Makes and owns every prescribing decision</li>
              </ul>
            </div>
            <div className="col dark">
              <h4>Scanbo AI does</h4>
              <ul>
                <li>Retrieves published regulatory and clinical evidence</li>
                <li>Applies deterministic rules to classify interaction severity</li>
                <li>Discloses source conflicts and uncertainty flags</li>
                <li>Links every output to its exact source passage</li>
                <li>Generates an immutable Decision ID for every check</li>
              </ul>
            </div>
          </div>
          <p className="pfoot">RxShield never prescribes, recommends or directs clinical action. All automation stops at information display.</p>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            <div>
              <b>&lt;2s</b>
              <span>from drug entry to complete evidence</span>
            </div>
            <div>
              <b>100%</b>
              <span>of findings linked to the exact source passage</span>
            </div>
            <div>
              <b>4×</b>
              <span>evidence sources cross-checked per interaction</span>
            </div>
            <div>
              <b>0</b>
              <span>autonomous clinical decisions by AI</span>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">The platform</div>
          <h2 style={{ marginTop: "14px" }}>Meet RxShield.</h2>
          <p className="lede pintro">A drug decision engine that combines AI evidence retrieval with full auditability, purpose-built for clinical defensibility.</p>
          <div className="pcards n4">
            <div className="pcard">
              <div className="k">Core engine</div>
              <h4>Fewer adverse events, faster evidence.</h4>
              <p>Interaction analysis from FDA-approved prescribing information, clinical guidelines and peer-reviewed literature, cross-referenced and source-linked in under two seconds.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Auditability</div>
              <h4>Defend every decision you make.</h4>
              <p>Every check generates a unique Decision ID: an immutable snapshot of what was shown, when, and from which sources. Ready for peer review or audit.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Evidence transparency</div>
              <h4>Source passages, not just citations.</h4>
              <p>Every finding links to the exact passage in the source document, with source disagreements, uncertainty flags and conflict scores disclosed.
              </p>
            </div>
            <div className="pcard">
              <div className="k">Clinical alternatives</div>
              <h4>Alternatives with full context.</h4>
              <p>Where alternatives exist, RxShield shows them with contraindication data inline. Black-box warnings are always displayed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Regulatory and security</div>
          <h2 style={{ marginTop: "14px" }}>Certified for compliance, security and clinical integrity.</h2>
          <div className="pchips">
            <span>FDA §520(o)(1)(E) non-device CDS</span>
            <span>Health Canada CDS compliant</span>
            <span>HIPAA compliant</span>
            <span>SOC 2 Type II</span>
            <span>21st Century Cures Act</span>
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>Regulatory notice</b>
            <p>RxShield is a non-device clinical decision support tool under FDA §520(o)(1)(E) of the 21st Century Cures Act (U.S.) and operates in line with Health Canada CDS guidelines. It does not automate clinical decisions or replace clinician judgment. Outputs are for reference by qualified healthcare professionals only.
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
            <a href="/platform/hridaytaal-ecg-ai/">
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
            <a href="/platform/rxshield/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Evidence that holds up.
            <br />Decisions you can defend.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/rxshield/#webpage\", \"url\": \"https://www.scanbo.com/platform/rxshield/\", \"name\": \"RxShield | Drug Interaction Checker for Clinicians | Scanbo\", \"description\": \"RxShield checks drug interactions against cited sources and records every decision in an auditable evidence trail. Built for U.S. and Canadian clinicians.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"RxShield\", \"item\": \"https://www.scanbo.com/platform/rxshield/\"}]}]}";
