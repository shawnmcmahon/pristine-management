// ─── Environment Configuration ────────────────────────────────────────────────

const fallbackEmail = "beau@pristinemgmt.com";
const configuredPublicEmail = process.env.NEXT_PUBLIC_EMAIL?.trim();
const safePublicEmail =
  configuredPublicEmail &&
  configuredPublicEmail.includes("@") &&
  !configuredPublicEmail.startsWith("http")
    ? configuredPublicEmail
    : fallbackEmail;

const fallbackPhone = "(720) 715-6655";
const configuredPublicPhone = process.env.NEXT_PUBLIC_PHONE?.trim();
/** Digits-only form of the old .env.example placeholder — ignore so deploys keep the real office line. */
const isExampleOrInvalidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length < 10 || digits === "3035550100";
};
const safePublicPhone =
  configuredPublicPhone && !isExampleOrInvalidPhone(configuredPublicPhone)
    ? configuredPublicPhone
    : fallbackPhone;

export const siteConfig = {
  name: "Pristine Management",
  tagline: "Professional HOA & Metro District Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pristinemgmt.com",
  phone: safePublicPhone,
  email: safePublicEmail,
  addressLines: [
    "1499 W 120th Ave",
    "Suite 110",
    "Westminster, CO 80234",
  ] as const,
  availableHours: "By Appointment Only Please Call Ahead",
} as const;

export const emailConfig = {
  violationsRecipient:
    process.env.VIOLATIONS_EMAIL ?? "beau@pristinemgmt.com",
  contactRecipient:
    process.env.CONTACT_EMAIL ?? "beau@pristinemgmt.com",
  managementRequestRecipient:
    process.env.MANAGEMENT_REQUEST_EMAIL ?? "beau@pristinemgmt.com",
  fromAddress:
    process.env.FROM_EMAIL ?? "onboarding@resend.dev",
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

