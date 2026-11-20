export interface CareerJob {
  id: number;
  title: string;
  detail: string;
  location: string;
}

export const careerJobs: CareerJob[] = [
  {
    id: 1,
    title: "AI Engineer",
    detail: "2+ years · 5 positions open",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 2,
    title: "Junior Android Developer",
    detail: "2+ years · Must know Kotlin",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 3,
    title: "Senior Bio-Chemist",
    detail: "3–5 years · Basic biochemistry knowledge",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 4,
    title: "Customer Technical Support",
    detail: "2–5 years · Excellent English communication",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 5,
    title: "HR Admin Manager",
    detail: "2–3 years · Strong English communication",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 6,
    title: "Jr. iOS Developer",
    detail: "1–3 years · Swift, UIKit, Xcode",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 7,
    title: "Sr. QA Tester",
    detail: "3+ years · Manual and automation testing",
    location: "Surat, Gujarat, India · On-site",
  },
  {
    id: 8,
    title: "Sr. Social Media Specialist",
    detail: "3+ years · Content strategy and campaigns",
    location: "Surat, Gujarat, India · On-site",
  },
];

export const careerRoleOptions: string[] = [
  ...careerJobs.map((job) => job.title),
  "General application",
];
