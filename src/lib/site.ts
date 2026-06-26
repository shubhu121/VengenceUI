export const SITE_NAME = "Vengeance UI";
export const SITE_URL = "https://www.vengenceui.com";
export const SITE_DESCRIPTION =
  "Animated React components and next-generation UI interactions for modern landing pages.";
export const SITE_OG_IMAGE = "/og-image.png";
export const COMMUNITY_TOKEN_CA =
  "C5x6c7mJsJrw23JeMF1hfZvre4gQaA5JNSSLwnjGpump";
export const COMMUNITY_TOKEN_DEX_URL = `https://dexscreener.com/solana/${COMMUNITY_TOKEN_CA}`;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
