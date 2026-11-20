export interface NotFoundLink {
  id: number;
  href: string;
  label: string;
  className: string;
}

export const notFoundRecoveryLinks: NotFoundLink[] = [
  { id: 1, href: "/", label: "Home →", className: "btn btn-lime" },
  { id: 2, href: "/platform/", label: "Platform", className: "btn btn-ghost" },
  { id: 3, href: "/insights/", label: "Insights", className: "btn btn-ghost" },
  {
    id: 4,
    href: "/about/contact/",
    label: "Contact",
    className: "btn btn-ghost",
  },
];
