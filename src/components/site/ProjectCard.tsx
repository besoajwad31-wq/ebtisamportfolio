import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";
import { SafeImage } from "./SafeImage";
import { Tag } from "./ui";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="reveal group tech-frame flex h-full flex-col border border-border bg-card shadow-card transition-colors duration-500 hover:border-primary/40"
      aria-label={`Open project: ${project.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
        {project.cover ? (
          <SafeImage
            src={project.cover.src}
            alt={project.cover.alt}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        ) : project.visual ? (
          <ProjectVisual kind={project.visual} />
        ) : null}
        <span className="label-mono absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1.5 text-primary backdrop-blur">
          Fig. {project.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="label-mono text-muted-foreground">{project.category}</p>
        <h3 className="mt-3 text-2xl leading-tight md:text-[1.75rem]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-8">
          <span className="label-mono text-primary">View case study</span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
