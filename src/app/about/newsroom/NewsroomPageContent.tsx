import { Fragment } from "react";
import { PlatformCtas } from "@/components/common/Ctas";
import { newsYearGroups } from "@/data/newsroom";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/about/">Company</a> · 04 · About
            </div>
            <h1>Covered globally.
              <br />
              <span>Recognized by industry.</span>
            </h1>
            <p className="lede">Scanbo® has earned coverage across major business, health and technology media, from executive interviews and authored articles to multi-outlet national wires and international trade press.
            </p>
            <div className="pstat">
              <span className="chip">40+ media placements</span>
              <span className="chip">India · Canada · UAE · Global</span>
              <span className="chip">2019–2026</span>
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_newsroom.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">04 · NEWSROOM</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="14" height="16" rx="2" />
                  <path d="M17 8h3v10a2 2 0 0 1-2 2" />
                  <path d="M7 8h6M7 12h6M7 16h4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Press and media coverage</div>
          <h2 style={{ marginTop: "14px" }}>In the news.</h2>
          {newsYearGroups.map((group) => (
            <Fragment key={group.year}>
              <div className="nyear">
                <h3>{group.year}</h3>
                <span>{group.countLabel}</span>
              </div>
              <div className="news">
                {group.articles.map((article) => (
                  <a
                    key={article.id}
                    target="_blank"
                    className="ncard"
                    href={article.href}
                    rel="noopener noreferrer"
                  >
                    <div className="nm">
                      {article.date} · {article.outlet}
                    </div>
                    <h4>{article.title}</h4>
                    <p>{article.summary}</p>
                    <div className="nt">
                      {article.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <em>{article.cta ?? "Read article →"}</em>
                  </a>
                ))}
              </div>
            </Fragment>
          ))}
          <div className="pgap"></div>
          <div className="pnote">
            <b>Press and media</b>
            <p>For interviews, images and company information, contact press@scanbo.com.</p>
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
            <a href="/about/manufacturing-quality/">
              <i>02</i>
              <b>Manufacturing &amp; quality</b>
            </a>
            <a href="/about/data-philosophy/">
              <i>03</i>
              <b>Data philosophy</b>
            </a>
            <a href="/about/newsroom/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>Press and media
            <br />inquiries.
          </h2>
          <p className="lede">Reach our team at press@scanbo.com.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"CollectionPage\", \"@id\": \"https://www.scanbo.com/about/newsroom/#webpage\", \"url\": \"https://www.scanbo.com/about/newsroom/\", \"name\": \"Newsroom | Scanbo in the News\", \"description\": \"Scanbo in the news: executive interviews, authored articles and coverage across business, health and technology media.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Newsroom\", \"item\": \"https://www.scanbo.com/about/newsroom/\"}]}]}";
