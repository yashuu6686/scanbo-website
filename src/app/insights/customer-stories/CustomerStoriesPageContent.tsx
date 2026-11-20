import { HeroCtas, PlatformCtas } from "@/components/common/Ctas";
import {
  customerStoriesAggregateStats,
  customerStoriesAllList,
  customerStoriesFeatured,
  customerStoriesHeroChips,
  customerStoriesPartnerChips,
  customerStoriesQuotes,
} from "@/data/customerStories";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/insights/">Insights</a> · 02
            </div>
            <h1>Real outcomes,
              <br />
              <span>in real care settings.</span>
            </h1>
            <p className="lede">How real organizations turn point-of-care intelligence into clinical and operational outcomes.</p>
            <div className="pstat">
              {customerStoriesHeroChips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <HeroCtas />
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_stories.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">02 · CUSTOMER STORIES</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <path d="M4 5h16v11H8l-4 4z" />
                  <path d="M8 9h8M8 12h5" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Deployed across</div>
          <h2 style={{ marginTop: "14px" }}>In daily use.</h2>
          <div className="pchips" aria-label="Deployed partners">
            {customerStoriesPartnerChips.map((chip) =>
              chip.more ? (
                <span className="pchips-more" key={chip.id}>
                  {chip.label}
                </span>
              ) : (
                <span key={chip.id}>
                  {chip.imgSrc ? (
                    <img
                      src={chip.imgSrc}
                      alt=""
                      width={chip.imgWidth}
                      height={chip.imgHeight}
                    />
                  ) : null}
                  {chip.badge ? (
                    <em className="pchip-badge">{chip.badge}</em>
                  ) : null}
                  {chip.label}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">Featured stories</div>
          <h2 style={{ marginTop: "14px" }}>Three deployments, three outcomes.</h2>
          <div className="stories2">
            {customerStoriesFeatured.map((story) => (
              <div className="story2" key={story.id}>
                <div>
                  <div className="shead">
                    {story.logoSrc ? (
                      <img
                        className="slog"
                        src={story.logoSrc}
                        alt={story.logoAlt}
                        width={120}
                        height={40}
                      />
                    ) : null}
                    {story.badgeTitle ? (
                      <div
                        className={story.badgeClassName}
                        aria-hidden="true"
                      >
                        <b>{story.badgeTitle}</b>
                        <span>{story.badgeSubtitle}</span>
                      </div>
                    ) : null}
                    <div>
                      <h4>{story.name}</h4>
                      <div className="splace">{story.place}</div>
                    </div>
                  </div>
                  <span className="stag">{story.tag}</span>
                  <h3>{story.headline}</h3>
                  <p>{story.body}
                  </p>
                  <div className="pmeta">{story.meta}</div>
                </div>
                <div className="sstats">
                  {story.stats.map((stat) => (
                    <div key={stat.id}>
                      <b>{stat.value}</b>
                      <span>{stat.label}</span>
                      <em>{stat.detail}</em>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="pstats n4" style={{ marginTop: 0 }}>
            {customerStoriesAggregateStats.map((stat) => (
              <div key={stat.id}>
                <b>{stat.value}</b>
                <span>
                  {stat.id === 6 ? (
                    <>
                      Peer-reviewed
                      <br />
                      publications
                    </>
                  ) : (
                    stat.label
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">From the field</div>
          <h2 style={{ marginTop: "14px" }}>In their words.</h2>
          <div className="qwall">
            {customerStoriesQuotes.map((item) => (
              <div className="qw" key={item.id}>
                <blockquote>{item.quote}</blockquote>
                <cite>{item.cite}
                  <span>{item.detail}</span>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="white">
        <div className="wrap">
          <div className="eyebrow">All stories</div>
          <h2 style={{ marginTop: "14px" }}>Every deployment.</h2>
          <div className="slist">
            {customerStoriesAllList.map((item) => (
              <div className="sl" key={item.id}>
                <div className="k">{item.k}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{item.stack}</span>
              </div>
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
            <a href="/insights/customer-stories/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>What would Scanbo look like
            <br />in your care setting?
          </h2>
          <p className="lede">We work with health systems, chronic care providers, diagnostic programs and community health organizations.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/insights/customer-stories/#webpage\", \"url\": \"https://www.scanbo.com/insights/customer-stories/\", \"name\": \"Customer Stories | Scanbo\", \"description\": \"How hospitals, programs and clinics turn Scanbo's point-of-care intelligence into clinical and operational outcomes.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Insights\", \"item\": \"https://www.scanbo.com/insights/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Customer Stories\", \"item\": \"https://www.scanbo.com/insights/customer-stories/\"}]}]}";
