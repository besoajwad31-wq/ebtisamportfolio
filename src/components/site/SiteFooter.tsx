import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

import { navLinks } from "@/content/site";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Monogram } from "./SiteHeader";
import { Ltr } from "./ui";

export function SiteFooter() {
  const { t, site } = useI18n();
  const { profile } = site;
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Monogram />
              <div>
                <p className="font-display text-2xl" lang="en">
                  {profile.fullName}
                </p>
                <p className="label-mono mt-1 text-muted-foreground">
                  {profile.major} · {profile.university}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="label-mono text-primary">{t.footer.index}</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {t.nav[l.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-primary">{t.footer.contact}</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <Ltr>{profile.email}</Ltr>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  {t.footer.linkedin}
                </a>
              </li>
              <li className="text-muted-foreground">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="rule-tick mt-14" />
        <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row">
          <p className="label-mono text-muted-foreground">
            <Ltr>
              © {new Date().getFullYear()} {profile.shortName}
            </Ltr>
          </p>
          <p className="label-mono text-muted-foreground">{t.footer.place}</p>
        </div>
      </div>
    </footer>
  );
}
