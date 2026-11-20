import Link from "next/link";
import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import {
  d8DeploymentSpecRows,
  d8DeviceRoadmap,
  d8FingerPrickSpecRows,
  d8NonInvasiveSpecRows,
  d8WhoUsesCards,
  d8WhyCards,
} from "@/data/platform";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 01 · Vitals intelligence
            </div>
            <h1>The point-of-care
              <br />
              <span>entry point.</span>
            </h1>
            <p className="lede">The deployed foundation of Vitals Intelligence. One connected device capturing 8 clinical parameters at the point of care — no lab, no manual entry, no specialist infrastructure. Already running across 650+ clinical settings as the first layer of the Scanbo® platform.
            </p>
            <div className="pstat">
              <span className="live">Live</span>
              <span className="chip">8 parameters · 1 device</span>
              <span className="chip">CDSCO approved</span>
              <span className="chip">CDSCO Approved · FDA 510(k) Q1 2027
              </span>
            </div>
            <HeroCtas
              secondary={{
                href: "/insights/reimbursement-guide/",
                label: "US Reimbursement Guide",
              }}
            />
          </div>
          <div className="part">
            <img src="/assets/device.png" alt="Scanbo D8" />
            <p className="pcap">
              <i className="pcap-dot" aria-hidden="true"></i>
              750+ devices · 650+ clinical settings
            </p>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Why D8 wins</div>
          <h2 style={{ marginTop: "14px" }}>One device. Connected platform.
            <br />Deployed in the real world.
          </h2>
          <p className="lede pintro">Most point-of-care tools are single-parameter or lab-bound. Scanbo® D8 is one connected device that captures, interprets, connects and protects clinical data, all in a single workflow.
          </p>
          <div className="pcards">
            {d8WhyCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">The full parameter set</div>
          <h2 style={{ marginTop: "14px" }}>8 parameters. One device.
            <br />No lab. No delays.
          </h2>
          <p className="lede pintro">Every parameter D8 captures is billable, documentable and immediately available in the clinical record. No lab turnaround. No separate device. No manual entry.
          </p>
          <div className="specs">
            <div className="spec">
              <h4>7 non-invasive tests</h4>
              <dl>
                {d8NonInvasiveSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="specs-side">
              <div className="spec">
                <h4>Finger prick blood test</h4>
                <dl>
                  {d8FingerPrickSpecRows.map((row) => (
                    <div className="row" key={row.id}>
                      <dt>{row.dt}</dt>
                      <dd>{row.dd}</dd>
                    </div>
                  ))}
                </dl>
                <p className="spec-note">Each test uses a proprietary Scanbo® strip — ensuring consistent, calibrated results for every patient assessment.</p>
              </div>
              <div className="spec deploy">
                <h4>Deployment status</h4>
                <dl>
                  {d8DeploymentSpecRows.map((row) => (
                    <div className="row" key={row.id}>
                      <dt>{row.dt}</dt>
                      <dd>{row.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Device roadmap</div>
          <h2 style={{ marginTop: "14px" }}>D8 is the start.
            <br />Not the ceiling.
          </h2>
          <p className="lede pintro">The D-Series is Vitals Intelligence expanding over time. Each generation is built on the same architecture, workflows, and AI infrastructure. Deploying D8 today means being platform-ready for D12, D16, and D19 — without switching systems.
          </p>
          <div className="rmap">
            {d8DeviceRoadmap.map((card) => (
              <div className={card.on ? "rmap-card on" : "rmap-card"} key={card.id}>
                <div className="k">{card.k}</div>
                <b className="rmap-id">{card.idLabel}</b>
                <span>{card.span}</span>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet.id}>{bullet.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Who uses it</div>
          <h2 style={{ marginTop: "14px" }}>The practical entry point
            <br />for every care setting.
          </h2>
          <p className="lede pintro">D8 is built for the settings conventional tools struggle to serve: high-volume outpatient departments, distributed community care, and value-based programs that need real clinical data at the point of assessment.
          </p>
          <div className="pcards">
            {d8WhoUsesCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}
                </p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="callout">
            <div>
              <div className="eyebrow">Clinical validation</div>
              <h3>5 peer-reviewed studies.</h3>
              <h3 style={{ color: "var(--lime)" }}>Validated in real-world settings.</h3>
              <p>Independent, peer-reviewed research confirms Scanbo® D8's diagnostic accuracy in actual clinical environments, not controlled lab conditions. Published across PubMed, PMC, ScienceDirect and Semantic Scholar.
              </p>
            </div>
            <Link className="btn btn-lime" href="/insights/clinical-studies/">View the clinical evidence →</Link>
          </div>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
            <blockquote>“We eliminated transcription entirely. The device reads, the AI interprets, the EMR records. We just see the patient.”</blockquote>
            <cite>Supraja Hospitals · Rushcare Hospitals 
              <span>· Multispecialty networks, Hyderabad</span>
            </cite>
          </div>
          <div className="pgap"></div>
          <img loading="lazy" decoding="async" className="pphoto" style={{ marginTop: 0 }} src="/assets/hand.jpg" alt="Scanbo D8 with a test strip" />
        </div>
      </section>
      <section className="light tight">
        <div className="wrap">
          <div className="eyebrow">One platform</div>
          <h2 style={{ marginTop: "14px" }}>Six intelligence layers. One patient record.</h2>
          <div className="six">
            <a href="/platform/scanbo-d8/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>See Scanbo® D8
            <br />in action.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/scanbo-d8/#webpage\", \"url\": \"https://www.scanbo.com/platform/scanbo-d8/\", \"name\": \"Scanbo® D8 | Multiparameter Point-of-Care Device\", \"description\": \"Scanbo® D8 captures eight clinical parameters in one connected handheld device, with no lab, no manual entry and no specialist infrastructure.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Scanbo® D8\", \"item\": \"https://www.scanbo.com/platform/scanbo-d8/\"}]}]}";
