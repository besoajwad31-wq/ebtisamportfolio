import { useState } from "react";
import { Languages } from "lucide-react";
import { applyPortfolioLanguage, getSavedLanguage, type PortfolioLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const [language, setLanguage] = useState<PortfolioLanguage>(() => getSavedLanguage());

  function toggleLanguage() {
    const next: PortfolioLanguage = language === "en" ? "ar" : "en";
    applyPortfolioLanguage(next);
    setLanguage(next);
    window.dispatchEvent(new Event("portfolio-language-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border-strong px-3 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
      aria-label={language === "en" ? "Switch language to Arabic" : "Switch language to English"}
      title={language === "en" ? "العربية" : "English"}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{language === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
