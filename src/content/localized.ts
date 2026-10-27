import type { Locale } from "@/lib/i18n/locale";
import { projects, type Project } from "./projects";
import { projectsAr } from "./projects.ar";

export const projectsByLocale: Record<Locale, Project[]> = { en: projects, ar: projectsAr };

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  return projectsByLocale[locale].find((p) => p.slug === slug);
}
