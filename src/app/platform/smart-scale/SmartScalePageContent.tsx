import Link from "next/link";
import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import {
  smartScaleBodyCompositionRows,
  smartScaleConnectedFeatures,
  smartScaleIntegrationCards,
  smartScalePstats,
  smartScaleTractionRows,
  smartScaleValueCards,
} from "@/data/platform";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 03 · Metabolic intelligence
            </div>
            <h1>Smarter body composition,
              <br />
              <span>connected to care.</span>
            </h1>
            <p className="lede">The Metabolic Intelligence layer. Every measurement generates an AI Body Score, a single trackable signal informed by visceral fat, skeletal muscle, subcutaneous fat and metabolic indicators, — building longitudinal insight directly into the Scanbo® platform.
            </p>
            <div className="pstat">
              <span className="live">Platform-Connected</span>
              <span className="chip">AI Body Score · 40+ metrics</span>
              <span className="chip">CDSCO approved</span>
            </div>
            <HeroCtas
              secondary={{
                href: "/insights/reimbursement-guide/",
                label: "RPM Reimbursement Guide",
              }}
            />
          </div>
          <div className="part scalepart">
            <img src="/assets/smart_scale.png" alt="Scanbo Smart Scale" />
            <p className="pcap">
              <b>1M+ body scans</b> recorded · Connected to Scanbo® platform
            </p>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">More than a scale</div>
          <h2 style={{ marginTop: "14px" }}>One score.
            <br />Every measurement.
          </h2>
          <p className="lede pintro">Consumer scales measure weight. Scanbo® Smart Scale surfaces what weight conceals (visceral fat, subcutaneous fat, skeletal muscle, body water and an AI-driven body score), connecting metabolic insight directly into the clinical record.
          </p>
          <div className="pcards">
            {smartScaleValueCards.map((card) => (
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
          <div className="eyebrow">Measurements</div>
          <h2 style={{ marginTop: "14px" }}>One measurement.
            <br />40+ metabolic insights.
          </h2>
          <div className="specs">
            <div className="spec">
              <h4>Body composition parameters</h4>
              <dl>
                {smartScaleBodyCompositionRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="specs-side">
              <div className="spec">
                <h4>Connected features</h4>
                <ul className="spec-ticks">
                  {smartScaleConnectedFeatures.map((feature) => (
                    <li key={feature.id}>{feature.label}</li>
                  ))}
                </ul>
              </div>
              <div className="spec deploy">
                <h4>Scale traction</h4>
                <dl>
                  {smartScaleTractionRows.map((row) => (
                    <div className="row" key={row.id}>
                      <dt>{row.dt}</dt>
                      <dd>{row.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            {smartScalePstats.map((stat) => (
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
          <div className="eyebrow">Platform integration</div>
          <h2 style={{ marginTop: "14px" }}>Not a standalone device.
            <br />The metabolic intelligence layer.
          </h2>
          <p className="lede pintro">Smart Scale sits alongside D8 Vitals Intelligence, HridayTaal® Cardiac Intelligence and Scanbo® EMR, giving clinicians visceral fat trends, body score changes and metabolic shifts between visits.
          </p>
          <div className="pcards n4">
            {smartScaleIntegrationCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="callout">
            <div>
              <div className="eyebrow">U.S. Medicare reimbursement</div>
              <h3>Weight monitoring fits
                <br />existing RPM pathways.
              </h3>
              <p>CMS recognizes body weight as a billable RPM parameter. Smart Scale deployments qualify under the same 99453, 99454 and 99457 pathways used by Scanbo® D8 . Full details in the Reimbursement Guide.
              </p>
            </div>
            <Link className="btn btn-lime" href="/insights/reimbursement-guide/">See the reimbursement guide →</Link>
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
            <a href="/platform/smart-scale/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>See Scanbo® Smart Scale
            <br />in your workflow.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/smart-scale/#webpage\", \"url\": \"https://www.scanbo.com/platform/smart-scale/\", \"name\": \"Smart Scale | AI Body Composition Analysis | Scanbo\", \"description\": \"The Scanbo Smart Scale measures body composition and generates an AI Body Score from visceral fat, muscle and metabolic indicators, tracked over time.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Smart Scale\", \"item\": \"https://www.scanbo.com/platform/smart-scale/\"}]}]}";
