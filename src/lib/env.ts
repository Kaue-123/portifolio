const FALLBACK_EMAIL = "contato@exemplo.com";
const FALLBACK_SITE_URL = "https://kaue-carmo.vercel.app";

export const env = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || FALLBACK_EMAIL,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
} as const;

export const hasContactEmail = Boolean(process.env.NEXT_PUBLIC_CONTACT_EMAIL);
