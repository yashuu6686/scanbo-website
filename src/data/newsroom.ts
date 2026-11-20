/** Newsroom press cards grouped by year. */

export interface NewsArticle {
  id: number;
  year: string;
  date: string;
  outlet: string;
  title: string;
  href: string;
  summary: string;
  tags: string[];
  cta?: string;
}

/** @deprecated Prefer NewsArticle */
export type PressCard = NewsArticle;

export interface NewsYearGroup {
  year: string;
  countLabel: string;
  articles: NewsArticle[];
}

/** @deprecated Prefer NewsYearGroup */
export type PressYearGroup = NewsYearGroup;

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    year: "2026",
    date: "Aug 13, 2026",
    outlet: "Midday",
    title: "India's Visionary Entrepreneurs Making an Impact in 2026",
    href: "https://www.mid-day.com/amp/buzzfeed/article/india-s-visionary-entrepreneurs-making-an-impact-in-2026-10538",
    summary:
      "Ashissh Raichura recognized among visionary Indian entrepreneurs redefining healthcare, diagnostics, and medical technology in 2026.",
    tags: ["Leadership", "Profiling", "HealthTech"],
  },
  {
    id: 2,
    year: "2026",
    date: "Aug 07, 2026",
    outlet: "YourStory",
    title:
      "India's Healthcare AI Race Isn't About Bigger Models. It's About Better Diagnostics",
    href: "https://yourstory.com/2026/08/indias-healthcare-ai-race-isnt-about-bigger-models-its-about-better-diagnostics",
    summary:
      "Why the ultimate value of healthcare AI lies beyond substituting clinicians: it starts with high-fidelity, multimodal point-of-care diagnostic signals.",
    tags: ["Authored article", "Healthcare AI", "Diagnostics"],
  },
  {
    id: 3,
    year: "2026",
    date: "Aug 07, 2026",
    outlet: "Dailyhunt",
    title:
      "India's Healthcare AI Race Isn't About Bigger Models. It's About Better Diagnostics",
    href: "https://m.dailyhunt.in/news/india/english/yourstory-epaper-yourstory/indias+healthcare+ai+race+isnt+about+bigger+models+its+about+better+diagnostics-newsid-n722391983",
    summary:
      "Syndicated coverage on why high-fidelity point-of-care diagnostic signals are the true foundation of healthcare AI.",
    tags: ["Syndication", "Healthcare AI", "Diagnostics"],
  },
  {
    id: 4,
    year: "2026",
    date: "Aug 04, 2026",
    outlet: "Express Healthcare",
    title:
      "From AI Reports to Clinical Trust: Rethinking Diagnostics in the Age of Healthcare AI",
    href: "https://www.expresshealthcare.in/news/from-ai-reports-to-clinical-trust-rethinking-diagnostics-in-the-age-of-healthcare-ai/454582/",
    summary:
      "Moving from standalone diagnostic reports to true clinical trust and decision-support infrastructure in healthcare AI.",
    tags: ["Authored article", "Clinical trust", "Healthcare AI"],
  },
  {
    id: 5,
    year: "2026",
    date: "Jul 31, 2026",
    outlet: "Hindustan Times",
    title: "Generative and Agentic AI in Diagnostics",
    href: "https://www.hindustantimes.com/ht-insight/future-tech/generative-and-agentic-ai-in-diagnostics-101785479747966.html",
    summary:
      "An in-depth perspective on how generative and agentic AI systems are shifting diagnostics from passive observation to active clinical workflows.",
    tags: ["Author op-ed", "Agentic AI", "Diagnostics"],
  },
  {
    id: 6,
    year: "2026",
    date: "Jul 29, 2026",
    outlet: "Pharmabiz",
    title:
      "India Generates Vast Antibiotic Prescribing Data, Yet Almost None Improves Next Prescription: Ashissh Raichura",
    href: "https://www.pharmabiz.com/NewsDetails.aspx?aid=187486&sid=1",
    summary:
      "Addressing diagnostic gaps and antimicrobial stewardship through intelligent point-of-care diagnostics and data connectivity.",
    tags: ["Industry perspective", "Trade press", "Data"],
  },
  {
    id: 7,
    year: "2026",
    date: "Jul 25, 2026",
    outlet: "Outlook Business",
    title:
      "From Chatbots To Cardiac Signals: Scanbo's Ashissh Raichura On India's Next Health AI Test",
    href: "https://www.outlookbusiness.com/spotlight/news-wire/from-chatbots-to-cardiac-signals-scanbo-s-ashissh-raichura-on-india-s-next-health-ai-test",
    summary:
      "Discussing the role of health AI in cardiac signal diagnostics, frontline clinical tools, and diagnostic data governance across India.",
    tags: ["Feature spotlight", "Cardiac AI", "Leadership"],
  },
  {
    id: 8,
    year: "2026",
    date: "Jul 19, 2026",
    outlet: "The Ken",
    title:
      "AI Cites a Hospital for Health Advice, but the Hospital Uses AI to Write the Advice. And Both Are Wrong",
    href: "https://the-ken.com/story/ai-cites-a-hospital-for-health-advice-but-the-hospital-uses-ai-to-write-the-advice-and-both-are-wrong/",
    summary:
      "Investigating the perils of recursive AI health advice and why grounded clinical diagnostic verification remains crucial.",
    tags: ["Industry analysis", "AI safety", "Diagnostics"],
  },
  {
    id: 9,
    year: "2026",
    date: "Jul 13, 2026",
    outlet: "BioSpectrum India",
    title: "Startup of the Day: Scanbo India Private Limited",
    href: "https://www.biospectrumindia.com/features/20/28111/startupoftheday-6-scanbo-india-private-limited.html",
    summary:
      "BioSpectrum features Scanbo for pioneering point-of-care medical diagnostics and next-generation non-invasive vital monitoring.",
    tags: ["Startup profile", "MedTech", "Innovation"],
  },
  {
    id: 10,
    year: "2026",
    date: "Jun 30, 2026",
    outlet: "Yahoo Finance",
    title:
      "Scanbo Technologies Founder Argues the AI Debate Has the Question Backwards",
    href: "https://finance.yahoo.com/technology/ai/articles/scanbo-technologies-founder-argues-ai-204500901.html",
    summary:
      "Ashissh Raichura argues that AI should amplify human intelligence, agency, and judgment rather than make people dependent on automated systems.",
    tags: ["Founder perspective", "Artificial intelligence"],
  },
  {
    id: 11,
    year: "2026",
    date: "Jun 28, 2026",
    outlet: "New York Tech Media",
    title:
      "Why Human Judgment Matters More Than Ever in the Age of Healthcare AI",
    href: "https://nytech.media/why-human-judgment-matters-more-than-ever-in-the-age-of-healthcare-ai",
    summary:
      "A perspective on why clinical judgment, accountability, and lived experience remain essential as healthcare adopts increasingly capable AI systems.",
    tags: ["Healthcare AI", "Human judgment"],
  },
  {
    id: 12,
    year: "2026",
    date: "May 15, 2026",
    outlet: "CIOL",
    title: "Why India's Healthcare Deeptech Startups Scale Differently",
    href: "https://www.ciol.com/interviews/why-indias-healthcare-deeptech-startups-scale-differently-11837200",
    summary:
      "Exploring how regulatory validation, hardware iteration cycles, and clinical trust create distinct scaling pathways for health deeptech.",
    tags: ["Interview", "DeepTech", "Scaling"],
  },
  {
    id: 13,
    year: "2026",
    date: "May 12, 2026",
    outlet: "Digital Terminal",
    title:
      "“The Real Opportunity in India’s Healthcare AI Journey Lies in Building the Diagnostic Signal Layer”",
    href: "https://digitalterminal.in/interview/the-real-opportunity-in-indias-healthcare-ai-journey-lies-in-building-the-diagnostic-signal-layer",
    summary:
      "Interview on why sensor engineering and diagnostic ground truth form the bedrock of AI transformation in healthcare.",
    tags: ["Interview", "Diagnostic signals", "Hardware"],
  },
  {
    id: 14,
    year: "2026",
    date: "May 11, 2026",
    outlet: "FirstPost",
    title:
      "National Technology Day 2026: Health Data Breaches Could Create Generational Risks, Warns Expert",
    href: "https://www.firstpost.com/tech/national-technology-day-2026-health-data-breaches-could-create-generational-risks-warns-expert-ws-e-14009806.html",
    summary:
      "Ashissh Raichura warns that biological and health data breaches carry irreversible, generational privacy implications.",
    tags: ["Interview", "Data privacy", "Security"],
  },
  {
    id: 15,
    year: "2026",
    date: "Apr 30, 2026",
    outlet: "CIO&Leader",
    title: "AI Won't Save Healthcare If the Data Feeding It Is Broken",
    href: "https://www.cioandleader.com/ai-wont-save-healthcare-if-the-data-feeding-it-is-broken/",
    summary:
      "Ashissh Raichura discusses why healthcare AI needs reliable diagnostic data infrastructure beneath the model layer.",
    tags: ["Interview", "Healthcare AI", "Data infrastructure"],
  },
  {
    id: 16,
    year: "2026",
    date: "Apr 27, 2026",
    outlet: "ET Edge Insights",
    title:
      "India Is Digitising Healthcare, but Diagnosis Remains the Missing Link",
    href: "https://etedge-insights.com/industry/healthcare/india-is-digitising-healthcare-but-diagnosis-remains-the-missing-link/",
    summary:
      "Examining why connected health records and telemedicine must be paired with accurate point-of-care diagnostic instrumentation.",
    tags: ["Authored article", "Digital health", "Point-of-care"],
  },
  {
    id: 17,
    year: "2026",
    date: "Apr 17, 2026",
    outlet: "Analytics India Magazine",
    title:
      "Healthcare AI Infrastructure: Diagnostic Data Reliability in Decentralised Care Settings",
    href: "https://analyticsindiamag.com/ai-features/ai-is-making-cheaper-mri-machines-look-premium",
    summary:
      "How edge AI and robust diagnostic signal processing are upgrading decentralized medical devices and point-of-care testing.",
    tags: ["Industry article", "Edge AI", "Diagnostics"],
  },
  {
    id: 18,
    year: "2026",
    date: "Apr 2026",
    outlet: "Government of British Columbia",
    title:
      "Scanbo Featured in Government of British Columbia's 2026 Life Sciences Ecosystem Map",
    href: "https://media.scanbo.com/scanbo/a1f6456d-e194-4c6d-a939-2a287de7e257.pdf",
    summary:
      "Scanbo has been recognized in British Columbia's official 2026 Life Sciences Ecosystem Map as an innovative healthtech leader.",
    tags: ["Press", "Recognition", "Government"],
    cta: "View PDF →",
  },
  {
    id: 19,
    year: "2026",
    date: "Mar 26, 2026",
    outlet: "Outlook India",
    title:
      "Diagnostics Has a Data Problem Before It Has an AI Problem: Ashissh Raichura on Building Scanbo's Point-of-Care Stack",
    href: "https://www.outlookindia.com/hub4business/diagnostics-has-a-data-problem-before-it-has-an-ai-problem-ashissh-raichura-on-building-scanbos-point-of-care-stack",
    summary:
      "A deep dive into how Scanbo built a proprietary, vertically integrated medical hardware and algorithm stack from the ground up.",
    tags: ["Thought leadership", "Point-of-care", "MedTech"],
  },
  {
    id: 20,
    year: "2026",
    date: "Mar 12, 2026",
    outlet: "Ahmedabad Mirror",
    title:
      "From Painful Testing to Smart Monitoring: How Scanbo® is Transforming Chronic Care",
    href: "https://www.ahmedabadmirror.com/from-painful-testing-to-smart-monitoring-how-scanbo-is-transforming-chronic-care-through-non-invasive-diagnostics---by-ashissh-raichura/81909644.html",
    summary:
      "How non-invasive 60-second vital testing is replacing painful finger pricks and revolutionizing chronic illness monitoring.",
    tags: ["Feature article", "Chronic care", "Innovation"],
  },
  {
    id: 21,
    year: "2026",
    date: "Mar 05, 2026",
    outlet: "MoneyControl",
    title:
      "Galloping Medical Inflation Is Not Solely a Hospital Issue; It Starts Earlier",
    href: "https://www.moneycontrol.com/news/opinion/galloping-medical-inflation-is-not-solely-a-hospital-issue-it-starts-earlier-13851101.html",
    summary:
      "Ashissh Raichura on why the root causes of surging healthcare costs start at delayed diagnosis and lack of preventive screening.",
    tags: ["Authored op-ed", "Healthcare economics", "Prevention"],
  },
  {
    id: 22,
    year: "2026",
    date: "Feb 21, 2026",
    outlet: "Pharmabiz",
    title:
      "Indian Healthcare Sees Point-of-Care Diagnostics to Propel Speed in Clinical Decision Making",
    href: "https://www.pharmabiz.com/NewsDetails.aspx?aid=184373&sid=1",
    summary:
      "How rapid diagnostic tools empower clinical decision-making across emergency, clinic, and rural healthcare settings.",
    tags: ["Trade press", "Clinical decision", "Point-of-care"],
  },
  {
    id: 23,
    year: "2026",
    date: "Feb 01, 2026",
    outlet: "GoodReturns",
    title:
      "Union Budget 2026: From “Big Announcements” to Execution: What Industry Really Wants This Year",
    href: "https://www.goodreturns.in/partner-content/union-budget-2026-from-big-announcements-to-execution-what-industry-really-wants-this-year-1485685.html",
    summary:
      "Industry leaders and founders call for execution-grade policy, manufacturing competitiveness, and preventive healthcare funding.",
    tags: ["Budget 2026", "Policy commentary", "Healthcare"],
  },
  {
    id: 24,
    year: "2026",
    date: "Jan 31, 2026",
    outlet: "Business News for Profit",
    title:
      "Budget 2026: Industry-Ready Quotes from HealthTech, GCC, F&B & Startup Leaders",
    href: "https://businessnewsforprofit.com/business/budget-2026-industry-ready-quotes-from-healthtech-gcc-fb-startup-leaders/",
    summary:
      "Scanbo CEO Ashissh Raichura on shifting healthcare economics toward preventive diagnostics and policy support.",
    tags: ["Budget 2026", "HealthTech", "Industry quote"],
  },
  {
    id: 25,
    year: "2026",
    date: "Jan 30, 2026",
    outlet: "CXO DigitalPulse",
    title: "Pre-Budget Quote: Ashissh Raichura, Founder & CEO, Scanbo®",
    href: "https://www.cxodigitalpulse.com/pre-budget-quote-ashissh-raichura-founder-ceo-scanbo/",
    summary:
      "Scanbo CEO advocates for strategic budget focus on indigenous MedTech research, local hardware manufacturing, and preventive care.",
    tags: ["Policy", "Budget commentary", "Leadership"],
  },
  {
    id: 26,
    year: "2026",
    date: "Jan 30, 2026",
    outlet: "JK Monitor",
    title:
      "Union Budget 2026: Industry Leaders Call for Prevention-First Healthcare & AI-Driven Innovation",
    href: "https://jkmonitor.org/index.php/national-international/union-budget-2026-industry-leaders-call-for-prevention-first-healthcare-ai-driven-innovation-gcc-expansion-clean-label-nutrition-and-policy-stability-to-power-indias-next-growth-phase",
    summary:
      "Highlights from startup and MedTech founders advocating for decentralized care and proactive wellness frameworks.",
    tags: ["Budget 2026", "Policy", "Preventive care"],
  },
  {
    id: 27,
    year: "2026",
    date: "Jan 30, 2026",
    outlet: "EFY Startups",
    title:
      "“Our Advantage Lies in Scale, Data and Continuous Iteration”: Ashissh Raichura",
    href: "https://www.electronicsforyou.biz/startups/our-advantage-lies-in-scale-data-and-continuous-iteration-thousands-of-pcb-revisions-and-millions-of-diagnostics-ashissh-raichura-scanbo/",
    summary:
      "Thousands of PCB revisions and millions of diagnostic tests: how Scanbo engineered a robust hardware-software platform.",
    tags: ["Executive interview", "Hardware", "Engineering"],
  },
  {
    id: 28,
    year: "2026",
    date: "Jan 28, 2026",
    outlet: "The Print",
    title:
      "The Scanbo® Vision: AI, Autonomy, and the Future of Personal Healthcare Data",
    href: "https://theprint.in/ani-press-releases/the-scanbo-vision-ai-autonomy-and-the-future-of-personal-healthcare-data/2837820/",
    summary:
      "Exploring how personal health data ownership combined with autonomous diagnostic AI changes patient outcomes.",
    tags: ["Company vision", "AI autonomy", "Health data"],
  },
  {
    id: 29,
    year: "2026",
    date: "Jan 28, 2026",
    outlet: "MedTech Spectrum",
    title:
      "What 2026 Will Look Like for AI in Medical Devices and Clinical Workflows",
    href: "https://medtechspectrum.com/opinion/47/25207/how-ai-is-integrating-into-medical-devices-and-workflows-in-2026.html",
    summary:
      "Authored perspective on next-generation medical device workflows, embedded intelligence, and clinical interoperability.",
    tags: ["Industry perspective", "MedTech", "Workflows"],
  },
  {
    id: 30,
    year: "2025",
    date: "Dec 29, 2025",
    outlet: "Pharmabiz",
    title: "News Coverage on 5 Selected Healthcare Topics",
    href: "https://pharmabiz.com/NewsDetails.aspx?aid=183258&sid=1",
    summary:
      "Key analysis on emerging Indian pharmaceutical and diagnostic trends shaping the healthcare sector in 2025–2026.",
    tags: ["Trade press", "Pharma & MedTech", "Analysis"],
  },
  {
    id: 31,
    year: "2025",
    date: "Dec 27, 2025",
    outlet: "Republic World",
    title:
      "The Changemakers of 2025: Entrepreneurs Who Are Redesigning India's Tomorrow",
    href: "https://www.republicworld.com/initiatives/the-changemakers-of-2025-entrepreneurs-who-are-redesigning-indias-tomorrow",
    summary:
      "Scanbo featured among top innovator startups transforming healthcare delivery and high-impact technology in India.",
    tags: ["Industry feature", "Recognition", "Changemakers"],
  },
  {
    id: 32,
    year: "2025",
    date: "Dec 26, 2025",
    outlet: "TechAchieve",
    title: "The New Frontier of Preventive Healthcare",
    href: "https://techachievemedia.com/future-technology-news/the-new-frontier-of-preventive-healthcare/",
    summary:
      "How continuous non-invasive diagnostics and rapid vital assessments are transitioning healthcare from reactive to proactive.",
    tags: ["Authored article", "Preventive health", "Future tech"],
  },
  {
    id: 33,
    year: "2025",
    date: "Dec 18, 2025",
    outlet: "Electronics For U",
    title:
      "Can Diagnostics Escape the Lab? The Real Problem Was Never the Test",
    href: "https://www.electronicsforu.com/news/can-diagnostics-escape-the-lab-the-real-problem-was-never-the-test",
    summary:
      "Deep dive into miniaturization, sensor precision, and edge processing that allow laboratory-grade measurements at point of care.",
    tags: ["Technology deep dive", "Hardware", "Sensors"],
  },
  {
    id: 34,
    year: "2025",
    date: "Dec 05, 2025",
    outlet: "PTI Newswire",
    title: "Experience Smarter Health Insights with Scanbo®'s Diagnostic Technology",
    href: "https://www.ptinews.com/story/business/experience-smarter-health-insights-with-scanbos-diagnostic-technology/3157847",
    summary:
      "Multi-outlet national coverage on Scanbo's multiparameter point-of-care platform.",
    tags: ["National wire", "Product feature", "MedTech"],
  },
  {
    id: 35,
    year: "2025",
    date: "Nov 06, 2025",
    outlet: "NewsX + 5 outlets",
    title:
      "PM Modi's Vision for Self-Reliant India Finds Momentum in Scanbo®'s MedTech Innovation",
    href: "https://www.newsx.com/business-news/prime-ministers-vision-for-a-self-reliant-india-finds-momentum-in-scanbos-made-in-india-medtech-innovation-113578/",
    summary:
      "Syndicated coverage across NewsX, UNI, My Nation, Loktej, First India, and Lokmat Times on indigenous medical device R&D.",
    tags: ["National wire", "Make in India", "MedTech"],
  },
  {
    id: 36,
    year: "2025",
    date: "Oct 16, 2025",
    outlet: "Business Upturn",
    title:
      "At-Home MedTech Innovation: Scanbo® D8 and Its Roadmap for the Future",
    href: "https://businessupturn.com/sectors/health/at-home-medtech-innovation-scanbo-d8-and-its-roadmap-for-the-future/",
    summary:
      "Feature on bringing hospital-grade multiparameter screening into home and community care settings.",
    tags: ["Product feature", "Home health", "MedTech"],
  },
  {
    id: 37,
    year: "2025",
    date: "Oct 10, 2025",
    outlet: "ANI News",
    title:
      "Glucose Today, More Blood Tests Tomorrow: Scanbo®'s Roadmap from D8 to D19",
    href: "https://english.newsnationtv.com/business/glucose-today-more-blood-tests-tomorrow-scanbos-roadmap-from-d8-to-d1920251010111230",
    summary:
      "National wire coverage unveiling the multi-biomarker expansion pathway from Scanbo D8 to upcoming D12 and D19 models.",
    tags: ["Roadmap", "Product innovation", "Biomarkers"],
  },
  {
    id: 38,
    year: "2025",
    date: "Sep 22, 2025",
    outlet: "Pharmabiz",
    title: "Digital Diagnostics Shaping New Standards in Global Treatment Protocols",
    href: "https://www.pharmabiz.com/NewsDetails.aspx?aid=181406&sid=1",
    summary:
      "Expert commentary on the evolution of digital biomarkers and rapid screening in decentralized clinical settings.",
    tags: ["Industry analysis", "Digital diagnostics", "Healthcare"],
  },
  {
    id: 39,
    year: "Earlier",
    date: "Jan 2022",
    outlet: "TechCrunch",
    title: "Scanbo®'s Non-Invasive Blood Glucose Technology",
    href: "http://techcrunch.com/2022/01/06/scanbo-non-invasive-blood-glucose/",
    summary:
      "International tech press covering Scanbo’s non-invasive blood glucose screening technology and medical sensor architecture.",
    tags: ["International press", "Innovation", "Non-invasive"],
  },
  {
    id: 40,
    year: "Earlier",
    date: "2019",
    outlet: "UAE · Gulf Business",
    title: "Three Tech Innovations Transforming UAE Healthcare",
    href: "https://gulfbusiness.com/en/2019/opinion/three-tech-innovations-transforming-uae-healthcare/",
    summary:
      "Spotlight on medical innovations and point-of-care diagnostic devices advancing the Middle East healthcare ecosystem.",
    tags: ["Middle East", "Innovation", "HealthTech"],
  },
  {
    id: 41,
    year: "Earlier",
    date: "Canada",
    outlet: "Newswire press release",
    title:
      "$4.7M in Project Funding: Circle Innovation Program Helps Healthtech SMEs",
    href: "https://www.newswire.ca/news-releases/scaling-healthtech-success-4-7-million-in-project-funding-allocated-as-circle-innovation-program-helps-healthtech-smes-make-critical-health-advancements-856720458.html",
    summary:
      "Circle Innovation partnership announcement supporting Canadian healthtech development and commercialization.",
    tags: ["Canada", "Funding", "Innovation"],
  },
  {
    id: 42,
    year: "Earlier",
    date: "UAE",
    outlet: "Gulf News",
    title: "Tomorrow's Health Tech, Today",
    href: "https://gulfnews.com/uae/health/tomorrows-health-tech-today-1.2294658",
    summary:
      "Feature on transformative diagnostic technologies presented to international healthcare authorities.",
    tags: ["UAE", "Healthcare", "Feature"],
  },
  {
    id: 43,
    year: "Earlier",
    date: "UAE",
    outlet: "Dubai City Guide",
    title:
      "Dubai Health Authority to Transform Healthcare with Innovative Technology",
    href: "https://dubaicityguide.com/site/news/news-details/Company-News/70703/dubai-health-authority-to-transform-healthcare-with-innovative-technology",
    summary:
      "Highlighting collaboration with the Dubai Health Authority for digital and rapid diagnostic solutions.",
    tags: ["UAE", "Government", "Partnership"],
  },
];

export const newsYearGroups: NewsYearGroup[] = [
  {
    year: "2026",
    countLabel: "29 articles",
    articles: newsArticles.filter((a) => a.year === "2026"),
  },
  {
    year: "2025",
    countLabel: "9 articles",
    articles: newsArticles.filter((a) => a.year === "2025"),
  },
  {
    year: "Earlier",
    countLabel: "5 articles",
    articles: newsArticles.filter((a) => a.year === "Earlier"),
  },
];

/** @deprecated Prefer newsArticles */
export const pressArticles = newsArticles;

/** @deprecated Prefer newsYearGroups */
export const pressYearGroups = newsYearGroups;
