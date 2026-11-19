import Link from "next/link";
import { PlatformCtas } from "@/components/common/Ctas";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">The platform</div>
          <h1>One device. 
            <span>One connected record.</span>
          </h1>
          <p className="lede">Scanbo brings diagnostics, AI and clinical workflow together at the point of care. The device captures, the AI interprets, the record keeps it.
          </p>
        </div>
      </header>
      <section className="light" id="flow">
        <div className="wrap">
          <div className="eyebrow">Scanbo Smart Cloud</div>
          <h2 style={{ marginTop: "14px" }}>From the device to the doctor, in one flow.</h2>
          <div className="flow">
            <div className="fcard lime">
              <div className="fvis">
                <img loading="lazy" decoding="async" src="/assets/device.png" alt="Scanbo D8" />
              </div>
              <div className="n">01 · CAPTURE</div>
              <h4>Scanbo D8</h4>
              <p>Vitals, ECG and blood glucose captured at the point of care.</p>
            </div>
            <div className="farrow">→</div>
            <div className="fcard">
              <div className="fvis">
                <svg viewBox="0 0 104 164" aria-hidden="true">
                  <rect x="2" y="2" width="100" height="160" rx="16" fill="#F4F8FA" />
                  <path d="M2 18a16 16 0 0 1 16-16h68a16 16 0 0 1 16 16v14H2z" fill="#4FBAD6" />
                  <rect x="30" y="13" width="44" height="5" rx="2.5" fill="#fff" opacity=".85" />
                  <path d="M86 10l5 4.5-5 4.5M86 19l5 4.5-5 4.5M86 9v20" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2 -2) scale(1)" />
                  <g fill="#fff" stroke="#D3E2E9" strokeWidth="1.5">
                    <circle cx="32" cy="58" r="15" />
                    <circle cx="72" cy="58" r="15" />
                    <circle cx="32" cy="98" r="15" />
                    <circle cx="72" cy="98" r="15" />
                    <circle cx="52" cy="136" r="15" />
                  </g>
                  <g fill="none" stroke="#2B7F9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 58h5l3-7 4 14 3-7h6" />
                    <path d="M72 49c-5 7-7 10-7 13a7 7 0 0 0 14 0c0-3-2-6-7-13z" />
                    <path d="M32 89c-4 6-6 9-6 11.5a6 6 0 0 0 12 0c0-2.5-2-5.5-6-11.5z" />
                    <path d="M42 89" />
                    <circle cx="72" cy="98" r="7" />
                    <path d="M72 91v3M72 105v-3M65 98h3M79 98h-3" />
                    <path d="M52 126v14" />
                    <circle cx="52" cy="143" r="3.5" />
                  </g>
                  <rect x="38" y="104" width="7" height="5" rx="1" fill="none" stroke="#2B7F9A" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="n">02 · CONNECT</div>
              <h4>Scanbo app</h4>
              <p>Readings sync over Bluetooth to the clinician's phone or tablet.</p>
            </div>
            <div className="farrow">→</div>
            <div className="fcard">
              <div className="fvis col">
                <svg viewBox="0 0 170 120" aria-hidden="true">
                  <path d="M44 96a26 26 0 0 1-3-51.8A36 36 0 0 1 110 34a30 30 0 0 1 16 62z" fill="#4FBAD6" />
                  <path d="M85 82V50M71 63l14-14 14 14" stroke="#fff" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="fbadges">
                  <span>HIPAA</span>
                  <span>AES</span>
                </div>
              </div>
              <div className="n">03 · SECURE</div>
              <h4>Smart Cloud</h4>
              <p>HIPAA-compliant storage with AES encryption.</p>
            </div>
            <div className="farrow">→</div>
            <div className="fcard">
              <div className="fvis">
                <svg viewBox="0 0 170 128" aria-hidden="true">
                  <rect x="2" y="2" width="166" height="124" rx="14" fill="#F4F8FA" />
                  <rect x="14" y="14" width="56" height="7" rx="3.5" fill="#06202E" opacity=".8" />
                  <rect x="128" y="14" width="28" height="7" rx="3.5" fill="#A9BECA" />
                  <g stroke="#DCE6EB" strokeWidth="1">
                    <path d="M14 46h142M14 72h142M14 98h142" />
                  </g>
                  <polyline points="20,52 50,44 80,56 110,48 148,40" fill="none" stroke="#4FBAD6" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  <polyline points="20,88 50,80 80,94 110,86 148,98" fill="none" stroke="#06202E" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                  <g fill="#fff" stroke="#2B7F9A" strokeWidth="2">
                    <circle cx="20" cy="52" r="3.5" />
                    <circle cx="50" cy="44" r="3.5" />
                    <circle cx="80" cy="56" r="3.5" />
                    <circle cx="110" cy="48" r="3.5" />
                    <circle cx="20" cy="88" r="3.5" />
                    <circle cx="50" cy="80" r="3.5" />
                    <circle cx="80" cy="94" r="3.5" />
                    <circle cx="110" cy="86" r="3.5" />
                  </g>
                  <circle cx="148" cy="40" r="5.5" fill="#A7D000" stroke="#06202E" strokeWidth="1.5" />
                  <rect x="104" y="108" width="52" height="12" rx="6" fill="#A7D000" />
                  <text x="130" y="117" textAnchor="middle" fontFamily="Archivo,Arial" fontWeight="800" fontSize="8" fill="#06202E" letterSpacing=".6">AI FLAG</text>
                </svg>
              </div>
              <div className="n">04 · ACT</div>
              <h4>Dashboards</h4>
              <p>Web and mobile views of trends, reports and AI flags.</p>
            </div>
          </div>
          <div className="fpill">
            <span>HIPAA COMPLIANT</span>
            <i> · </i>
            <span>AES ENCRYPTED</span>
            <i> · </i>
            <span>FHIR R5 NATIVE</span>
          </div>
        </div>
      </section>
      <section id="d8">
        <div className="wrap split">
          <div>
            <span className="tag">Biomarkers 
              <span className="live">Live</span>
            </span>
            <h2 style={{ marginTop: "14px" }}>Scanbo® D8 (D8–D19)</h2>
            <p className="lede" style={{ marginTop: "16px" }}>Clinical-grade assessments at the point of care, with no lab, no specialist and no cold chain. Designed and manufactured in-house, with proprietary test strips.
            </p>
            <div className="ticks">
              <div>Blood pressure</div>
              <div>Heart rate</div>
              <div>Single-lead ECG</div>
              <div>Heart-rate variability</div>
              <div>SpO₂</div>
              <div>Breath rate</div>
              <div>Body temperature</div>
              <div>Blood glucose</div>
            </div>
            <div className="facts">
              <span>Under 5 minutes</span>
              <span>CDSCO approved</span>
              <span>750+ devices deployed</span>
            </div>
            <Link className="btn btn-lime" style={{ marginTop: "26px" }} href="/platform/scanbo-d8/">Explore Scanbo D8 →</Link>
          </div>
          <img loading="lazy" decoding="async" src="/assets/hand.jpg" alt="Scanbo D8 with a test strip" />
        </div>
      </section>
      <section id="hridaytaal" className="light">
        <div className="wrap split">
          <div>
            <span className="tag" style={{ color: "var(--mid)" }}>Cardiac AI 
              <span className="live">Live</span>
            </span>
            <h2 style={{ marginTop: "14px" }}>HridayTaal® Cardiac Agent</h2>
            <p className="lede" style={{ marginTop: "16px" }}>AI that interprets every single-lead ECG in real time, so cardiac risk is caught at the first visit, not the fifth.</p>
            <div className="ticks">
              <div>Atrial fibrillation</div>
              <div>Sinus arrhythmia</div>
              <div>Heart rhythm</div>
              <div>Missing heartbeats</div>
              <div>Heart-rate variability</div>
              <div>Heart-rate type</div>
            </div>
            <Link className="btn btn-ghost" style={{ marginTop: "26px", borderColor: "var(--mid)", color: "var(--mid)" }} href="/platform/hridaytaal-ecg-ai/">Explore HridayTaal® Cardiac Agent →</Link>
          </div>
          <div>
            <div className="bigstat">1M+</div>
            <p className="lede" style={{ marginTop: "10px" }}>ECG analyses completed in the field.</p>
            <svg className="ecg" viewBox="0 0 400 64" preserveAspectRatio="none" style={{ marginTop: "26px" }}>
              <path style={{ stroke: "var(--mid)" }} d="M0 40 H60 L70 36 L78 40 H110 L118 8 L126 58 L134 40 H170 L182 30 L196 40 H250 L258 36 L266 40 H298 L306 8 L314 58 L322 40 H358 L370 30 L384 40 H400" />
            </svg>
          </div>
        </div>
      </section>
      <section id="layers">
        <div className="wrap">
          <div className="eyebrow">The full stack</div>
          <h2 style={{ marginTop: "14px" }}>Four more layers on the same record.</h2>
          <div className="layers4">
            <a className="layer" href="/platform/smart-scale/">
              <div className="n">METABOLIC</div>
              <h4>Scanbo® Smart Scale</h4>
              <p>Visceral fat, skeletal muscle and 40+ metabolic indicators, captured straight into the record.</p>
              <span className="lm">Learn more →</span>
            </a>
            <a className="layer" href="/platform/ambient-documentation/">
              <div className="n">SUMMARIZATION</div>
              <h4>Ambient Documentation</h4>
              <p>Turns the consultation into structured notes, so clinicians face the patient, not the keyboard.</p>
              <span className="lm">Learn more →</span>
            </a>
            <a className="layer" href="/platform/rxshield/">
              <div className="n">SAFETY</div>
              <h4>RxShield</h4>
              <p>Checks drug interactions at the moment of prescribing, before they reach the patient.</p>
              <span className="lm">Learn more →</span>
            </a>
            <a className="layer" href="/platform/scanbo-ehr/">
              <div className="n">WORKFLOW</div>
              <h4>Scanbo® EMR</h4>
              <p>Scheduling, telehealth and queuing on one FHIR R5-native record.</p>
              <span className="lm">Learn more →</span>
            </a>
          </div>
          <div className="fhir">FHIR R5 NATIVE · THE CONNECTIVE LAYER ACROSS THE PLATFORM</div>
        </div>
      </section>
      <section id="security" className="light tight">
        <div className="wrap">
          <div className="eyebrow">Security and data</div>
          <h2 style={{ marginTop: "14px" }}>Built secure. Patient data is never sold.</h2>
          <div className="sec4">
            <div>
              <b>HIPAA</b>
              <span>U.S. health-data privacy and security</span>
            </div>
            <div>
              <b>GDPR</b>
              <span>EU data-protection standard</span>
            </div>
            <div>
              <b>AES encryption</b>
              <span>Industry-standard encryption for patient data</span>
            </div>
            <div>
              <b>FHIR R5</b>
              <span>Open, interoperable records</span>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/#webpage\", \"url\": \"https://www.scanbo.com/platform/\", \"name\": \"The Scanbo Platform | Diagnostics, AI and Workflow\", \"description\": \"One device, one connected record. See how Scanbo's six intelligence layers bring diagnostics, AI and clinical workflow together at the point of care.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}]}]}";
