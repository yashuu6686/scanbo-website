import { LegalNav } from "@/components/common/LegalNav";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a>
          </div>
          <h1>Cookie Preferences</h1>
          <p className="lupd">Last updated: March 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/cookie-preferences/" />
          <article className="lbody">
            <h3>What Are Cookies?</h3> 
            <p>Cookies are small text files placed on your device when you visit our website. They help us operate the site, understand how it is used, and personalise your experience.
            </p> 
            <h3>Types of Cookies We Use</h3> 
            <div className="lgrid"> 
              <div className="lbox">
                <h4>Essential</h4>
                <p>Required for the website to function. Cannot be disabled. Includes session management and security tokens.</p>
              </div> 
              <div className="lbox">
                <h4>Analytics</h4>
                <p>Help us understand how visitors interact with our website. Data is aggregated and anonymised.</p>
              </div> 
              <div className="lbox">
                <h4>Functional</h4>
                <p>Remember your preferences such as language, region, and login state to improve your experience.</p>
              </div> 
              <div className="lbox">
                <h4>Marketing</h4>
                <p>Used to serve relevant content and measure campaign effectiveness. Requires explicit consent.</p>
              </div> 
            </div> 
            <h3>Managing Your Preferences</h3> 
            <p>You can update cookie preferences at any time via your browser settings or by contacting us. Disabling certain cookies may affect site functionality.
            </p> 
            <div className="lbox">
              <strong>Cookie queries:</strong> 
              <a href="mailto:privacy@scanbo.com">privacy@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/cookie-preferences/#webpage\", \"url\": \"https://www.scanbo.com/legal/cookie-preferences/\", \"name\": \"Cookie Preferences | Scanbo\", \"description\": \"The cookies the Scanbo website uses and how to manage your preferences.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Cookie Preferences\", \"item\": \"https://www.scanbo.com/legal/cookie-preferences/\"}]}]}";
