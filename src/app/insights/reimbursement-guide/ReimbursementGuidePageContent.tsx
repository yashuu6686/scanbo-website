import { PlatformCtas } from "@/components/common/Ctas";
import {
  reimbursementD8PathwayRows,
  reimbursementD8RevenueRows,
  reimbursementHeroChips,
  reimbursementProductLinks,
  reimbursementRateGroups,
  reimbursementRevenueStats,
  reimbursementSmartScalePathwayRows,
  reimbursementSmartScaleRevenueRows,
} from "@/data/reimbursement";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 03
            </div>
            <h1>Built for existing
              <br />
              <span>U.S. reimbursement.</span>
            </h1>
            <p className="lede">Scanbo® D8 and Smart Scale qualify under existing Medicare SMBP and RPM billing frameworks. Deploy now using established pathways, with no new code required.
            </p>
            <div className="pstat">
              {reimbursementHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="artcard uiwrap">
              <span className="bign">03 · REIMBURSEMENT GUIDE</span>
              <div className="ui">
                <div className="uh">
                  <b>2026 Medicare rates</b>
                  <em className="ok">No new code</em>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99453</i>RPM setup
                  </span>
                  <b>$22.00</b>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99454</i>Device supply · monthly
                  </span>
                  <b>$47.06</b>
                </div>
                <div className="ur">
                  <span>
                    <i>CPT 99457</i>RPM management · monthly
                  </span>
                  <b>$51.77</b>
                </div>
                <div className="ur tot">
                  <span>Core RPM per patient, per year</span>
                  <b>~$1,208</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Best-fit code pathways</div>
          <h2 style={{ marginTop: "14px" }}>Two products. Established codes.</h2>
          <p className="lede pintro">CMS already recognizes weight, blood pressure, pulse oximetry and respiratory flow rate as billable RPM parameters: the exact parameters Scanbo® captures. Providers deploy Scanbo® inside billing frameworks they already use.
          </p>
          <div className="specs">
            <div className="spec">
              <h4>Scanbo® D8 · BP, cardiometabolic and rhythm monitoring</h4>
              <dl>
                {reimbursementD8PathwayRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="spec">
              <h4>Scanbo® Smart Scale · connected weight monitoring</h4>
              <dl>
                {reimbursementSmartScalePathwayRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="pfoot">D8 has the broadest reimbursement story of the two; Smart Scale is a clean RPM-first entry point.</p>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">2026 Medicare reimbursement rates</div>
          <h2 style={{ marginTop: "14px" }}>What each code pays.</h2>
          <p className="lede pintro">National average non-facility rates · Source: CMS Physician Fee Schedule · Effective January 1, 2026</p>
          <div className="rates">
            {reimbursementRateGroups.map((group) => (
              <div className="rgrp" key={group.id}>
                <h4>{group.title}</h4>
                {group.rows.map((row) => (
                  <div className="rrow" key={row.id}>
                    <b>{row.code}</b>
                    <span>{row.description}</span>
                    <em>{row.cadence}</em>
                    <strong>{row.amount}</strong>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Revenue model</div>
          <h2 style={{ marginTop: "14px" }}>What an ACO can bill.</h2>
          <p className="lede pintro">Illustrative revenue per year, based on 2026 CMS national average non-facility rates. Key billing rule: RPM codes bill once per patient per 30-day period, regardless of device count, so D8 and Smart Scale on the same patient are one RPM billing set. The figures below model separate patient cohorts per product.
          </p>
          <div className="specs">
            <div className="spec">
              <h4>Scanbo® D8 · per patient, per year</h4>
              <dl>
                {reimbursementD8RevenueRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="spec">
              <h4>Scanbo® Smart Scale · per patient, per year</h4>
              <dl>
                {reimbursementSmartScaleRevenueRows.map((row) => (
                  <div className="row" key={row.id}>
                    <dt>{row.dt}</dt>
                    <dd>{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            {reimbursementRevenueStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pnote">
            <b>About these figures</b>
            <p>Based on 2026 Medicare national average non-facility rates. Core RPM codes only (99453, 99454, 99457); RPM billed once per patient per 30-day period regardless of the number of devices. Excludes 99458, 99091, SMBP codes and ECG adjuncts. Rates vary by region. Subject to FDA clearance and payer coverage; for orientation, not billing advice.
            </p>
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Reimbursable products</div>
          <h2 style={{ marginTop: "14px" }}>The layers that bill.</h2>
          <div className="plinks n3">
            {reimbursementProductLinks.map((link) => (
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
            <a href="/insights/clinical-studies/">
              <i>01</i>
              <b>Clinical studies</b>
            </a>
            <a href="/insights/customer-stories/">
              <i>02</i>
              <b>Customer stories</b>
            </a>
            <a href="/insights/reimbursement-guide/" className="on">
              <i>03</i>
              <b>Reimbursement guide</b>
            </a>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div className="eyebrow">See it for yourself</div>
          <h2 style={{ marginTop: "14px" }}>Ready to deploy Scanbo
            <br />in your ACO or clinic?
          </h2>
          <p className="lede">Talk to our U.S. healthcare team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/reimbursement-guide/#webpage\", \"url\": \"https://www.scanbo.com/insights/reimbursement-guide/\", \"name\": \"RPM and SMBP Reimbursement Guide | Scanbo\", \"description\": \"Scanbo® D8 and Smart Scale fit existing Medicare SMBP and RPM billing frameworks. A guide to the codes and pathways, with no new code required.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"RPM and SMBP Reimbursement Guide\", \"item\": \"https://www.scanbo.com/insights/reimbursement-guide/\"}]}]}";
