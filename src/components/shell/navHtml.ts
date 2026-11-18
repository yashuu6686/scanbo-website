import { NAV_SECTION_HREF } from "@/constants/navigation";
import type { NavSection } from "./types";

function topLink(href: string, label: string, active?: NavSection): string {
  const section = (Object.keys(NAV_SECTION_HREF) as NavSection[]).find(
    (key) => NAV_SECTION_HREF[key] === href,
  );
  const on = active && section === active ? ' class="on"' : "";
  return `<a href="${href}"${on}>${label}</a>`;
}

/** Desktop nav markup — identical to legacy pages aside from optional class="on". */
export function buildNavHtml(active?: NavSection): string {
  return `<nav><div class="wrap">
  <a class="logo" href="/"><img class="logo-h" src="/assets/logo_h.png" alt="Scanbo"></a>
  <div class="navlinks"><div class="dd">${topLink("/platform/", "Platform", active)}<div class="ddm"><a href="/platform/scanbo-d8/"><i>01</i><b>Scanbo® D8</b><span>Eight measurements in under five minutes</span></a><a href="/platform/hridaytaal-ecg-ai/"><i>02</i><b>HridayTaal®</b><span>AI that reads every ECG in real time</span></a><a href="/platform/smart-scale/"><i>03</i><b>Scanbo® Smart Scale</b><span>AI Body Score and 40+ metabolic indicators</span></a><a href="/platform/ambient-documentation/"><i>04</i><b>Ambient Documentation</b><span>Clinic-ready notes the moment the visit ends</span></a><a href="/platform/rxshield/"><i>05</i><b>RxShield</b><span>Drug interaction evidence you can defend</span></a><a href="/platform/scanbo-emr/"><i>06</i><b>Scanbo® EMR</b><span>The operational hub for connected care</span></a><a class="all" href="/platform/">Platform overview →</a></div></div><div class="dd">${topLink("/who-we-serve/", "Who we serve", active)}<div class="ddm"><a href="/who-we-serve/hospitals-clinics/"><i>01</i><b>Hospitals & clinics</b><span>Enterprise diagnostics for connected care delivery</span></a><a href="/who-we-serve/physicians/"><i>02</i><b>Physicians</b><span>Diagnose faster and document less with AI</span></a><a href="/who-we-serve/pharmacists/"><i>03</i><b>Pharmacists</b><span>Medication safety and decision support with AI</span></a><a href="/who-we-serve/community-health-workers/"><i>04</i><b>Community health workers</b><span>Portable screening for frontline and rural care</span></a><a href="/who-we-serve/individuals/"><i>05</i><b>Individuals</b><span>Personal monitoring between visits and beyond the clinic</span></a><a href="/who-we-serve/accountable-care-organizations/"><i>06</i><b>Accountable care organizations</b><span>Scalable screening and insights for value-based care</span></a><a class="all" href="/who-we-serve/">All audiences →</a></div></div><div class="dd">${topLink("/insights/", "Insights", active)}<div class="ddm"><a href="/insights/clinical-studies/"><i>01</i><b>Clinical studies</b><span>Clinical evidence and published research</span></a><a href="/insights/customer-stories/"><i>02</i><b>Customer stories</b><span>Real outcomes from clinical deployments</span></a><a href="/insights/reimbursement-guide/"><i>03</i><b>Reimbursement guide</b><span>Medicare CPT, RPM and SMBP pathways</span></a><a class="all" href="/insights/">Insights overview →</a></div></div><div class="dd">${topLink("/about/", "Company", active)}<div class="ddm"><a href="/about/company/"><i>01</i><b>Who we are</b><span>Who we are, why we exist and where we are going</span></a><a href="/about/manufacturing-quality/"><i>02</i><b>Manufacturing &amp; quality</b><span>In-house manufacturing, quality systems and regulatory discipline</span></a><a href="/about/data-philosophy/"><i>03</i><b>Data philosophy</b><span>Consent-based data practices and patient ownership</span></a><a href="/about/newsroom/"><i>04</i><b>Newsroom</b><span>Press coverage, company updates and announcements</span></a><a href="/about/careers/"><i>05</i><b>Careers</b><span>Join the team building AI for clinical care</span></a><a href="/about/contact/"><i>06</i><b>Contact</b><span>Speak with Scanbo®</span></a><a class="all" href="/about/">About overview →</a></div></div></div>
  <a class="btn btn-lime nav-cta" href="/about/contact/">Book a walkthrough</a>
  <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span><span></span></button>
</div></nav>
`;
}

/** Mobile nav markup — unchanged across pages. */
export function buildMobileNavHtml(): string {
  return `<div id="mnav" class="mnav" hidden><details><summary>Platform</summary><a class="all" href="/platform/">Platform overview →</a><a href="/platform/scanbo-d8/">Scanbo® D8</a><a href="/platform/hridaytaal-ecg-ai/">HridayTaal®</a><a href="/platform/smart-scale/">Scanbo® Smart Scale</a><a href="/platform/ambient-documentation/">Ambient Documentation</a><a href="/platform/rxshield/">RxShield</a><a href="/platform/scanbo-emr/">Scanbo® EMR</a></details><details><summary>Who we serve</summary><a class="all" href="/who-we-serve/">All audiences →</a><a href="/who-we-serve/hospitals-clinics/">Hospitals & clinics</a><a href="/who-we-serve/physicians/">Physicians</a><a href="/who-we-serve/pharmacists/">Pharmacists</a><a href="/who-we-serve/community-health-workers/">Community health workers</a><a href="/who-we-serve/individuals/">Individuals</a><a href="/who-we-serve/accountable-care-organizations/">Accountable care organizations</a></details><details><summary>Insights</summary><a class="all" href="/insights/">Insights overview →</a><a href="/insights/clinical-studies/">Clinical studies</a><a href="/insights/customer-stories/">Customer stories</a><a href="/insights/reimbursement-guide/">Reimbursement guide</a></details><details><summary>Company</summary><a class="all" href="/about/">About overview →</a><a href="/about/company/">Who we are</a><a href="/about/manufacturing-quality/">Manufacturing &amp; quality</a><a href="/about/data-philosophy/">Data philosophy</a><a href="/about/newsroom/">Newsroom</a><a href="/about/careers/">Careers</a><a href="/about/contact/">Contact</a></details><a class="btn btn-lime mcta" href="/about/contact/">Book a walkthrough</a></div>
`;
}

export function buildSkipLinkHtml(): string {
  return `<a class="skip" href="#main">Skip to content</a>\n`;
}
