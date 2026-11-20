import type { PlatformLink } from "@/data/whoWeServe";

export interface Publication {
  id: number;
  href: string;
  source: string;
  k: string;
  title: string;
  description: string;
  meta: string;
  cta: string;
}

export const clinicalStudiesHeroChips: string[] = [
  "5 peer-reviewed studies",
  "PubMed · PMC · ScienceDirect",
  "PATH · WHO global health",
  "2024–2025",
];

export const clinicalStudiesPublications: Publication[] = [
  {
    id: 1,
    href: "https://pubmed.ncbi.nlm.nih.gov/40771298/",
    source: "PubMed · 2025",
    k: "Primary validation study",
    title: "BP and blood glucose accuracy validated in an urban field setting",
    description:
      "Confirms Scanbo® D8 measures blood pressure and glucose to clinical standards in a low-resource urban deployment, with no lab and no specialist infrastructure.",
    meta: "Karthikeyan, Narayan et al. · PMID 40771298",
    cta: "Read on PubMed →",
  },
  {
    id: 2,
    href: "https://www.sciencedirect.com/science/article/pii/S2514664525000505",
    source: "ScienceDirect · 2025",
    k: "Lancet-family journal publication",
    title: "Clinical performance across diverse patient populations",
    description:
      "Peer-reviewed publication in a Lancet-family digital health journal — the highest-credibility venue for point-of-care diagnostic research. Examines outcomes across real healthcare environments.",
    meta: "DOI: 10.1016/S2514-6645(25)00050-5",
    cta: "Read the study →",
  },
  {
    id: 3,
    href: "https://www.semanticscholar.org/paper/Evaluation-of-the-Bluetooth-enabled-Scanbo%C2%AE-device-A-Karthikeyan-Narayan/1acc53abce4c61e83b5816c53301e27d62c608e0",
    source: "Semantic Scholar · 2025",
    k: "Research indexing · global discovery",
    title: "Indexed across global academic research databases",
    description:
      "The research is independently indexed, citable and discoverable across global academic platforms: a signal of reproducible, peer-traceable clinical science.",
    meta: "Karthikeyan, Narayan et al.",
    cta: "Read the study →",
  },
  {
    id: 4,
    href: "https://www.path.org/who-we-are/programs/diagnostics/advancing-next-generation-phc-tools-ai-and-smartphone-sensors/",
    source: "PATH · 2024",
    k: "WHO-aligned program recognition",
    title: "Featured by PATH in next-generation primary care diagnostics",
    description:
      "PATH, a WHO-aligned global health organization, selected Scanbo® as a featured technology in its evaluation of AI-powered diagnostic tools for next-generation primary healthcare.",
    meta: "PATH Diagnostics Program · Global health initiative",
    cta: "View on PATH →",
  },
  {
    id: 5,
    href: "https://media.path.org/documents/Innovations_for_Primary_Health_Care.pdf",
    source: "PATH report · 2024",
    k: "Investor and partner reference",
    title: "PATH: Innovations for Primary Health Care",
    description:
      "Authoritative PATH's report on AI-powered diagnostic innovation in global primary care: a credible third-party reference for investors, health system partners and procurement leads.",
    meta: "PATH · Innovations for Primary Health Care report",
    cta: "Download the PDF →",
  },
];

export const clinicalStudiesProductLinks: PlatformLink[] = [
  {
    id: 1,
    href: "/platform/scanbo-d8/",
    num: "01",
    title: "Scanbo® D8",
    description: "Eight measurements in under five minutes",
    cta: "Learn more →",
  },
  {
    id: 2,
    href: "/platform/hridaytaal-ecg-ai/",
    num: "02",
    title: "HridayTaal® Cardiac Agent",
    description: "AI that reads every ECG in real time",
    cta: "Learn more →",
  },
];
