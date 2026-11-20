import { LegalNav } from "@/components/common/LegalNav";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a>
          </div>
          <h1>Non-Discrimination Policy</h1>
          <p className="lupd">Last updated: March 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/non-discrimination/" />
          <article className="lbody">
            <h3>Our Commitment</h3> 
            <p>Scanbo® is committed to providing equal access to all individuals regardless of race, colour, national origin, age, disability, sex, gender identity, sexual orientation, religion, or any other characteristic protected under applicable law.
            </p> 
            <h3>Patients &amp; End Users</h3> 
            <p>Our clinical AI algorithms are trained and validated across diverse populations to minimise bias. Ambient Documentation Agent supports 11 languages to reduce language barriers. Our devices are designed for both urban and rural settings.
            </p> 
            <h3>Employees &amp; Partners</h3> 
            <p>Scanbo® provides equal employment opportunities to all. We do not discriminate in hiring, compensation, promotion, or termination based on any protected characteristic.
            </p> 
            <h3>Accessibility</h3> 
            <p>We strive to make digital products accessible in compliance with WCAG 2.1 AA. If you experience accessibility barriers, please contact us.</p> 
            <div className="lbox">
              <strong>Report a concern:</strong> 
              <a href="mailto:compliance@scanbo.com">compliance@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/non-discrimination/#webpage\", \"url\": \"https://www.scanbo.com/legal/non-discrimination/\", \"name\": \"Non-Discrimination Policy | Scanbo\", \"description\": \"Scanbo's commitment to non-discrimination and accessibility across its products and services.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Non-Discrimination Policy\", \"item\": \"https://www.scanbo.com/legal/non-discrimination/\"}]}]}";
