export function PageContent() {
  return (
    <main id="main">
      <header className="phero lhero">
        <div className="wrap">
          <div className="eyebrow">
            <a href="/legal/" style={{ color: "inherit" }}>Legal</a> · Legal · RxShield Safety Agent
          </div>
          <h1>Telehealth Policy</h1>
          <p className="lupd">Guidelines for using RxShield Safety Agent in telehealth and virtual care settings across the US and Canada. Last updated: March 1, 2026</p>
        </div>
      </header>
      <section className="white">
        <div className="wrap lwrap">
          <aside className="lnav">
            <b>Legal</b>
            <a href="/legal/privacy-policy/">Privacy Policy</a>
            <a href="/legal/terms-conditions/">Terms &amp; Conditions</a>
            <a href="/legal/cookie-preferences/">Cookie Preferences</a>
            <a href="/legal/hipaa-notice/">HIPAA Notice of Privacy Practices</a>
            <a href="/legal/gdpr-statement/">GDPR Statement</a>
            <a href="/legal/dpdp-compliance/">DPDP Compliance Statement</a>
            <a href="/legal/data-request/">Data Request</a>
            <a href="/legal/instructions-for-use/">Instructions for Use</a>
            <a href="/legal/telehealth/" className="on">Telehealth Policy</a>
            <a href="/legal/responsible-disclosure/">Responsible Disclosure</a>
            <a href="/legal/non-discrimination/">Non-Discrimination Policy</a>
            <a href="/legal/disclaimer/">Disclaimer</a>
            <a href="/legal/sitemap/">Sitemap</a>
          </aside>
          <article className="lbody">
            <h3>1. Scope</h3> 
            <div className="lbox"> 
              <p>RxShield Safety Agent is a reference tool, not a telehealth platform. It does not facilitate patient communication, video consultations, electronic prescribing, or any patient-facing service.
              </p> 
            </div> 
            <p>This policy applies to licensed healthcare professionals using RxShield Safety Agent in connection with telehealth or virtual care services in the US and Canada.
            </p> 
            <h3>2. Appropriate Use in Telehealth</h3> 
            <ul> 
              <li>Review published drug interaction data during a virtual consultation to support a prescribing decision</li> 
              <li>Generate a Decision ID documenting evidence consulted during a virtual visit</li> 
              <li>Access FDA label or Health Canada monograph summaries for drugs being considered</li> 
              <li>Support pharmacist medication reviews conducted via telehealth channels</li> 
            </ul> 
            <h3>3. Limitations in Telehealth Settings</h3> 
            <ul> 
              <li>RxShield Safety Agent does not have access to the patient's complete medication list unless manually entered. Interactions may be missed if medication reconciliation is incomplete.
              </li> 
              <li>The platform does not account for allergies, renal or hepatic impairment, pregnancy status, or other patient-specific factors.</li> 
              <li>The database may not reflect newly issued Health Canada Dear HCP letters or FDA Drug Safety Communications in real time.</li> 
            </ul> 
            <div className="lbox"> 
              <p>In emergency scenarios, always prioritize direct patient assessment and established emergency protocols. RxShield Safety Agent is not designed for emergency decision support.
              </p> 
            </div> 
            <h3>4. Jurisdictional Requirements</h3> 
            <h3>United States</h3> 
            <p>Telehealth prescribing is governed by state-specific laws and the Ryan Haight Act for controlled substances. Clinicians must comply with licensing and prescribing obligations in the state where the patient is located.
            </p> 
            <h3>Canada</h3> 
            <p>Virtual care prescribing is governed by the clinician's provincial licensing body. Clinicians must comply with provincial College guidelines on virtual prescribing.
            </p> 
            <h3>5. Standard of Care</h3> 
            <p>The standard of care applicable to a telehealth encounter is the same as, or may be higher than, an in-person visit. The use of RxShield Safety Agent does not modify this standard.
            </p> 
            <h3>6. Documentation</h3> 
            <p>Clinicians using RxShield Safety Agent in telehealth encounters are responsible for documenting their prescribing decisions in the patient record. RxShield Safety Agent Decision IDs may be used as supplementary documentation of evidence reviewed.
            </p> 
            <h3>7. EMR Integration</h3> 
            <p>Where RxShield Safety Agent is integrated with an EMR in a telehealth environment, the clinician remains responsible for reviewing and confirming any data passed between systems.
            </p> 
            <h3>8. Contact</h3> 
            <div className="lbox"> 
              <p>For questions about this policy, contact us at 
                <strong>
                  <a href="mailto:legal@scanbo.com">legal@scanbo.com</a>
                </strong>
              </p> 
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/legal/telehealth/#webpage\", \"url\": \"https://www.scanbo.com/legal/telehealth/\", \"name\": \"Telehealth Policy | RxShield | Scanbo\", \"description\": \"Guidelines for using the RxShield Safety Agent in telehealth and virtual care settings in the U.S. and Canada.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Legal\", \"item\": \"https://www.scanbo.com/legal/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Telehealth Policy\", \"item\": \"https://www.scanbo.com/legal/telehealth/\"}]}]}";
