// ─── Environment Configuration ────────────────────────────────────────────────

export const siteConfig = {
  name: "Pristine Management",
  tagline: "Professional HOA & Metro District Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pristinemgmt.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(303) 555-0100",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "beau@pristinemgmt.com",
} as const;

export const emailConfig = {
  violationsRecipient:
    process.env.VIOLATIONS_EMAIL ?? "compliance@pristinemgmt.com",
  contactRecipient:
    process.env.CONTACT_EMAIL ?? "compliance@pristinemgmt.com",
  managementRequestRecipient:
    process.env.MANAGEMENT_REQUEST_EMAIL ?? "compliance@pristinemgmt.com",
  fromAddress:
    process.env.FROM_EMAIL ?? "noreply@pristinemgmt.com",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
} as const;

export const externalLinks = {
  vantacaLogin:
    process.env.NEXT_PUBLIC_VANTACA_URL ??
    "https://app.vantaca.com/login",
  homeWiseDocs:
    process.env.NEXT_PUBLIC_HOMEWISEDOCS_URL ??
    "https://www.homewisedocs.com",
} as const;

