import { PlatformCtas } from "@/components/common/Ctas";
import {
  rxshieldAiBullets,
  rxshieldClinicianBullets,
  rxshieldHeroChips,
  rxshieldPlatformCards,
  rxshieldPstats,
  rxshieldRegulatoryChips,
} from "@/data/platform";

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
              {rxshieldHeroChips.map((chip) =>
                chip.link && chip.href ? (
                  <a
                    key={chip.id}
                    className="chip link"
                    href={chip.href}
                    rel={chip.rel}
                  >
                    {chip.label}
                  </a>
                ) : (
                  <span key={chip.id} className="chip">
                    {chip.label}
                  </span>
                ),
              )}
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
                {rxshieldClinicianBullets.map((bullet) => (
                  <li key={bullet.id}>{bullet.label}</li>
                ))}
              </ul>
            </div>
            <div className="col dark">
              <h4>Scanbo AI does</h4>
              <ul>
                {rxshieldAiBullets.map((bullet) => (
                  <li key={bullet.id}>{bullet.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="pfoot">RxShield never prescribes, recommends or directs clinical action. All automation stops at information display.</p>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            {rxshieldPstats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">The platform</div>
          <h2 style={{ marginTop: "14px" }}>Meet RxShield.</h2>
          <p className="lede pintro">A drug decision engine that combines AI evidence retrieval with full auditability, purpose-built for clinical defensibility.</p>
          <div className="pcards n4">
            {rxshieldPlatformCards.map((card) => (
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
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Regulatory and security</div>
          <h2 style={{ marginTop: "14px" }}>Certified for compliance, security and clinical integrity.</h2>
          <div className="pchips">
            {rxshieldRegulatoryChips.map((chip) => (
              <span key={chip.id}>{chip.label}</span>
            ))}
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
