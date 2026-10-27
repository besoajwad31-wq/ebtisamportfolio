import { useRouter } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { getProjects } from "@/content/localized";
import { siteContent, type SiteContent } from "@/content/site";
import { ui, type UiStrings } from "@/content/ui";
import type { Project } from "@/content/projects";
import { dirFor, persistLocale, readLocaleCookie, readStoredLocale, type Direction, type Locale } from "./locale";

type I18nValue = {
  locale: Locale;
  dir: Direction;
  setLocale: (locale: Locale) => void;
  /** UI copy for the active language. */
  t: UiStrings;
  /** Personal details and skills for the active language. */
  site: SiteContent;
  projects: Project[];
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      persistLocale(next);
      document.documentElement.lang = next;
      document.documentElement.dir = dirFor(next);
      // Re-run route head() so the tab title and meta tags follow the language.
      void router.invalidate();
    },
    [router],
  );

  // Visitors who chose a language on the earlier version only have it in localStorage.
  useEffect(() => {
    if (readLocaleCookie(document.cookie)) return;
    const stored = readStoredLocale();
    if (stored && stored !== initialLocale) setLocale(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      dir: dirFor(locale),
      setLocale,
      t: ui[locale],
      site: siteContent[locale],
      projects: getProjects(locale),
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
