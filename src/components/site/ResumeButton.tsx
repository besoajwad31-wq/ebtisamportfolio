import { FileText } from "lucide-react";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { buttonClass } from "./buttons";

export function ResumeButton({
  size = "md",
  variant = "outline",
  label,
}: {
  size?: "sm" | "md";
  variant?: "outline" | "solid";
  label?: string;
}) {
  const { t, site } = useI18n();
  const text = label ?? t.resume.view;
  if (!site.profile.resumeUrl) {
    return (
      <span className={buttonClass({ variant: "outline", size, disabled: true })} aria-disabled="true">
        {t.resume.comingSoon}
      </span>
    );
  }
  return (
    <a
      href={site.profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass({ variant, size })}
      aria-label={`${text} (${t.resume.opensPdf})`}
    >
      <FileText className="h-4 w-4" aria-hidden="true" />
      {text}
    </a>
  );
}
