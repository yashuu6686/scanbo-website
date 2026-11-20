import { PlatformCtas } from "@/components/common/Ctas";
import {
  clinicalStudiesHeroChips,
  clinicalStudiesProductLinks,
  clinicalStudiesPublications,
} from "@/data/clinicalStudies";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 01
            </div>
            <h1>Validated at the
              <br />
              <span>point of care.</span>
            </h1>
            <p className="lede">Five peer-reviewed studies confirm Scanbo®'s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect, and recognized by PATH and WHO-aligned global health programs.
            </p>
            <div className="pstat">
              {clinicalStudiesHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_cuff.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">01 · CLINICAL STUDIES</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3h9l4 4v14H6z" />
                  <path d="M15 3v4h4" />
                  <path d="M9 13l2 2 4-4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Published research</div>
          <h2 style={{ marginTop: "14px" }}>The evidence, source by source.</h2>
          <div className="pubs">
            {clinicalStudiesPublications.map((pub) => (
              <a
                className="pub"
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                key={pub.id}
              >
                <div className="psrc">{pub.source}</div>
                <div className="k">{pub.k}</div>
                <h4>{pub.title}</h4>
                <p>{pub.description}
                </p>
                <div className="pmeta">{pub.meta}</div>
                <span className="pub-go">{pub.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Validated products</div>
          <h2 style={{ marginTop: "14px" }}>The layers behind the evidence.</h2>
          <div className="plinks n2">
            {clinicalStudiesProductLinks.map((link) => (
              <a className="plink" href={link.href} key={link.id}>
                <i>{link.num}</i>
                <b>{link.title}</b>
                <span>{link.description}</span>
                <em>{link.cta}</em>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">Insights</div>
          <h2 style={{ marginTop: "14px" }}>Evidence, stories and reimbursement.</h2>
          <div className="six">
            <a href="/insights/clinical-studies/" className="on">
              <i>01</i>
              <b>Clinical studies</b>
            </a>
            <a href="/insights/customer-stories/">
              <i>02</i>
              <b>Customer stories</b>
            </a>
            <a href="/insights/reimbursement-guide/">
              <i>03</i>
              <b>Reimbursement guide</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>See the evidence
            <br />in your workflow.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/clinical-studies/#webpage\", \"url\": \"https://www.scanbo.com/insights/clinical-studies/\", \"name\": \"Clinical Studies | Peer-Reviewed Evidence | Scanbo\", \"description\": \"Peer-reviewed studies of Scanbo®'s diagnostic accuracy in real-world deployments, indexed on PubMed and ScienceDirect and recognized by PATH.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Clinical Studies\", \"item\": \"https://www.scanbo.com/insights/clinical-studies/\"}]}]}";
