import { LegalNav } from "@/components/common/LegalNav";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Security
          </div>
          <h1>Responsible Disclosure</h1>
          <p className="lupd">Last updated: March 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <LegalNav activeHref="/legal/responsible-disclosure/" />
          <article className="lbody">
            <h3>Our Commitment to Security</h3> 
            <p>We welcome reports from security researchers and clinicians about potential vulnerabilities in our products and systems. We take security of medical devices and patient data extremely seriously.
            </p> 
            <h3>Scope</h3> 
            <ul> 
              <li>Scanbo® web apps and APIs (scanbo.ai, scanbo.ai/rxshield, scanbo.ai/ambient)</li> 
              <li>Scanbo® D8 and Smart Scale firmware and Bluetooth interfaces</li> 
              <li>Scanbo® EMR platform and connected infrastructure</li> 
              <li>Clinical AI models and data pipelines</li> 
            </ul> 
            <h3>How to Report</h3> 
            <p>Please report 
              <strong>before public disclosure</strong> to allow us to investigate and remediate. We will acknowledge within 5 business days, investigate and keep you informed, and will not pursue legal action against good-faith researchers.
            </p> 
            <h3>Out of Scope</h3> 
            <ul> 
              <li>Social engineering attacks on Scanbo® staff or customers</li> 
              <li>Physical attacks on devices or infrastructure</li> 
              <li>Denial-of-service attacks</li> 
              <li>Accessing real patient data without authorisation</li> 
            </ul> 
            <div className="lbox">
              <strong>Security Team:</strong> 
              <a href="mailto:security@scanbo.com">security@scanbo.com</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/responsible-disclosure/#webpage\", \"url\": \"https://www.scanbo.com/legal/responsible-disclosure/\", \"name\": \"Responsible Disclosure | Scanbo\", \"description\": \"How to report a security vulnerability to Scanbo, and what we commit to in return.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Responsible Disclosure\", \"item\": \"https://www.scanbo.com/legal/responsible-disclosure/\"}]}]}";
