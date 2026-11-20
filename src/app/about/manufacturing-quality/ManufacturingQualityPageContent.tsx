import Link from "next/link";
import { PlatformCtas } from "@/components/common/Ctas";
import {
  manufacturingCapabilities,
  manufacturingStandards,
  manufacturingWhyCards,
} from "@/data/about";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/about/">Company</a> · 02 · About
            </div>
            <h1>Built in-house.
              <br />
              <span>Built to standard.</span>
            </h1>
            <p className="lede">Scanbo® manufactures its own devices under direct quality control, with ISO 13485-aligned systems, MDSAP audit readiness and an active FDA 510(k) program: the operational foundation that makes consistent, scalable deployment possible.
            </p>
            <div className="pstat">
              <span className="chip">In-house manufacturing · Canada &amp; India</span>
              <span className="chip">ISO 13485 · MDSAP certified</span>
              <span className="chip">FDA 510(k) filing targeted Q1 2027</span>
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_device.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">02 · MANUFACTURING &AMP; QUALITY</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21V10l6 4V10l6 4V6h6v15z" />
                  <path d="M7 17h2M12 17h2M17 17h2" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Why it matters</div>
          <h2 style={{ marginTop: "14px" }}>Deployment quality starts
            <br />before the device ships.
          </h2>
          <p className="lede pintro">In regulated healthcare environments, manufacturing and quality control are foundational, not secondary. Consistency, traceability and audit readiness are what make it possible to deploy at scale, enter new markets and earn the trust of clinical and enterprise partners.
          </p>
          <div className="pcards n4">
            {manufacturingWhyCards.map((card) => (
              <div key={card.id} className="pcard">
                <div className="k">{card.kicker}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Core capabilities</div>
          <h2 style={{ marginTop: "14px" }}>Three disciplines,
            <br />one quality system.
          </h2>
          <div className="pcards">
            {manufacturingCapabilities.map((card) => (
              <div key={card.id} className="pcard">
                <div className="k">{card.kicker}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Facility and quality standards</div>
          <h2 style={{ marginTop: "14px" }}>The standards behind every device.</h2>
          <div className="pcards">
            {manufacturingStandards.map((card) => (
              <div key={card.id} className="pcard">
                <div className="k">{card.kicker}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="callout">
            <div>
              <div className="eyebrow">For partners and buyers</div>
              <h3>The same rigor that earns regulatory approval earns trust.</h3>
              <p>For healthcare providers, enterprise buyers and institutional partners, Scanbo®'s manufacturing and quality infrastructure is the operational assurance behind every device and deployment . In-house production, ISO 13485-aligned systems, and an active regulatory programme are the foundation that makes consistent, scalable deployment possible.
              </p>
            </div>
            <Link className="btn btn-lime" href="/about/contact/">Talk to our team →</Link>
          </div>
        </div>
      </section>
      <section className="light tight">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 style={{ marginTop: "14px" }}>Who we are, and how we work.</h2>
          <div className="six">
            <a href="/about/company/">
              <i>01</i>
              <b>Who we are</b>
            </a>
            <a href="/about/manufacturing-quality/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Built in-house.
            <br />Built to standard.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/about/manufacturing-quality/#webpage\", \"url\": \"https://www.scanbo.com/about/manufacturing-quality/\", \"name\": \"Manufacturing and Quality | ISO 13485, MDSAP | Scanbo\", \"description\": \"Scanbo® manufactures its own devices under direct quality control, with ISO 13485-aligned systems and MDSAP audit readiness.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Manufacturing and Quality\", \"item\": \"https://www.scanbo.com/about/manufacturing-quality/\"}]}]}";
