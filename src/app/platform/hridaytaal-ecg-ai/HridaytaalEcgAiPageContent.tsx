import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import {
  hridaytaalCapabilityStats,
  hridaytaalClinicalPositioning,
  hridaytaalClinicalValueCards,
  hridaytaalIntelligenceCards,
  hridaytaalIrregularitySpecRows,
  hridaytaalRhythmSpecRows,
  hridaytaalRoadmap,
} from "@/data/platform";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 02 · HridayTaal® Cardiac Agent
            </div>
            <h1>HridayTaal® is<br></br>Cardiac intelligence,
              <br />
              <span>at the point of care.</span>
            </h1>
            <p className="hero-analyst-copy">The Analyst interprets raw ECG signals to identify arrhythmias.</p>
            <p className="lede">The deployed Cardiac Intelligence layer. HridayTaal® turns a single-lead ECG into structured rhythm insight at the point of care — connected to the Scanbo® platform, and expanding its scope over time .
            </p>
            <div className="pstat">
              <span className="live">Live</span>
              <span className="chip">1M+ ECG analyses</span>
              <span className="chip">CDSCO approved</span>
            </div>
            <HeroCtas
              secondary={{
                href: "/insights/clinical-studies/",
                label: "Clinical evidence",
              }}
            />
          </div>
          <div className="part">
            <div className="artcard ro">
              <span className="bign">
                02 · HridayTaal
                <sup className="tm">®</sup> · CARDIAC INTELLIGENCE
              </span>
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
            <div className="hridaytaal-device-proof">
              <img src="/assets/device.png" alt="Scanbo point-of-care device" />
              <p className="pcap">
                <i className="pcap-dot" aria-hidden="true"></i>
                750+ devices · 650+ clinical settings
              </p>
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
            {hridaytaalIntelligenceCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
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
                {hridaytaalRhythmSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="spec">
              <h4>Irregularity detection</h4>
              <dl>
                {hridaytaalIrregularitySpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            {hridaytaalCapabilityStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Clinical value</div>
          <h2 style={{ marginTop: "14px" }}>Faster insight.
            <br />More structured interpretation.
          </h2>
          <p className="lede pintro">A single-lead ECG at the point of care is only as useful as the interpretation layer behind it. HridayTaal® turns a raw trace into actionable structured output, without requiring a cardiologist at every location.
          </p>
          <div className="pcards n4">
            {hridaytaalClinicalValueCards.map((card) => (
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
          <div className="eyebrow">Intelligence roadmap</div>
          <h2 style={{ marginTop: "14px" }}>The Analyst is expanding its scope.</h2>
          <p className="lede pintro">Cardiac Intelligence is expanding over time. Each generation of HridayTaal® adds deeper signal analysis — extending the rhythm insight available at the point of care.
          </p>
          <div className="rmap n3">
            {hridaytaalRoadmap.map((card) => (
              <div className={card.on ? "rmap-card on" : "rmap-card"} key={card.id}>
                <div className="k">{card.k}</div>
                <b className="rmap-title">{card.idLabel}</b>
                <span>{card.span}</span>
                <ul>
                  {card.bullets.map((bullet) => (
                    <li key={bullet.id}>{bullet.label}</li>
                  ))}
                </ul>
                {card.note ? <p className="rmap-note">{card.note}</p> : null}
              </div>
            ))}
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
          <div className="cpos">
            <b>Clinical positioning</b>
            <div className="cpos-grid">
              {hridaytaalClinicalPositioning.map((item) => (
                <div key={item.id}>
                  <h4>{item.h4}</h4>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
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
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/#webpage\", \"url\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/\", \"name\": \"HridayTaal® Cardiac Agent | AI ECG Analysis | Scanbo\", \"description\": \"The HridayTaal® Cardiac Agent turns a single-lead ECG into structured rhythm insight at the point of care, connected to the Scanbo® platform.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"HridayTaal® Cardiac Agent\", \"item\": \"https://www.scanbo.com/platform/hridaytaal-ecg-ai/\"}]}]}";
