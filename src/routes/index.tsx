import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, GraduationCap, Trophy, Languages } from "lucide-react";

import { featuredSlugs, projects } from "@/content/projects";
import { profile, technicalSkills, coreStrengths } from "@/content/site";
import { buttonClass } from "@/components/site/buttons";
import { ContactSection } from "@/components/site/ContactSection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ResumeButton } from "@/components/site/ResumeButton";
import { SafeImage } from "@/components/site/SafeImage";
import { Container, Eyebrow, SectionHeading } from "@/components/site/ui";
import fanGrillePhoto from "@/assets/fan-grille-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebtisam Alshiyamy — Industrial and System Engineering Student" },
      {
        name: "description",
        content:
          "Ebtisam Alshiyamy is a third-year Industrial and System Engineering student at the University of Jeddah. Explore her CAD, design and quality projects.",
      },
      { property: "og:title", content: "Ebtisam Alshiyamy — Industrial and System Engineering Student" },
      {
        property: "og:description",
        content:
          "Analytical problem-solving and engineering design — university projects by Ebtisam Alshiyamy, University of Jeddah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = featuredSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      <Hero />

      {/* 01 — Featured projects */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              index="01"
              eyebrow="Selected Work"
              title={
                <>
                  Projects built on <em className="text-primary">curiosity</em> and careful study.
                </>
              }
            />
            <Link to="/projects" className={`${buttonClass({ variant: "outline" })} reveal shrink-0`}>
              All projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* 02 — Skills preview */}
      <section className="border-y border-border bg-card/40 py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeading
              index="02"
              eyebrow="Toolkit"
              title={
                <>
                  Tools for <em className="text-primary">modeling,</em> measuring and making sense of data.
                </>
              }
            >
              <p>The software and methods I use across my coursework and projects.</p>
              <Link to="/about" className={`${buttonClass({ variant: "ghost", size: "sm" })} mt-6 !px-0`}>
                Full skills on About
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </SectionHeading>

            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {technicalSkills.flatMap((g) => g.items.map((it) => ({ ...it, group: g.title }))).slice(0, 6).map((s, i) => (
                <div key={s.name} className="reveal bg-background p-6 md:p-7">
                  <p className="label-mono flex justify-between text-muted-foreground">
                    <span>{s.group}</span>
                    <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </p>
                  <p className="mt-4 font-display text-2xl">{s.name}</p>
                  {s.detail && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 03 + 04 — Education & activities */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <article className="reveal tech-frame relative overflow-hidden border border-border bg-card p-8 shadow-card md:p-12">
              <div className="bg-blueprint absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <Eyebrow index="03">Education</Eyebrow>
                <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-4xl leading-tight md:text-5xl">
                      Bachelor of {profile.major}
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                      {profile.university} · {profile.country}
                    </p>
                    <p className="label-mono mt-6 text-muted-foreground">Currently in third year</p>
                  </div>
                  <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <p className="label-mono text-muted-foreground">Cumulative GPA</p>
                    <p className="mt-2 font-display text-7xl leading-none text-primary md:text-8xl">4.8</p>
                    <p className="label-mono mt-2 text-muted-foreground">out of 5.0</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="reveal flex flex-col border border-border bg-card p-8 md:p-10">
                <Eyebrow index="04">Activities</Eyebrow>
                <Trophy className="mt-8 h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 text-3xl leading-tight">Sports Hackathon</h3>
                <p className="label-mono mt-2 text-primary">Participant</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Collaborated with a team to develop ideas and solve challenges under time constraints.
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: "sports-hackathon" }}
                  className={`${buttonClass({ variant: "ghost", size: "sm" })} mt-6 self-start !px-0`}
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
              <article className="reveal border border-border bg-card p-8 md:p-10">
                <Languages className="h-6 w-6 text-primary" aria-hidden="true" />
                <p className="label-mono mt-6 text-muted-foreground">Languages</p>
                <p className="mt-2 font-display text-3xl">Arabic · English</p>
              </article>
            </div>
          </div>

          <div className="reveal mt-6 flex flex-wrap gap-3 border border-border p-6 md:p-8">
            <p className="label-mono mr-4 self-center text-primary">Strengths</p>
            {coreStrengths.map((s) => (
              <span key={s} className="rounded-full border border-border-strong px-4 py-2 text-sm text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection index="05" />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-blueprint relative overflow-hidden border-b border-border">
      <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid min-h-[100svh] items-center gap-14 pb-16 pt-32 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-28">
        <div>
          <div className="animate-rise">
            <Eyebrow>Engineering Portfolio</Eyebrow>
          </div>
          <h1
            className="animate-rise mt-8 text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.92]"
            style={{ animationDelay: "100ms" }}
          >
            Ebtisam
            <br />
            <em className="text-primary">Alshiyamy</em>
          </h1>
          <p
            className="animate-rise mt-8 max-w-xl font-display text-2xl leading-snug text-foreground/90 md:text-3xl"
            style={{ animationDelay: "220ms" }}
          >
            An {profile.major} student who enjoys understanding how things work — and how they could work better.
          </p>
          <p
            className="animate-rise prose-editorial mt-6 max-w-lg text-muted-foreground"
            style={{ animationDelay: "320ms" }}
          >
            Third-year at the {profile.university}, with a focus on analytical problem-solving,
            engineering design and the details that hold a system together.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <Link to="/projects" className={buttonClass({ variant: "solid" })}>
              Explore projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <ResumeButton />
          </div>

          <dl
            className="animate-rise mt-14 grid max-w-xl grid-cols-3 border-t border-border pt-6"
            style={{ animationDelay: "520ms" }}
          >
            {[
              ["Major", "Industrial & System Eng."],
              ["Level", "Third year"],
              ["GPA", profile.gpa],
            ].map(([k, v]) => (
              <div key={k} className="pr-4">
                <dt className="label-mono text-muted-foreground">{k}</dt>
                <dd className="mt-2 font-display text-lg leading-tight md:text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroFigure />
      </Container>

      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: window.innerHeight - 40, behavior: "smooth" });
        }}
        className="label-mono absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-muted-foreground hover:text-primary lg:flex"
        aria-label="Scroll to selected work"
      >
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
}

function HeroFigure() {
  return (
    <figure className="animate-rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "300ms" }}>
      {/* Rotating dashed construction circle */}
      <svg
        viewBox="0 0 400 400"
        className="animate-slow-spin pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] text-primary opacity-40"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 7" />
      </svg>

      <div className="tech-frame relative overflow-hidden border border-border-strong bg-card shadow-card">
        <SafeImage
          src={fanGrillePhoto.url}
          alt="Pink radial front grille from the reverse-engineered handheld cooling fan"
          loading="eager"
          className="aspect-[4/5] w-full object-cover"
        />
        {/* Drafting overlay */}
        <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full text-primary" aria-hidden="true" preserveAspectRatio="none">
          <g fill="none" stroke="currentColor" strokeWidth="0.8">
            <line x1="20" y1="470" x2="380" y2="470" strokeOpacity="0.8" className="animate-draw" style={{ ["--dash" as string]: 360 }} />
            <path d="M20 464 v12 M380 464 v12" />
            <line x1="200" y1="30" x2="200" y2="440" strokeOpacity="0.35" strokeDasharray="8 4 2 4" />
            <line x1="40" y1="250" x2="360" y2="250" strokeOpacity="0.35" strokeDasharray="8 4 2 4" />
          </g>
        </svg>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-16">
          <p className="label-mono text-primary">Fig. 01 — Front grille</p>
          <p className="mt-1 text-sm text-foreground/80">Reverse engineering of a handheld cooling fan</p>
        </div>
      </div>

      <figcaption className="mt-4 flex items-center justify-between">
        <span className="label-mono text-muted-foreground">Modeled in Autodesk Inventor</span>
        <Link
          to="/projects/$slug"
          params={{ slug: "reverse-engineering-cooling-fan" }}
          className="label-mono text-primary hover:underline"
        >
          View study →
        </Link>
      </figcaption>
    </figure>
  );
}
