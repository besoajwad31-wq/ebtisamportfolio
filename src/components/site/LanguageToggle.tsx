import { useI18n } from "@/lib/i18n/I18nProvider";
import type { Locale } from "@/lib/i18n/locale";

/** Language names are shown in their own language, so they are not translated. */
const OPTIONS: { locale: Locale; label: string; name: string }[] = [
  { locale: "en", label: "EN", name: "English" },
  { locale: "ar", label: "عربي", name: "العربية" },
];

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t.language.groupLabel}
      dir="ltr"
      className="inline-flex h-10 items-center rounded-full border border-border-strong p-1 text-xs"
    >
      {OPTIONS.map((o, i) => {
        const active = o.locale === locale;
        return (
          <span key={o.locale} className="flex items-center">
            {i > 0 && <span className="mx-0.5 h-4 w-px bg-border-strong" aria-hidden="true" />}
            <button
              type="button"
              lang={o.locale}
              aria-pressed={active}
              aria-label={o.name}
              onClick={() => !active && setLocale(o.locale)}
              className={`h-8 rounded-full px-2.5 font-medium transition-colors ${
                active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {o.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
