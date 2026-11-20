import { legalIndexCards } from "@/data/navigation";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Legal and 
            <span>compliance.</span>
          </h1>
          <p className="lede">Our policies, privacy notices and medical device information, in one place.</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap">
          <div className="lcards">
            {legalIndexCards.map((item) => (
              <a key={item.id} className="lcard" href={item.href}>
                <small>{item.category}</small>
                <b>{item.title}</b>
                <em>{item.cta}</em>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"CollectionPage\", \"@id\": \"https://www.scanbo.com/legal/#webpage\", \"url\": \"https://www.scanbo.com/legal/\", \"name\": \"Legal and Compliance | Scanbo\", \"description\": \"Scanbo's privacy, terms, compliance and medical device notices, including HIPAA, GDPR and DPDP statements.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}]}]}";
