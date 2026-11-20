import { PlatformCtas } from "@/components/common/Ctas";
import {
  ambientDemoPstats,
  ambientFeatureCards,
  ambientFeatureChips,
  ambientHeroChips,
  ambientHowItWorksSteps,
} from "@/data/platform";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/platform/">Platform</a> · 04 · Summarization intelligence
            </div>
            <h1>You focus on treatment.
              <br />
              <span>We do the rest.</span>
            </h1>
            <p className="lede">While you give the patient your full attention, the Ambient Documentation Agent does the heavy lifting: passively listening and delivering clinic-ready clinical notes the moment the consultation ends.
            </p>
            <div className="pstat">
              {ambientHeroChips.map((chip) =>
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
              <span className="bign">04 · SUMMARIZATION INTELLIGENCE</span>
              <div className="ui">
                <div className="uh">
                  <b>Live note</b>
                  <em>● Recording</em>
                </div>
                <div className="usub">Transcript</div>
                <div className="ul">
                  <i>CLINICIAN</i>
                  <span>How long have you had this chest tightness?</span>
                </div>
                <div className="ul">
                  <i>PATIENT</i>
                  <span>About three weeks. Gets worse climbing stairs.</span>
                </div>
                <div className="usub">SOAP note · draft</div>
                <div className="ul">
                  <i>S</i>
                  <span>3-week chest pain, exertional. Dyspnea on stair climbing.</span>
                </div>
                <div className="ul">
                  <i>A</i>
                  <span>Possible stable angina; rule out ACS.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="sess">
            <div className="sbar">
              <b></b>
              <b></b>
              <b></b>
              <span>Ambient · Live session · Internal medicine</span>
              <em>● Recording</em>
            </div>
            <div className="sbody">
              <div className="scol">
                <h5>Live transcript</h5>
                <div className="tl">
                  <i>CLINICIAN</i>
                  <p>How long have you had this chest tightness?</p>
                </div>
                <div className="tl">
                  <i>PATIENT</i>
                  <p>About three weeks. Gets worse climbing stairs.</p>
                </div>
                <div className="tl">
                  <i>CLINICIAN</i>
                  <p>Any shortness of breath? Fatigue?</p>
                </div>
                <div className="tl">
                  <i>PATIENT</i>
                  <p>Yes, both. Especially in the evenings.</p>
                </div>
              </div>
              <div className="scol">
                <h5>SOAP note 
                  <em>● Live</em>
                </h5>
                <div className="sn2">
                  <i>SUBJECTIVE</i>
                  <p>3-week chest pain, exertional. Dyspnea on stair climbing.</p>
                </div>
                <div className="sn2">
                  <i>ASSESSMENT</i>
                  <p>Possible stable angina; rule out ACS.</p>
                </div>
                <div className="sn2">
                  <i>SUGGESTED PLAN</i>
                  <div className="splan">
                    <span>12-lead ECG</span>
                    <span>Troponin</span>
                    <span>Stress test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            {ambientDemoPstats.map((stat) => (
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
          <div className="eyebrow">How it works</div>
          <h2 style={{ marginTop: "14px" }}>Three steps.
            <br />Zero interruptions.
          </h2>
          <p className="lede pintro">Ambient integrates into your existing consultation flow. No new habits. No extra steps. Just show up and see your patient.</p>
          <div className="steps3">
            {ambientHowItWorksSteps.map((step) => (
              <div className="step3" key={step.id}>
                <div className="sn">{step.sn}</div>
                <h4>{step.h4}</h4>
                <p>{step.p}</p>
                <span className="st">{step.st}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Features</div>
          <h2 style={{ marginTop: "14px" }}>Built for how
            <br />clinicians actually work.
          </h2>
          <p className="lede pintro">Every feature is designed around real clinical workflows, not generic AI outputs.</p>
          <div className="fhero">
            <div>
              <div className="fic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-6 0" />
                </svg>
              </div>
              <h3>Real-time note generation</h3>
              <p>Ambient doesn't just transcribe. It reasons. As the conversation unfolds, it continuously structures findings into Subjective, Objective, Assessment and Plan sections, highlighting clinical cues and surfacing relevant differentials.
              </p>
              <div className="fchips">
                {ambientFeatureChips.map((chip) => (
                  <span key={chip.id}>{chip.label}</span>
                ))}
              </div>
            </div>
            <div className="fprev">
              <h5>Live note preview</h5>
              <div className="pvr">
                <i>SUBJECTIVE</i>
                <p>3-week chest tightness, exertional onset. Dyspnea on stair climbing. Fatigue for 2 weeks. No syncope.</p>
              </div>
              <div className="pvr">
                <i>ASSESSMENT</i>
                <p>Possible stable angina; rule out ACS. Exertional pattern consistent.</p>
              </div>
              <div className="pvr">
                <i>SUGGESTED ICD-10</i>
                <p>I20.9 · Angina pectoris, unspecified</p>
              </div>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pcards n4" style={{ marginTop: 0 }}>
            {ambientFeatureCards.map((card) => (
              <div className="pcard" key={card.id}>
                <div className="k">{card.k}</div>
                <h4>{card.h4}</h4>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
            <blockquote>“Documentation time is gone. That time is back with our doctors.”</blockquote>
            <cite>Clinic partner CEO 
              <span>· 4,000 hours recovered across 50 devices · Diabetes reversal network, Pune</span>
            </cite>
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
            <a href="/platform/ambient-documentation/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Stop charting
            <br />at midnight.
          </h2>
          <p className="lede">Takes 2 minutes to set up. Works from your phone.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/ambient-documentation/#webpage\", \"url\": \"https://www.scanbo.com/platform/ambient-documentation/\", \"name\": \"Ambient Documentation Agent | AI Clinical Notes | Scanbo\", \"description\": \"The Ambient Documentation Agent listens during the consultation and delivers clinic-ready notes the moment it ends, so clinicians can focus on the patient.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Ambient Documentation Agent\", \"item\": \"https://www.scanbo.com/platform/ambient-documentation/\"}]}]}";
