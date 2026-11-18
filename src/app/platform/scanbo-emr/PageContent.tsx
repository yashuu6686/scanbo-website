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
              <span className="live">Deployed</span>
              <span className="chip">FHIR R5 native</span>
              <span className="chip">HIPAA-compliant</span>
            </div>
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
            <div className="pcard">
              <div className="k">Scheduling intelligence</div>
              <h4>Appointments managed end to end.</h4>
              <p>Booking, rescheduling, cancellation and waitlisting in one platform. No handoffs to external scheduling tools.</p>
            </div>
            <div className="pcard">
              <div className="k">Operational visibility</div>
              <h4>Real-time patient flow.</h4>
              <p>A live queue dashboard shows who is waiting, who is in consultation and what is delayed, improving throughput.</p>
            </div>
            <div className="pcard">
              <div className="k">Connected platform</div>
              <h4>Workflow connected to clinical data.</h4>
              <p>D8 vitals, HridayTaal® ECG interpretations and Smart Scale body composition all flow into the record. Every encounter is connected and documented.
              </p>
            </div>
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
                <div className="row">
                  <dt>Online and in-clinic booking</dt>
                  <dd>Patient- and admin-initiated appointments</dd>
                </div>
                <div className="row">
                  <dt>Rescheduling and cancellation</dt>
                  <dd>Managed in the platform, with notifications</dd>
                </div>
                <div className="row">
                  <dt>Waitlisting</dt>
                  <dd>Cancelled slots filled from an active waitlist</dd>
                </div>
                <div className="row">
                  <dt>Multi-department scheduling</dt>
                  <dd>Across specialties, departments and sites</dd>
                </div>
              </dl>
            </div>
            <div className="spec">
              <h4>Queue & patient flow</h4>
              <dl>
                <div className="row">
                  <dt>Live queue dashboard</dt>
                  <dd>Waiting, in consultation and completed, in real time</dd>
                </div>
                <div className="row">
                  <dt>Status tracking</dt>
                  <dd>Active, waiting, delayed and completed states</dd>
                </div>
                <div className="row">
                  <dt>TeleCall queue integration</dt>
                  <dd>Remote patients in the same queue view</dd>
                </div>
                <div className="row">
                  <dt>Throughput visibility</dt>
                  <dd>Daily and session-level patient flow</dd>
                </div>
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
            <div className="pcard">
              <div className="k">Audio TeleCall</div>
              <h4>Browser-based audio consultation.</h4>
              <p>WebRTC audio calling with no app download. Patients connect from any device, and every call is logged against the patient record.</p>
            </div>
            <div className="pcard">
              <div className="k">Video TeleCall</div>
              <h4>Video consultation in the EHR.</h4>
              <p>Clinicians see D8 vitals and ECG interpretations while they consult, in the same screen, without switching tools.</p>
            </div>
            <div className="pcard">
              <div className="k">Secure Chat</div>
              <h4>HIPAA-compliant clinical messaging.</h4>
              <p>Encrypted messaging between clinicians, care teams and patients, replacing insecure workarounds like SMS, with messages logged in the record.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
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
                <div className="row">
                  <dt>FHIR R5-native interoperability</dt>
                  <dd>Built to the current standard from the ground up</dd>
                </div>
                <div className="row">
                  <dt>Structured data exchange</dt>
                  <dd>FHIR-formatted data in and out across connected systems</dd>
                </div>
                <div className="row">
                  <dt>API-first architecture</dt>
                  <dd>Connects to payers, labs, devices and external systems</dd>
                </div>
                <div className="row">
                  <dt>Real-time data availability</dt>
                  <dd>Clinical data where and when it is needed</dd>
                </div>
              </dl>
            </div>
            <div className="spec">
              <h4>Legacy migration & modernization</h4>
              <dl>
                <div className="row">
                  <dt>Built-in migration tooling</dt>
                  <dd>Converts older FHIR environments to FHIR R5</dd>
                </div>
                <div className="row">
                  <dt>Conversion support</dt>
                  <dd>Maps and transforms legacy FHIR data</dd>
                </div>
                <div className="row">
                  <dt>Enterprise-ready</dt>
                  <dd>Designed for larger health organizations</dd>
                </div>
                <div className="row">
                  <dt>Manageable transition</dt>
                  <dd>Phased migration without disrupting care</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="pfoot">Modernization becomes a product capability, not an IT project.</p>
          <div className="pgap"></div>
          <div className="pquote" style={{ marginTop: 0 }}>
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
              <b>HridayTaal®</b>
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
            <a href="/platform/scanbo-emr/" className="on">
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
          <div className="ctas">
            <a className="btn btn-lime" href="/about/contact/">Book a platform walkthrough →</a>
            <a className="btn btn-ghost" href="/about/contact/#investors">Investor inquiries</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/platform/scanbo-emr/#webpage\", \"url\": \"https://www.scanbo.com/platform/scanbo-emr/\", \"name\": \"Scanbo® EMR | Connected Clinical Workflow\", \"description\": \"Scanbo® EMR brings scheduling, communication and FHIR-native interoperability into one connected workflow layer for care teams.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Platform\", \"item\": \"https://www.scanbo.com/platform/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Scanbo® EMR\", \"item\": \"https://www.scanbo.com/platform/scanbo-emr/\"}]}]}";
