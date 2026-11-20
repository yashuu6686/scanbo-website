import { CountryPhoneFields } from "@/components/forms/CountryPhoneFields";

export function PageContent() {
  return (
    <main id="main">
      <header className="phero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Get in 
            <span>touch.</span>
          </h1>
          <p className="lede">Whether you are a clinician, health system, investor or partner, we would like to hear from you.</p>
        </div>
      </header>
      <section className="tight" style={{ paddingTop: "10px" }}>
        <div className="wrap contact">
          <form className="form" data-form="contact" noValidate>
            <div className="fields">
              <h3>Send us a message</h3>
              <div className="f2">
                <div className="fld">
                  <label htmlFor="firstName">First name *</label>
                  <input id="firstName" name="firstName" type="text" placeholder="First name" required autoComplete="given-name" inputMode="text" pattern="[A-Za-z][A-Za-z\s'.\-]*" title="Letters only — no numbers" />
                  <div className="err" role="alert"></div>
                </div>
                <div className="fld">
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Last name" required autoComplete="family-name" inputMode="text" pattern="[A-Za-z][A-Za-z\s'.\-]*" title="Letters only — no numbers" />
                  <div className="err" role="alert"></div>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@organization.com" required autoComplete="email" />
                <div className="err" role="alert"></div>
              </div>
              <CountryPhoneFields />
              <div className="fld">
                <label htmlFor="organisation">Organization</label>
                <input id="organisation" name="organisation" type="text" placeholder="Hospital, clinic, fund, company…" autoComplete="organization" />
                <div className="err" role="alert"></div>
              </div>
              <div className="fld">
                <label htmlFor="role">I am a… *</label>
                <select id="role" name="role" required>
                  <option value="">Select your role</option>
                  <option value="Physician / Clinician">Physician / clinician</option>
                  <option value="Hospital or Health System">Hospital or health system</option>
                  <option value="Community Health Organisation">Community health organization</option>
                  <option value="ACO / Value-Based Care Programme">ACO / value-based care program</option>
                  <option value="Investor">Investor</option>
                  <option value="Strategic Partner">Strategic partner</option>
                  <option value="Researcher / Academic">Researcher / academic</option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Press / Media">Press / media</option>
                  <option value="Other">Other</option>
                </select>
                <div className="err" role="alert"></div>
              </div>
              <div className="fld">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="How can we help? Tell us about your context and what you are looking for." required></textarea>
                <div className="err" role="alert"></div>
              </div>
              <input className="hp" type="text" name="website_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="btn btn-lime" type="submit">Send message →</button>
              <p className="fnote">We respond to every message, typically within 1–2 business days. See our 
                <a href="/legal/privacy-policy/" style={{ color: "var(--mid)", fontWeight: 700 }}>Privacy Policy</a>.
              </p>
              <div className="ferr" role="alert"></div>
            </div>
            <div className="ok" role="status">
              <h3>Thank you.</h3>
              <p>Your message has been sent. Our team will be in touch within 1–2 business days.</p>
            </div>
          </form>
          <div className="cside">
            <div className="cbox">
              <b>General enquiries</b>
              <h4>
                <a href="mailto:info@scanbo.com">info@scanbo.com</a>
              </h4>
              <p>Questions about Scanbo and the platform.</p>
            </div>
            <div className="cbox">
              <b>Partnerships &amp; clinical</b>
              <h4>
                <a href="mailto:partnerships@scanbo.com">partnerships@scanbo.com</a>
              </h4>
              <p>Health systems, programs, distributors and walkthroughs.</p>
            </div>
            <div className="cbox" id="investors">
              <b>Investor relations</b>
              <h4>
                <a href="mailto:ir@scanbo.com">ir@scanbo.com</a>
              </h4>
              <p>Investor materials and briefings with management.</p>
            </div>
            <div className="cbox">
              <b>Press &amp; media</b>
              <h4>
                <a href="mailto:press@scanbo.com">press@scanbo.com</a>
              </h4>
              <p>Interviews, images and company information.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Offices</div>
          <h2 style={{ marginTop: "14px" }}>Three countries. One team.</h2>
          <div className="offices">
            <div className="office hq">
              <b>
                <img className="oflag" src="/assets/flags/ca.png" alt="" width={22} height={15} />
                Canada · Head office
              </b>
              <h4>
                Scanbo
                <sup className="tm">®</sup> Holdings Inc.
              </h4>
              <p>1048 165 Street
                <br />Surrey, BC V4A 9A2, Canada
              </p>
              <span>+1 (855) 472-2626</span>
            </div>
            <div className="office">
              <b>
                <img className="oflag" src="/assets/flags/us.png" alt="" width={22} height={15} />
                United States
              </b>
              <h4>Scanbo Inc.</h4>
              <p>4400 Buffalo Gap Rd., Suite 1500
                <br />Abilene, Texas 79606, USA
              </p>
              <span>+1 (855) 472-2626</span>
            </div>
            <div className="office">
              <b>
                <img className="oflag" src="/assets/flags/in.png" alt="" width={22} height={15} />
                India
              </b>
              <h4>Scanbo India Private Limited</h4>
              <p>B 403–406, Pragati Empire (IT Park)
                <br />Sudama Chowk Road, Surat
                <br />Gujarat 394101, India
              </p>
              <span>+91 77788 01292
                <br />Tech support: +91 93726 00050
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="white tight">
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
            <a href="/about/newsroom/">
              <i>04</i>
              <b>Newsroom</b>
            </a>
            <a href="/about/careers/">
              <i>05</i>
              <b>Careers</b>
            </a>
            <a href="/about/contact/" className="on">
              <i>06</i>
              <b>Contact</b>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"Organization\", \"@id\": \"https://www.scanbo.com/#organization\", \"name\": \"Scanbo\", \"legalName\": \"Scanbo Technologies Inc.\", \"url\": \"https://www.scanbo.com/\", \"logo\": \"https://www.scanbo.com/assets/logo-512.png\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"1048 165 Street\", \"addressLocality\": \"Surrey\", \"addressRegion\": \"BC\", \"postalCode\": \"V4A 9A2\", \"addressCountry\": \"CA\"}, \"sameAs\": [\"https://www.linkedin.com/company/scanbo/\"], \"contactPoint\": [{\"@type\": \"ContactPoint\", \"contactType\": \"customer support\", \"email\": \"info@scanbo.com\", \"telephone\": \"+1-855-472-2626\", \"areaServed\": [\"CA\", \"US\"]}, {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"partnerships@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"investor relations\", \"email\": \"ir@scanbo.com\"}, {\"@type\": \"ContactPoint\", \"contactType\": \"press\", \"email\": \"press@scanbo.com\"}]}, {\"@type\": \"ContactPage\", \"@id\": \"https://www.scanbo.com/about/contact/#webpage\", \"url\": \"https://www.scanbo.com/about/contact/\", \"name\": \"Contact Scanbo | Book a Walkthrough\", \"description\": \"Book a platform walkthrough, ask about partnerships or reach investor relations and press. Scanbo has offices in Canada, the United States and India.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Contact Scanbo\", \"item\": \"https://www.scanbo.com/about/contact/\"}]}]}";
