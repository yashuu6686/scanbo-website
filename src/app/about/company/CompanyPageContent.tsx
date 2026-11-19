import Link from "next/link";
import { PlatformCtas } from "@/components/common/Ctas";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/about/">Company</a> · 01 · About
            </div>
            <h1 className="sm">Most health data never
              <br />reaches a decision.
              <br />
              <span>We are changing that.</span>
            </h1>
            <p className="lede">Scanbo® is a connected point-of-care intelligence platform. We build the infrastructure that closes the gap between a health signal and a clinical decision, at the point of care, not after it.
            </p>
            <div className="pstat">
              <span className="chip">United States · Canada · India</span>
              <span className="chip">FDA 510(k) filing targeted Q1 2027</span>
            </div>
          </div>
          <div className="part ringpart">
            <img src="/assets/platform_ring.png" alt="The Scanbo platform" />
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Why we exist</div>
          <h2 style={{ marginTop: "14px" }}>A reading captured is not
            <br />a decision made.
          </h2>
          <div className="prose2">
            <div className="col">
              <h4>The problem we refuse to accept</h4>
              <p>A clinician captures a reading. It disappears into a notebook, a spreadsheet, or thin air.</p>
              <p>Across thousands of OPDs, community clinics and distributed care programs, the same failure repeats: health data is captured but not connected, measured but not interpreted, recorded but not acted on.
              </p>
              <p>The tools do not talk to each other. The patient pays the cost.</p>
            </div>
            <div className="col dark">
              <h4>The system we are building instead</h4>
              <p>One connected platform where every signal becomes insight, and every insight reaches the clinician.</p>
              <p>Vitals intelligence. Cardiac intelligence. Metabolic intelligence. Workflow intelligence.</p>
              <p>Each layer captures, interprets and connects. Together they form a clinical infrastructure that gets smarter with every deployment, every patient, every day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Company at a glance</div>
          <h2 style={{ marginTop: "14px" }}>Deployed. Revenue-generating.
            <br />Clinically evidenced.
          </h2>
          <p className="lede pintro">This is not a hypothesis. It is a deployed, revenue-generating platform with clinical evidence and commercial traction.</p>
          <div className="pcards">
            <div className="pcard">
              <div className="k">Deployed</div>
              <h4>750+ devices</h4>
              <p>Deployed across 650+ clinical settings, with 7M+ vital tests completed.</p>
            </div>
            <div className="pcard">
              <div className="k">Revenue</div>
              <h4>3 active revenue streams</h4>
              <p>Hardware · SaaS · AI licensing.</p>
            </div>
            <div className="pcard">
              <div className="k">Clinical evidence</div>
              <h4>Peer-reviewed research</h4>
              <p>Indexed on PubMed and ScienceDirect, and recognized by PATH.</p>
            </div>
            <div className="pcard">
              <div className="k">North America</div>
              <h4>FDA 510(k) · Health Canada</h4>
              <p>FDA 510(k) filing targeted Q1 2027. Health Canada clearance expected Q1 2027.</p>
            </div>
            <div className="pcard">
              <div className="k">Operating across</div>
              <h4>Three countries</h4>
              <p>United States · Canada · India.</p>
            </div>
            <div className="pcard">
              <div className="k">Platform</div>
              <h4>Six intelligence layers</h4>
              <p>Device, AI and workflow on one FHIR R5-native record.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Mission and vision</div>
          <h2 style={{ marginTop: "14px" }}>Why the work matters.</h2>
          <div className="prose2">
            <div className="col">
              <h4>Mission</h4>
              <p>From real-time patient data acquisition to intelligent interpretation, decision making and clinical action, integrated directly at the point of care. This marks the shift toward agentic AI in healthcare.
              </p>
            </div>
            <div className="col dark">
              <h4>Vision</h4>
              <p>A world where no patient loses time because the insight that could have helped them was trapped in a silo instead of reaching the clinician.
              </p>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="callout">
            <div>
              <div className="eyebrow">The next chapter</div>
              <h3>The U.S. and Canada are next. The platform is ready.</h3>
              <p>The Health Canada review is scheduled for Q4 2026, with clearance expected in Q1 2027, and the FDA 510(k) filing is targeted for Q1 2027. The same intelligence architecture running on 750+ devices across 650+ clinical settings is being brought to ACOs, health systems and value-based care programs in North America, without rebuilding from scratch.
              </p>
            </div>
            <Link className="btn btn-lime" href="/about/contact/#investors">Investor briefing →</Link>
          </div>
        </div>
      </section>
      <section className="light tight">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 style={{ marginTop: "14px" }}>Who we are, and how we work.</h2>
          <div className="six">
            <a href="/about/company/" className="on">
              <i>01</i>
              <b>Who we are</b>
            </a>
            <a href="/about/manufacturing-quality/">
              <i>02</i>
              <b>Manufacturing &amp; quality</b>
            </a>
            <a href="/about/data-philosophy/">
              <i>03</i>
              <b>Data philosophy</b>
            </a>
            <a href="/about/newsroom/">
              <i>04</i>
              <b>Newsroom</b>
            </a>
            <a href="/about/careers/">
              <i>05</i>
              <b>Careers</b>
            </a>
            <a href="/about/contact/">
              <i>06</i>
              <b>Contact</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Most health data never
            <br />reaches a decision. Ours does.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"AboutPage\", \"@id\": \"https://www.scanbo.com/about/company/#webpage\", \"url\": \"https://www.scanbo.com/about/company/\", \"name\": \"Who We Are | Scanbo\", \"description\": \"Scanbo® builds the infrastructure that closes the gap between a health signal and a clinical decision, at the point of care, not after it.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Who We Are\", \"item\": \"https://www.scanbo.com/about/company/\"}]}]}";
