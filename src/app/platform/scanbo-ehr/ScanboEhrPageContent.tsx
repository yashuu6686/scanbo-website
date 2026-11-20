import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import {
  ehrAppointmentSpecRows,
  ehrCommunicationCards,
  ehrFhirSpecRows,
  ehrMigrationSpecRows,
  ehrQueueSpecRows,
  ehrWorkflowCards,
} from "@/data/platform";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 06 · Workflow intelligence
            </div>
            <h1>The operational hub
              <br />
              <span>for connected care.</span>
            </h1>
            <p className="lede">Scheduling, communication and interoperability in one connected platform. Scanbo® EMR is the workflow layer that helps care actually run, with FHIR R5-native interoperability built in.
            </p>
            <div className="pstat">
              <span className="live">Platform-Connected</span>
              <span className="chip">FHIR R5 native</span>
              <span className="chip">HIPAA-compliant</span>
            </div>
            <HeroCtas secondary={{ href: "#fhir", label: "FHIR R5 interoperability" }} />
          </div>
          <div className="part">
            <div className="screen">
              <div className="sbar2">
                <b></b>
                <b></b>
                <b></b>
                <span>Scanbo® EMR</span>
              </div>
              <img src="/assets/ph_dashboard.jpg" alt="Scanbo EMR dashboard" />
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Workflow intelligence</div>
          <h2 style={{ marginTop: "14px" }}>Not just a records system.
            <br />A care coordination hub.
          </h2>
          <p className="lede pintro">Most EHR systems are built around documentation. Scanbo® EMR is built around workflow: the scheduling, communication and visibility that keep care running, connected to every other layer of the platform.
          </p>
          <div className="pcards">
            {ehrWorkflowCards.map((card) => (
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
          <div className="eyebrow">Scheduling & queue</div>
          <h2 style={{ marginTop: "14px" }}>Every appointment.
            <br />Every patient. Managed.
          </h2>
          <p className="lede pintro">From first booking to live queue status, Scanbo® EMR gives clinical teams the infrastructure to run high-volume care settings.</p>
          <div className="specs">
            <div className="spec">
              <h4>Appointment management</h4>
              <dl>
                {ehrAppointmentSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="spec">
              <h4>Queue & patient flow</h4>
              <dl>
                {ehrQueueSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Native communication</div>
          <h2 style={{ marginTop: "14px" }}>Built in. HIPAA-compliant.
            <br />No third-party tools.
          </h2>
          <p className="lede pintro">Clinical communication shouldn't live in a separate app. Audio, video and secure chat are built into the same workflow.</p>
          <div className="pcards">
            {ehrCommunicationCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="fhir" className="white">
        <div className="wrap">
          <div className="eyebrow">Interoperability by design</div>
          <h2 style={{ marginTop: "14px" }}>FHIR R5 built in,
            <br />from day one.
          </h2>
          <p className="lede pintro">Built to FHIR R5 natively, not added on. For organizations on older FHIR versions, built-in tooling provides a manageable path to FHIR R5.</p>
          <div className="specs">
            <div className="spec">
              <h4>FHIR R5 native</h4>
              <dl>
                {ehrFhirSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="spec">
              <h4>Legacy migration & modernization</h4>
              <dl>
                {ehrMigrationSpecRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="fhirnote">
            <span className="fhirnote-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4.5 6.5v11L12 22l7.5-4.5v-11L12 2z" />
                <path d="M4.5 6.5 12 11l7.5-4.5" />
                <path d="M12 11v11" />
              </svg>
            </span>
            <div>
              <b>FHIR R5 — the current standard for health data interoperability</b>
              <p>Scanbo® EMR is built to FHIR R5 natively. For organizations on older versions, built-in tooling supports structured conversion — making modernization a product capability, not an IT project.</p>
            </div>
          </div>
          <div className="pint fhir-integration">
            <div>
              <div className="eyebrow">Platform integration</div>
              <h3>The workflow layer
                <br />
                <span className="gradline">connecting every intelligence layer.</span>
              </h3>
              <p>D8 Vitals Intelligence, HridayTaal® Cardiac Intelligence, and Smart Scale Metabolic Intelligence all feed directly into Scanbo® EMR. Every reading, every interpretation, every measurement — connected, documented, and longitudinally visible in one place.</p>
            </div>
          </div>
          <div className="pquote">
            <blockquote>“Vitals at the point of consultation, already in the EMR before I finish the examination.”</blockquote>
            <cite>Dr. Jogendra Kumar Bastia, MD 
              <span>· Consultant Neurologist, SGPGI MS</span>
            </cite>
          </div>
        </div>
      </section>
      <section className="white tight">
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
            <a href="/platform/rxshield/">
              <i>05</i>
              <b>RxShield</b>
            </a>
            <a href="/platform/scanbo-ehr/" className="on">
              <i>06</i>
              <b>Scanbo® EMR</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>See Scanbo® EMR
            <br />in your workflow.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/scanbo-ehr/#webpage\", \"url\": \"https://www.scanbo.com/platform/scanbo-ehr/\", \"name\": \"Scanbo® EMR | Connected Clinical Workflow\", \"description\": \"Scanbo® EMR brings scheduling, communication and FHIR-native interoperability into one connected workflow layer for care teams.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Scanbo® EMR\", \"item\": \"https://www.scanbo.com/platform/scanbo-ehr/\"}]}]}";
