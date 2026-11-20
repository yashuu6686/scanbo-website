import { PlatformCtas } from "@/components/common/Ctas";
import {
  insightsBurdenStats,
  insightsEvidenceRows,
  insightsExploreLinks,
  insightsHeroStats,
  insightsReimbursementCodes,
  insightsReimbursementStats,
  insightsSettingChips,
  insightsStoryTeasers,
} from "@/data/insights";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Insights</div>
          <h1>The evidence behind 
            <span>the platform.</span>
          </h1>
          <p className="lede">Published research, real deployments and U.S. reimbursement pathways: everything you need to evaluate Scanbo, in one place.</p>
        </div>
      </header>
      <div className="stats">
        <div className="wrap">
          {insightsHeroStats.map((stat) => (
            <div className="stat" key={stat.id}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Explore insights</div>
          <h2 style={{ marginTop: "14px" }}>Three ways to evaluate Scanbo.</h2>
          <div className="plinks n3">
            {insightsExploreLinks.map((link) => (
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
      <section className="white" id="studies">
        <div className="wrap">
          <div className="eyebrow">Clinical studies</div>
          <h2 style={{ marginTop: "14px" }}>Validated at the point of care.</h2>
          <p className="lede pintro">Peer-reviewed research indexed on PubMed and ScienceDirect, and recognition from PATH and WHO-aligned global health programs.</p>
          <div className="evlist">
            {insightsEvidenceRows.map((row) => (
              <a className="evrow" href={row.href} rel="noopener" key={row.id}>
                <span className="evs">{row.source}</span>
                <b>{row.title}</b>
                <em>{row.cta}</em>
              </a>
            ))}
          </div>
          <a className="evmore" href="/insights/clinical-studies/">All clinical studies →</a>
        </div>
      </section>
      <section className="light" id="stories">
        <div className="wrap">
          <div className="eyebrow">Customer stories</div>
          <h2 style={{ marginTop: "14px" }}>In their words.</h2>
          <div className="stories">
            {insightsStoryTeasers.map((story) => (
              <div className={story.dark ? "story dark" : "story"} key={story.id}>
                <div className="res">{story.result}</div>
                <div>
                  <blockquote>{story.quote}</blockquote>
                  <cite>{story.cite} 
                    <span>{story.citeDetail}</span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
          <a className="evmore" href="/insights/customer-stories/">All customer stories →</a>
        </div>
      </section>
      <section className="white" id="reimbursement">
        <div className="wrap">
          <div className="eyebrow">Reimbursement guide</div>
          <h2 style={{ marginTop: "14px" }}>Built for existing U.S. reimbursement.</h2>
          <p className="lede pintro">Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. No new CPT code required.</p>
          <div className="pgap"></div>
          <div className="pstats n3" style={{ marginTop: 0 }}>
            {insightsReimbursementStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="codes">
            {insightsReimbursementCodes.map((code) => (
              <div className="code" key={code.id}>
                <b>{code.category}</b>
                <h4>{code.codes}</h4>
                <p>{code.description}</p>
              </div>
            ))}
          </div>
          <p className="fine2">Based on 2026 CMS national average non-facility rates. Subject to FDA clearance and payer coverage; for orientation, not billing advice.</p>
          <a className="evmore" href="/insights/reimbursement-guide/">Read the reimbursement guide →</a>
        </div>
      </section>
      <section id="burden" className="light">
        <div className="wrap">
          <div className="eyebrow">The global burden</div>
          <h2 style={{ marginTop: "14px" }}>A global problem, growing fastest where labs are scarce.</h2>
          <div className="burden3">
            {insightsBurdenStats.map((stat) => (
              <div className={stat.highlight ? "bt hi" : "bt"} key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="src">Sources: World Health Organization, noncommunicable diseases fact sheet; IDF Diabetes Atlas, 11th edition (2025).</p>
        </div>
      </section>
      <section className="white tight">
        <div className="wrap">
          <div className="eyebrow">Where Scanbo works today</div>
          <h2 style={{ marginTop: "14px" }}>Wherever care happens.</h2>
          <div className="pchips">
            {insightsSettingChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
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

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/#webpage\", \"url\": \"https://www.scanbo.com/insights/\", \"name\": \"Insights | Evidence, Stories and Reimbursement | Scanbo\", \"description\": \"Published research, real deployments and U.S. reimbursement pathways: the evidence behind the Scanbo platform, in one place.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}]}]}";
