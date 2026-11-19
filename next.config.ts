import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted on this app (avoids parent lockfile confusion).
  turbopack: {
    root: process.cwd(),
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/platform/scanbo-emr",
        destination: "/platform/scanbo-ehr/",
        permanent: true,
      },
      {
        source: "/platform/scanbo-emr/",
        destination: "/platform/scanbo-ehr/",
        permanent: true,
      },
      {
        source: "/clinical-studies",
        destination: "/insights/clinical-studies/",
        permanent: true,
      },
      {
        source: "/clinical-studies/",
        destination: "/insights/clinical-studies/",
        permanent: true,
      },
      {
        source: "/newsroom",
        destination: "/about/newsroom/",
        permanent: true,
      },
      {
        source: "/newsroom/",
        destination: "/about/newsroom/",
        permanent: true,
      },
      {
        source: "/investor-briefing",
        destination: "/about/contact/",
        permanent: true,
      },
      {
        source: "/investor-briefing/",
        destination: "/about/contact/",
        permanent: true,
      },
      {
        source: "/reimbursement-guide",
        destination: "/insights/reimbursement-guide/",
        permanent: true,
      },
      {
        source: "/reimbursement-guide/",
        destination: "/insights/reimbursement-guide/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/about/contact/",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/about/contact/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
