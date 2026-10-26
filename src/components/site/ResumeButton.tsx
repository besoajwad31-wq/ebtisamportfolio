import { FileText } from "lucide-react";

import { profile } from "@/content/site";
import { buttonClass } from "./buttons";

export function ResumeButton({
  size = "md",
  variant = "outline",
  label = "View Resume",
}: {
  size?: "sm" | "md";
  variant?: "outline" | "solid";
  label?: string;
}) {
  if (!profile.resumeUrl) {
    return (
      <span className={buttonClass({ variant: "outline", size, disabled: true })} aria-disabled="true">
        Resume coming soon
      </span>
    );
  }
  return (
    <a
      href={profile.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass({ variant, size })}
      aria-label={`${label} (PDF, opens in a new tab)`}
    >
      <FileText className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
