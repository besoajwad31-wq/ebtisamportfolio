/**
 * Locale primitives shared by server and browser code.
 * English is the default for new visitors; the choice is persisted in a
 * cookie (so the server renders the right language) and in localStorage.
 */
export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export type Direction = "ltr" | "rtl";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "portfolio-locale";
/** Key used by the earlier site version; read once so returning visitors keep their choice. */
const LEGACY_STORAGE_KEY = "portfolio-language";
const ONE_YEAR = 60 * 60 * 24 * 365;

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ar";
}

export function parseLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function dirFor(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Reads the locale from a `Cookie` header / `document.cookie` string. */
export function readLocaleCookie(cookieString: string | null | undefined): Locale | null {
  if (!cookieString) return null;
  for (const part of cookieString.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === LOCALE_COOKIE) {
      const value = decodeURIComponent(rest.join("="));
      return isLocale(value) ? value : null;
    }
  }
  return null;
}

/** Browser only — call from event handlers or effects. */
export function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
  try {
    localStorage.setItem(LOCALE_COOKIE, locale);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    /* storage unavailable (private mode) — the cookie still persists the choice */
  }
}

/** Browser only — a locale saved in localStorage (current or legacy key). */
export function readStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(LOCALE_COOKIE) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}
