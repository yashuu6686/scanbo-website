import { PlatformCtas } from "@/components/common/Ctas";
import { CountryPhoneFields } from "@/components/forms/CountryPhoneFields";
import { careerJobs, careerRoleOptions } from "@/data/careers";

export function PageContent() {
  return (
    <main id="main">
      <header className="pghero">
        <div className="wrap">
          <div>
            <div className="crumb">
              <a href="/about/">Company</a> · 05 · About
            </div>
            <h1>Build the future of
              <br />
              <span>point-of-care intelligence.</span>
            </h1>
            <p className="lede">A small, focused team building clinical devices, AI and software used in real healthcare settings. If you want your work to matter, we are hiring.
            </p>
            <div className="pstat">
              <span className="chip">8 open roles</span>
              <span className="chip">Surat, Gujarat, India · On-site</span>
            </div>
          </div>
          <div className="part">
            <div className="photocard">
              <img src="/assets/ph_field.jpg" alt="" style={{ objectPosition: "center" }} />
              <span className="bign">05 · CAREERS</span>
              <span className="phb">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="light">
        <div className="wrap">
          <div className="eyebrow">Open positions</div>
          <h2 style={{ marginTop: "14px" }}>Eight roles, one mission.</h2>
          <div className="jobs">
            {careerJobs.map((job) => (
              <a key={job.id} className="job" href="#apply" data-position={job.title}>
                <b>{job.title}</b>
                <span>{job.detail}</span>
                <small>{job.location}</small>
                <em>Apply →</em>
              </a>
            ))}
          </div>
          <div className="pgap"></div>
          <div className="callout">
            <div>
              <div className="eyebrow">Questions?</div>
              <h3>Reach the team directly.</h3>
              <p>Send your CV and a short note about which role you are applying for.</p>
            </div>
            <a className="btn btn-lime" href="mailto:hr@scanbo.com">hr@scanbo.com →</a>
          </div>
        </div>
      </section>
      <section id="apply" className="light">
        <div className="wrap applywrap">
          <div>
            <div className="eyebrow">Apply</div>
            <h2 style={{ marginTop: "14px" }}>Apply online.</h2>
            <p className="lede" style={{ marginTop: "18px" }}>Choose a role, attach your CV and add a short note. Every application is reviewed by the hiring team.</p>
          </div>
          <form className="form" data-form="career" noValidate>
            <div className="fields">
              <div className="fld">
                <label htmlFor="position">Role *</label>
                <select id="position" name="position" required>
                  <option value="">Select a role</option>
                  {careerRoleOptions.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
                <div className="err" role="alert"></div>
              </div>
              <div className="fld">
                <label htmlFor="name">Full name *</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required autoComplete="name" inputMode="text" pattern="[A-Za-z][A-Za-z\s'.\-]*" title="Letters only — no numbers" />
                <div className="err" role="alert"></div>
              </div>
              <div className="fld">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required autoComplete="email" />
                <div className="err" role="alert"></div>
              </div>
              <CountryPhoneFields />
              <div className="fld">
                <label htmlFor="resume">CV / resume *</label>
                <label className="file">
                  <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required />
                  <b>Choose file</b>
                  <span data-file>PDF or Word, up to 5 MB</span>
                </label>
                <div className="err" role="alert"></div>
              </div>
              <div className="fld">
                <label htmlFor="note">Cover note</label>
                <textarea id="note" name="note" placeholder="A few lines about your background and interest…"></textarea>
                <div className="err" role="alert"></div>
              </div>
              <input className="hp" type="text" name="website_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="btn btn-lime" type="submit">Submit application →</button>
              <div className="ferr" role="alert"></div>
            </div>
            <div className="ok" role="status">
              <h3>Application received.</h3>
              <p>Thank you for applying. Our hiring team will review your application and contact you if there is a fit.</p>
            </div>
          </form>
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
            <a href="/about/newsroom/">
              <i>04</i>
              <b>Newsroom</b>
            </a>
            <a href="/about/careers/" className="on">
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
          <h2 style={{ marginTop: "14px" }}>If you want your work
            <br />to matter, we are hiring.
          </h2>
          <p className="lede">Book a live walkthrough of the Scanbo platform with our team.</p>
          <PlatformCtas />
        </div>
      </section>
    </main>
  );
}

export const jsonLd = "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebPage\", \"@id\": \"https://www.scanbo.com/about/careers/#webpage\", \"url\": \"https://www.scanbo.com/about/careers/\", \"name\": \"Careers at Scanbo | Open Roles\", \"description\": \"Join a focused team building clinical devices, AI and software used in real healthcare settings. See open roles at Scanbo and apply online.\", \"inLanguage\": \"en\", \"isPartOf\": {\"@id\": \"https://www.scanbo.com/#website\"}, \"publisher\": {\"@id\": \"https://www.scanbo.com/#organization\"}}, {\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.scanbo.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://www.scanbo.com/about/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Careers at Scanbo\", \"item\": \"https://www.scanbo.com/about/careers/\"}]}]}";
