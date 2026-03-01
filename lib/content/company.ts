export const company = {
  name: "Pristine Management",
  legalName: "Pristine Management, LLC",
  tagline: "Elevating Community Management Across Colorado",
  mission:
    "To deliver exceptional HOA and Metro District management through accountability, transparency, and a relentless commitment to the communities we serve.",
  vision:
    "A Colorado where every planned community — traditional HOA or Metro District — has access to management that truly understands the complexity of their structure and the standards their residents deserve.",
  values: [
    {
      id: "transparency",
      title: "Transparency",
      description:
        "Every financial report, every board decision, and every vendor contract is communicated clearly. No surprises, no hidden fees.",
    },
    {
      id: "expertise",
      title: "Expertise",
      description:
        "Metro District management demands government-grade knowledge. Our team understands Colorado special district law, GASB accounting standards, and HOA governance inside and out.",
    },
    {
      id: "accountability",
      title: "Accountability",
      description:
        "We set measurable standards and hold ourselves to them — on response times, financial accuracy, vendor performance, and resident satisfaction.",
    },
    {
      id: "service",
      title: "Service Excellence",
      description:
        "Every homeowner deserves prompt, professional responses. Every board deserves a management partner who treats community assets as seriously as their own.",
    },
  ],
  hoaVsMetroDistinct: {
    hoa: {
      title: "Traditional HOA",
      points: [
        "Private nonprofit organization governed by CC&Rs",
        "Dues collected directly from homeowners",
        "Board elected from resident membership",
        "Limited to covenant enforcement and common area maintenance",
        "No taxing authority or bonding capacity",
      ],
    },
    metro: {
      title: "Metro District",
      points: [
        "Quasi-governmental special district under Colorado law",
        "Funded through property tax mill levies",
        "Authority to issue municipal bonds for infrastructure",
        "Subject to Colorado Special District Act and state audits",
        "Board elected by district voters; complies with public meeting laws",
        "Can provide municipal-level services: roads, parks, utilities",
      ],
    },
  },
};
