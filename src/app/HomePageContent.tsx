import { Fragment } from "react";
import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import { HomeStatsBar } from "@/components/common/HomeStatsBar";
import {
  audienceTiles,
  hardwareBarPhrases,
  heroStatusChips,
  liveDeploymentLogos,
  moatChips,
  moatStats,
  outcomeCards,
  platformDuoCards,
  revenueCards,
  stackCards,
  timeToResultRows,
  trustCerts,
  usBandFacts,
  type AudienceTile,
  type StackCard,
} from "@/data/homepage";

function StackIcon({ icon }: { icon: StackCard["icon"] }) {
  switch (icon) {
    case "scale":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 16a8 8 0 0 1 16 0z" />
          <path d="M3 16h18v3H3z" />
          <path d="M12 12l2-3" />
        </svg>
      );
    case "ambient":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
        </svg>
      );
    case "rxshield":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      );
    case "emr":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      );
  }
}

function AudienceIcon({ icon }: { icon: AudienceTile["icon"] }) {
  switch (icon) {
    case "hospitals":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M9 8h6M12 5v6M8 21v-4h8v4" />
        </svg>
      );
    case "chw":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      );
    case "employers":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        </svg>
      );
    case "acos":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      );
  }
}

export function PageContent() {
  const bigOutcome = outcomeCards.find((c) => c.variant === "big")!;
  const cardOutcomes = outcomeCards.filter((c) => c.variant === "card");

  return (
    <main id="main">
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">The point-of-care intelligence platform</div>
            <h1>The Intelligence Stack for
              <br />
              <span>Clinical Decisions.</span>
            </h1>
            <p className="lede">From real-time patient data acquisition to intelligent interpretation, decision making and clinical action, integrated directly at the point of care, this marks the shift toward agentic AI in healthcare.
            </p>
            <HeroCtas
              primaryLabel="Book a platform walkthrough →"
              secondary={{ href: "/platform/", label: "Explore the Ecosystem" }}
            />
            <p className="status">
              {heroStatusChips.map((chip, i) => (
                <Fragment key={chip.id}>
                  {i > 0 ? <span>·</span> : null}
                  <em>
                    {chip.live ? <i></i> : null}
                    {chip.label}
                  </em>
                </Fragment>
              ))}
            </p>
          </div>
          <div className="hero-art">
            <img className="ring" src="/assets/platform_ring.png" alt="The Scanbo platform: hardware, software, AI and clinical workflow in one" />
          </div>
        </div>
      </header>
      <HomeStatsBar />
      <div className="hwbar">
        <div className="wrap">
          <p className="hwbar-copy">
            {hardwareBarPhrases.map((phrase, i) => (
              <Fragment key={phrase.id}>
                {i > 0 ? (
                  <span className="dot" aria-hidden="true">·</span>
                ) : null}
                <span>{phrase.text}</span>
              </Fragment>
            ))}
          </p>
          <span className="hwbar-badge">
            <i></i>
            In D12 — CDSCO approval in progress
          </span>
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
            {platformDuoCards.map((card) => (
              <div className="card lean" key={card.id}>
                <div>
                  <span className="tag">{card.tag}{" "}
                    {card.live ? <span className="live">Live</span> : null}
                  </span>
                  <h3>
                    <a href={card.href}>{card.title}</a>
                  </h3>
                  <p>{card.description}</p>
                </div>
                {card.media === "device" ? (
                  <img loading="lazy" decoding="async" className="dev" src={card.imgSrc} alt={card.imgAlt} />
                ) : (
                  <svg className="ecg ecg-live" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true">
                    <g className="ecg-trace">
                      <path d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" />
                      <path d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" transform="translate(400 0)" />
                    </g>
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="stack">
            {stackCards.map((card) => (
              <div className="scard" key={card.id}>
                <div className="shead">
                  <div className="sic">
                    <StackIcon icon={card.icon} />
                  </div>
                  <div>
                    <div className="snum">{card.num}</div>
                    <h4>
                      <a href={card.href}>{card.title}</a>
                    </h4>
                  </div>
                </div>
                <p>{card.description}
                </p>
                <div className="sstat">
                  {card.status.kind === "live" ? (
                    <>
                      <span className="live">{card.status.label}</span>
                      {card.status.location ? <span>{card.status.location}</span> : null}
                    </>
                  ) : (
                    <a
                      className="try"
                      href={card.status.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.status.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
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
          <p className="lede" style={{ marginTop: "18px", maxWidth: "980px" }}>Our proprietary signal layer provides a clinical foundation for AI accuracy that cannot be replicated. Every metric below was generated directly through Scanbo hardware — in the room, at the moment of care.
          </p>
          <div className="moat">
            <div className="mbig">
              <h3 className="grad">Every device compounds the moat.</h3>
              <p>Each D8 deployed is a data acquisition node feeding proprietary health signals into the intelligence stack. This signal layer can’t be bought or licensed. It is built by owning the hardware in the room, at the moment of care.
              </p>
            </div>
            <div className="mstats">
              {moatStats.map((stat) => (
                <div className="mstat" key={stat.id}>
                  <div className="mrow">
                    {stat.value.kind === "text" ? (
                      <b className="gnum">{stat.value.text}</b>
                    ) : (
                      <b className="gnum gnum-yoy">
                        {stat.value.prefix}<span className="gx">{stat.value.multiplier}</span>
                      </b>
                    )}
                    <span>{stat.label}</span>
                  </div>
                  <p>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mchips">
            {moatChips.map((chip) => (
              <span
                className={chip.lime ? "mchip lime" : "mchip"}
                key={chip.id}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="serve" className="tight light">
        <div className="wrap">
          <div className="eyebrow">Whom We Serve</div>
          <h2 style={{ marginTop: "14px" }}>One device behind every door into healthcare.</h2>
          <div className="wtiles">
            {audienceTiles.map((tile) => (
              <a className="wtile" href={tile.href} key={tile.id}>
                <div className="ic">
                  <AudienceIcon icon={tile.icon} />
                </div>
                <b>{tile.label}</b>
              </a>
            ))}
          </div>
          <a className="usband" href="/who-we-serve/#us">
            <span className="lbl">United States</span>
            {usBandFacts.map((fact) => (
              <span key={fact.id}>{fact.text}</span>
            ))}
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
              <p className="oq">{bigOutcome.quote}</p>
              <h3 className="grad ohead">{bigOutcome.heading}</h3>
              <p className="obody">{bigOutcome.body}
              </p>
              <div className="ocite">
                <b>{bigOutcome.cite.name}</b>
                <span>{bigOutcome.cite.detail}</span>
              </div>
            </div>
            <div className="ocol">
              {cardOutcomes.map((card) => (
                <div className="ocard" key={card.id}>
                  <p className="oq">{card.quote}</p>
                  <h3 className="ohead2">{card.headingBefore}{" "}
                    <span className="grad">{card.headingGrad}</span>
                  </h3>
                  <p className="obody">{card.body}</p>
                  <div className="ocite">
                    <b>{card.cite.name}</b>
                    <span>{card.cite.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="us-aco-callout">
            <div className="us-aco-copy">
              <div className="us-aco-eyebrow"><span>US MARKET ENTRY</span> — ACTIVE</div>
              <h3>2 ACO Pilots Completed.<br /><span>Pre-FDA clearance.</span></h3>
              <p>Accountable Care Organisations in Florida and New York evaluated the full clinical stack — data security, integration, and outcomes — and chose to pilot before regulatory clearance. US commercialisation is already in motion.</p>
            </div>
            <div className="us-aco-pilots">
              <div><b><i>•</i> US</b><span>Florida ACO<br />Pilot completed</span></div>
              <div><b><i>•</i> US</b><span>New York ACO<br />Pilot completed</span></div>
            </div>
          </div>
          <div className="livedep" aria-label="Live deployments">
            <span className="livedep-lbl">Live deployments</span>
            <div className="livedep-logos">
              {liveDeploymentLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
            </div>
            <span className="livedep-badge">+ 650 clinical settings</span>
          </div>
        </div>
      </section>
      <section id="revenue" className="light">
        <div className="wrap">
          <div className="eyebrow">Revenue model</div>
          <h2 style={{ marginTop: "14px" }}>
            Three revenue streams.
            <br />
            <span className="grad">One growing platform.</span>
          </h2>
          <p className="lede" style={{ marginTop: "18px", maxWidth: "860px" }}>
            Scanbo® generates revenue across hardware consumables, SaaS subscriptions, and proprietary AI — with all three streams active and growing year-on-year.
          </p>
          <div className="revcards">
            {revenueCards.map((card) => (
              <div className="revcard" key={card.id}>
                <div className="k">{card.kicker}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.products.map((product) => (
                    <li key={product.id}>
                      <b>{product.name}</b>
                      <span>
                        {product.detail}
                        {product.detailEm ? <em>{product.detailEm}</em> : null}
                      </span>
                    </li>
                  ))}
                </ul>
                {card.pill ? <span className="pill">{card.pill}</span> : null}
                {card.cta ? (
                  <a className="try" href={card.cta.href}>
                    {card.cta.label}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <div className="revenue-followups">
            <div className="reimbursement-card">
              <div>
                <div className="revenue-followup-kicker">US Medicare reimbursement</div>
                <h3>Built for existing U.S. reimbursement.<br /><span>No new CPT code required.</span></h3>
                <p>Scanbo® D8 and Scanbo® Smart Scale fit established SMBP and RPM workflows — enabling faster commercialisation without requiring a new CPT code. Strong fit for ACOs and value-based care organisations — the same buyer segment as our two completed US pilots in Florida and New York.</p>
              </div>
              <a className="revenue-followup-btn" href="/insights/reimbursement-guide/">View CPT Code Guide →</a>
            </div>
            <div className="growth-signal-card">
              <div>
                <div className="revenue-followup-kicker">Growth signal</div>
                <h3>Revenue generating across all three streams.</h3>
                <p>2× revenue growth in FY2025. <span>North America next.</span></p>
              </div>
              <a className="growth-signal-btn" href="/about/contact/">Request investor briefing →</a>
            </div>
          </div>
        </div>
      </section>
      <div className="trust paper">
        <div className="wrap">
          <div className="lbl">Quality, security and regulatory</div>
          <div className="certs">
            {trustCerts.map((cert) => (
              <span key={cert.id}>{cert.label}</span>
            ))}
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
            {timeToResultRows.map((row) => (
              <div className={row.highlight ? "trow s" : "trow"} key={row.id}>
                <div className="tl">
                  <b>{row.region}</b>
                  <span>{row.detail}</span>
                </div>
                <div className="tbar">
                  <i style={{ width: row.barWidth }}></i>
                </div>
                <div className="tv">{row.value}</div>
              </div>
            ))}
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
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"Organization\", \"@id\": \"https://www.scanbo.com/#organization\", \"name\": \"Scanbo\", \"legalName\": \"Scanbo Technologies Inc.\", \"url\": \"https://www.scanbo.com/\", \"logo\": \"https://www.scanbo.com/assets/logo-512.png\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"1048 165 Street\", \"addressLocality\": \"Surrey\", \"addressRegion\": \"BC\", \"postalCode\": \"V4A 9A2\", \"addressCountry\": \"CA\"}, \"sameAs\": [\"https://www.linkedin.com/company/scanbo/\"], \"contactPoint\": [{\"@type\": \"ContactPoint\", \"contactType\": \"customer support\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"areaServed\": [\"CA\", \"US\"]}, {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"partnerships@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"investor relations\", \"email\": \"ir@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"press\", \"email\": \"press@scanbo.com\"}]}, {\"@type\": \"WebSite\", \"@id\": \"https://www.scanbo.com/#website\", \"url\": \"https://www.scanbo.com/\", \"name\": \"Scanbo\", \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}, \"inLanguage\": \"en\"}, {\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/#webpage\", \"url\": \"https://www.scanbo.com/\", \"name\": \"Scanbo® | Point-of-Care Diagnostics and Clinical AI\", \"description\": \"Scanbo is a connected point-of-care platform: eight clinical measurements, AI interpretation and the patient record in one workflow, in under five minutes.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}]}";
