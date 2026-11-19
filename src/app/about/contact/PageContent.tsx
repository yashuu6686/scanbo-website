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
                  <input id="firstName" name="firstName" type="text" placeholder="First name" required autoComplete="given-name" />
                  <div className="err" role="alert"></div>
                </div>
                <div className="fld">
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Last name" required autoComplete="family-name" />
                  <div className="err" role="alert"></div>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@organization.com" required autoComplete="email" />
                <div className="err" role="alert"></div>
              </div>
              <div className="f2">
                <div className="fld">
                  <label htmlFor="country">Country *</label>
                  <select id="country" name="country" required>
                    <option value="">Select country</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cabo Verde</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo (DRC)</option>
                    <option>Congo (Republic)</option>
                    <option>Costa Rica</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Greece</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>North Korea</option>
                    <option>North Macedonia</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestine</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>São Tomé and Príncipe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Korea</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Timor-Leste</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican City</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                  <div className="err" role="alert"></div>
                </div>
                <div className="fld">
                  <label htmlFor="phone">Mobile number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="Digits only" required inputMode="numeric" autoComplete="tel-national" />
                  <div className="err" role="alert"></div>
                </div>
              </div>
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
              <h4>info@scanbo.com</h4>
              <p>Questions about Scanbo and the platform.</p>
            </div>
            <div className="cbox">
              <b>Partnerships &amp; clinical</b>
              <h4>partnerships@scanbo.com</h4>
              <p>Health systems, programs, distributors and walkthroughs.</p>
            </div>
            <div className="cbox" id="investors">
              <b>Investor relations</b>
              <h4>ir@scanbo.com</h4>
              <p>Investor materials and briefings with management.</p>
            </div>
            <div className="cbox">
              <b>Press &amp; media</b>
              <h4>press@scanbo.com</h4>
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
              <b>Canada · Head office</b>
              <h4>Scanbo Technologies Inc.</h4>
              <p>1048 165 Street
                <br />Surrey, BC V4A 9A2, Canada
              </p>
              <span>+1 (855) 472-2626</span>
            </div>
            <div className="office">
              <b>United States</b>
              <h4>Scanbo Inc.</h4>
              <p>4400 Buffalo Gap Rd., Suite 1500
                <br />Abilene, Texas 79606, USA
              </p>
              <span>+1 (855) 472-2626</span>
            </div>
            <div className="office">
              <b>India</b>
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
