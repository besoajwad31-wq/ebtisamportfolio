import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import { homeLanding, profile } from "@/content/site";
import { buttonClass } from "@/components/site/buttons";
import { Container, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebtisam Alshiyamy — Industrial & Systems Engineering Student" },
      {
        name: "description",
        content:
          "Ebtisam Alshiyamy is a third-year Industrial & Systems Engineering student at the University of Jeddah. Explore engineering design, data analysis and structured problem-solving projects.",
      },
      { property: "og:title", content: "Ebtisam Alshiyamy — Industrial & Systems Engineering Student" },
      {
        property: "og:description",
        content:
          "Industrial & Systems Engineering, analytical problem-solving and an interest in management consulting — projects by Ebtisam Alshiyamy, University of Jeddah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

/**
 * Home is an overview only: a compact hero plus one short preview per page.
 * Biography, education, skills, project write-ups and activity details stay
 * on their own routes.
 */
function HomePage() {
  return (
    <>
      <section className="bg-blueprint relative overflow-hidden border-b border-border">
        <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative flex min-h-[72svh] items-center pb-24 pt-40 md:pb-32 md:pt-48">
          <div className="max-w-3xl">
            <div className="animate-rise">
              <Eyebrow>{homeLanding.eyebrow}</Eyebrow>
            </div>
            <h1 className="animate-rise mt-8 text-6xl leading-[1] sm:text-7xl lg:text-8xl">
              {profile.firstName}
              <br />
              <em className="text-primary">{homeLanding.surname}</em>
            </h1>
            <p className="animate-rise mt-8 font-display text-2xl leading-snug md:text-3xl">
              {profile.major} {homeLanding.studentLabel}
            </p>
            <p className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {homeLanding.supportingSentence}
            </p>
            <div className="animate-rise mt-12">
              <a href="#explore" className={`${buttonClass({ variant: "ghost", size: "sm" })} !px-0`}>
                {homeLanding.scroll}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="explore" className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
            <p className="label-mono text-muted-foreground">{homeLanding.indexLabel}</p>
            <p className="label-mono text-primary">
              {String(homeLanding.previews.length).padStart(2, "0")} {homeLanding.pagesLabel}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {homeLanding.previews.map((preview) => (
              <article
                key={preview.to}
                className="reveal tech-frame flex h-full flex-col border border-border bg-card p-8 shadow-card transition-colors duration-500 hover:border-primary/40 md:p-10"
              >
                <Eyebrow index={preview.index}>{preview.label}</Eyebrow>
                <h2 className="mt-6 text-3xl leading-tight md:text-4xl">{preview.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{preview.text}</p>
                <Link
                  to={preview.to}
                  className={`${buttonClass({ variant: "ghost", size: "sm" })} mt-8 self-start !px-0`}
                >
                  {preview.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
