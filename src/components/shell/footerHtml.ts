/** Site footer — identical on every page. */
export function buildFooterHtml(): string {
  return `<footer><div class="wrap">
  <div class="fgrid">
    <div><a class="logo" href="/"><img loading="lazy" decoding="async" class="logo-st" src="/assets/logo_stacked.png" alt="Scanbo"></a><p style="margin-top:16px;max-width:300px">A connected diagnostic platform for community healthcare.</p></div>
    <div><h5>Platform</h5><a href="/platform/scanbo-d8/">Scanbo® D8</a><a href="/platform/hridaytaal-ecg-ai/">HridayTaal®</a><a href="/platform/smart-scale/">Smart Scale</a><a href="/platform/rxshield/">RxShield</a><a href="/platform/ambient-documentation/">Ambient Documentation</a><a href="/platform/scanbo-emr/">Scanbo® EMR</a></div>
    <div><h5>Who we serve</h5><a href="/who-we-serve/hospitals-clinics/">Hospitals &amp; clinics</a><a href="/who-we-serve/physicians/">Physicians</a><a href="/who-we-serve/pharmacists/">Pharmacists</a><a href="/who-we-serve/community-health-workers/">Community health workers</a><a href="/who-we-serve/individuals/">Individuals</a><a href="/who-we-serve/accountable-care-organizations/">U.S. ACOs</a></div>
    <div><h5>Insights</h5><a href="/insights/clinical-studies/">Clinical studies</a><a href="/insights/customer-stories/">Customer stories</a><a href="/insights/reimbursement-guide/">Reimbursement guide</a><a href="/about/newsroom/">Newsroom</a></div>
    <div><h5>Company</h5><a href="/about/company/">About</a><a href="/about/manufacturing-quality/">Manufacturing &amp; quality</a><a href="/about/data-philosophy/">Data philosophy</a><a href="/about/careers/">Careers</a><a href="/about/contact/">Contact</a></div>
  </div>
  <div class="legal"><span>© 2026 Scanbo Technologies Inc. All rights reserved.</span><span class="ll"><a href="/legal/privacy-policy/">Privacy</a><a href="/legal/terms-conditions/">Terms</a><a href="/legal/hipaa-notice/">HIPAA notice</a><a href="/legal/gdpr-statement/">GDPR</a><a href="/legal/dpdp-compliance/">DPDP</a><a href="/legal/cookie-preferences/">Cookies</a><a href="/legal/sitemap/">Sitemap</a></span></div>
</div></footer>
`;
}

export function buildCookieHtml(): string {
  return `<div class="cookie" id="cookie" hidden></div>\n`;
}
