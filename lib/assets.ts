/** Chemins des screenshots app (public/screenshots) */
export const SCREENSHOTS = {
  map: "/screenshots/map.png",
  explorer: "/screenshots/explorer.png",
  home: "/screenshots/home.png",
  train: "/screenshots/train.png",
  social: "/screenshots/social.png",
} as const;

export const BRAND_LOGO = "/brand/logo.png" as const;

export const TESTFLIGHT_URL = "https://testflight.apple.com/join/etHuwAxs" as const;

/**
 * Le lien public TestFlight accepte-t-il de nouveaux testeurs ?
 * Tant que c'est `false`, les boutons « bêta » mènent au formulaire d'inscription (Brevo).
 * Repasser à `true` quand le lien est réactivé dans App Store Connect.
 */
export const TESTFLIGHT_OPEN = false as boolean;

/** Lien des boutons « Rejoindre la bêta » : TestFlight s'il est ouvert, sinon le formulaire. */
export const BETA_LINK_PROPS = TESTFLIGHT_OPEN
  ? { href: TESTFLIGHT_URL, target: "_blank", rel: "noopener noreferrer" }
  : { href: "#beta" };
