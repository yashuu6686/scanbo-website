import { LegalNav } from "@/components/common/LegalNav";
import { sitemapGroups } from "@/data/sitemap";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Navigation
          </div>
          <h1>Sitemap</h1>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/sitemap/" />
          <article className="lbody">
            <p>Every page on scanbo.com, grouped by section.</p>
            <div className="lgrid">
              {sitemapGroups.map((group) => (
                <div className="lbox" key={group.id}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.id}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/sitemap/#webpage\", \"url\": \"https://www.scanbo.com/legal/sitemap/\", \"name\": \"Sitemap | Scanbo\", \"description\": \"Every page on scanbo.com, grouped by section: platform, who we serve, insights, about and legal.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Sitemap\", \"item\": \"https://www.scanbo.com/legal/sitemap/\"}]}]}";
