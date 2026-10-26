import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getProject, projects } from "@/content/projects";
import { buttonClass } from "@/components/site/buttons";
import { GalleryFigure } from "@/components/site/Lightbox";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { SafeImage } from "@/components/site/SafeImage";
import { Container, Eyebrow, Tag } from "@/components/site/ui";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) {
      return { meta: [{ title: "Project not found — Ebtisam Alshiyamy" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${p.title} — Ebtisam Alshiyamy`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-blueprint flex min-h-[80vh] items-center justify-center px-6 pt-20 text-center">
      <div>
        <p className="label-mono text-primary">Project not found</p>
        <h1 className="mt-4 text-5xl">This project isn’t here.</h1>
        <Link to="/projects" className={`${buttonClass({ variant: "outline" })} mt-8`}>
          All projects
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length] ?? p;
  const next = projects[(idx + 1) % projects.length] ?? p;

  return (
    <article>
      {/* Header */}
      <header className="bg-blueprint relative overflow-hidden border-b border-border pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <Link
            to="/projects"
            className="label-mono animate-rise inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All projects
          </Link>
          <div className="animate-rise mt-10" style={{ animationDelay: "80ms" }}>
            <Eyebrow index={`Fig. ${p.number}`}>{p.category}</Eyebrow>
          </div>
          <h1
            className="animate-rise mt-6 max-w-5xl text-5xl leading-[1] md:text-7xl lg:text-8xl"
            style={{ animationDelay: "160ms" }}
          >
            {p.title}
          </h1>
          <p
            className="animate-rise prose-editorial mt-8 max-w-2xl text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            {p.summary}
          </p>

          <dl
            className="animate-rise mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
            style={{ animationDelay: "320ms" }}
          >
            {p.facts.map((f) => (
              <div key={f.label} className="bg-background p-5 md:p-6">
                <dt className="label-mono text-muted-foreground">{f.label}</dt>
                <dd className="mt-2 font-display text-xl leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* Cover */}
      <Container className="-mt-px pt-14 md:pt-20">
        <div className="reveal tech-frame overflow-hidden border border-border-strong bg-card shadow-card">
          {p.cover ? (
            <SafeImage
              src={p.cover.src}
              alt={p.cover.alt}
              className="max-h-[70vh] w-full object-cover"
              loading="eager"
            />
          ) : p.visual ? (
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <ProjectVisual kind={p.visual} />
            </div>
          ) : null}
        </div>
        {p.cover && <p className="label-mono mt-4 text-muted-foreground">{p.cover.caption}</p>}
      </Container>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div className="reveal">
              <Eyebrow index="01">Overview</Eyebrow>
              <p className="label-mono mt-6 text-muted-foreground">{p.context}</p>
            </div>
            <div className="reveal space-y-6">
              <p className="font-display text-3xl leading-snug md:text-4xl">{p.overview[0]}</p>
              <div className="prose-editorial space-y-5">
                {p.overview.slice(1).map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>
          </div>

          {p.highlights && (
            <div className="reveal mt-20">
              <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
                {p.highlights.map((h) => (
                  <div key={h.label} className="bg-card p-8">
                    <p className="font-display text-6xl text-primary">{h.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.label}</p>
                  </div>
                ))}
              </div>
              {p.highlightsNote && (
                <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                  <span className="label-mono mr-2 text-primary">Note</span>
                  {p.highlightsNote}
                </p>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* Sections */}
      {p.sections.map((s, si) => (
        <section key={s.title} className="border-t border-border py-20 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div className="reveal">
                <Eyebrow index={String(si + 2).padStart(2, "0")}>Section</Eyebrow>
                <h2 className="mt-5 text-4xl leading-tight md:text-5xl">{s.title}</h2>
              </div>
              <div className="reveal">
                {s.body && (
                  <div className="prose-editorial space-y-5">
                    {s.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                )}
                {s.list && (
                  <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                    {s.list.map((t, i) => (
                      <li key={t} className="flex gap-4 bg-background p-5">
                        <span className="label-mono pt-1 text-primary">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-foreground/85">{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.steps && (
                  <ol className="relative space-y-0 border-l border-border-strong">
                    {s.steps.map((st, i) => (
                      <li key={st.title} className="relative pb-10 pl-10 last:pb-0">
                        <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rotate-45 border border-primary bg-background" aria-hidden="true" />
                        <p className="label-mono text-primary">Step {String(i + 1).padStart(2, "0")}</p>
                        <h3 className="mt-2 text-2xl md:text-3xl">{st.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{st.text}</p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Gallery */}
      {p.gallery.length > 0 && (
        <section className="border-t border-border bg-card/40 py-20 md:py-28">
          <Container>
            <div className="reveal flex items-end justify-between gap-6">
              <div>
                <Eyebrow index="—">Project files</Eyebrow>
                <h2 className="mt-5 text-4xl md:text-5xl">Gallery</h2>
              </div>
              <p className="label-mono hidden text-muted-foreground sm:block">Tap an image to enlarge</p>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {p.gallery.map((img, i) => (
                <GalleryFigure key={img.src} image={img} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Skills */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="reveal grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <Eyebrow index="—">Skills applied</Eyebrow>
            <div className="flex flex-wrap gap-2.5">
              {p.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          {p.note && (
            <p className="reveal mt-10 border border-dashed border-border-strong p-5 text-sm text-muted-foreground">
              {p.note}
            </p>
          )}
        </Container>
      </section>

      {/* Prev / next */}
      <nav aria-label="More projects" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group border-b border-border p-8 transition-colors hover:bg-card md:border-b-0 md:border-r md:p-12"
          >
            <span className="label-mono inline-flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
            </span>
            <span className="mt-3 block font-display text-2xl group-hover:text-primary md:text-3xl">{prev.title}</span>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group p-8 text-right transition-colors hover:bg-card md:p-12"
          >
            <span className="label-mono inline-flex items-center gap-2 text-muted-foreground">
              Next <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="mt-3 block font-display text-2xl group-hover:text-primary md:text-3xl">{next.title}</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
