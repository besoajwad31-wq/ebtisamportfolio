import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { useI18n } from "@/lib/i18n/I18nProvider";

export function ThemeToggle() {
  const { t } = useI18n();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? t.theme.toDay : t.theme.toNight}
      title={dark ? t.theme.day : t.theme.night}
      className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
