import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { coreStrengths, engineeringMethods, profile, technicalSkills } from "@/content/site";
import { buttonClass } from "@/components/site/buttons";
import { ContactSection } from "@/components/site/ContactSection";
import { ResumeButton } from "@/components/site/ResumeButton";
import { Container, Eyebrow, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ebtisam Alshiyamy · Industrial & Systems Engineering" },
      {
        name: "description",
        content:
          "About Ebtisam Alshiyamy, a third-year Industrial & Systems Engineering student at the University of Jeddah: education, skills and interests.",
      },
      { property: "og:title", content: "About Ebtisam Alshiyamy" },
      {
        property: "og:description",
        content:
          "Third-year Industrial & Systems Engineering student at the University of Jeddah with an interest in analytical thinking and engineering design.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Systems thinking, <em className="text-primary">with care</em> for the details.
          </>
        }
      >
        <p>
          {profile.fullName} · {profile.major} · {profile.university}
        </p>
      </PageHero>

      {/* Biography */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
            <aside className="reveal lg:sticky lg:top-28 lg:self-start">
              <div className="tech-frame border border-border bg-card p-8">
                <p className="label-mono text-primary">Profile</p>
                <dl className="mt-6 space-y-5">
                  {[
                    ["Name", profile.fullName],
                    ["Major", profile.major],
                    ["University", profile.university],
                    ["Level", profile.level],
                    ["GPA", profile.gpa],
                    ["Location", profile.location],
                    ["Languages", profile.languages.join(" · ")],
                  ].map(([k, v]) => (
                    <div key={k} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <dt className="label-mono text-muted-foreground">{k}</dt>
                      <dd className="mt-1.5 font-display text-xl">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8">
                  <ResumeButton size="sm" />
                </div>
              </div>
            </aside>

            <div className="reveal space-y-7">
              <Eyebrow index="01">Biography</Eyebrow>
              <p className="font-display text-3xl leading-snug md:text-4xl">
                I’m Ebtisam, a third-year {profile.major} student at the {profile.university} in
                Saudi Arabia.
              </p>
              <div className="prose-editorial space-y-6">
                <p>
                  I’m interested in understanding how people, processes and data work together—and how
                  systems can be measured and improved. My studies help me approach challenges through
                  analytical thinking, engineering design and structured problem-solving.
                </p>
                <p>
                  Through university projects, I have practiced reverse engineering with Autodesk Inventor,
                  collaborated on a solar-powered phone case concept, and explored quality control through
                  a Toyota case study. I’m continuing to build my skills in CAD, data analysis and teamwork.
                </p>
              </div>
              <Link to="/projects" className={`${buttonClass({ variant: "outline" })} mt-4`}>
                See my projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="border-y border-border bg-card/40 py-24 md:py-32">
        <Container>
          <SectionHeading index="02" eyebrow="Education" title="Academic journey" />
          <div className="reveal mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-[200px_1fr_auto]">
            <p className="label-mono text-primary">Currently · 3rd year</p>
            <div>
              <h3 className="text-3xl md:text-4xl">Bachelor of {profile.major}</h3>
              <p className="mt-3 text-muted-foreground">
                {profile.university}, {profile.country}
              </p>
              <p className="prose-editorial mt-6 max-w-2xl text-muted-foreground">
                Coursework has included Introduction to Engineering (EISE 101) and Introduction to
                Industrial & Systems Engineering, where I completed the team projects shown in my
                portfolio.
              </p>
            </div>
            <div className="md:text-right">
              <p className="label-mono text-muted-foreground">GPA</p>
              <p className="mt-1 font-display text-6xl text-primary">4.8</p>
              <p className="label-mono text-muted-foreground">/ 5.0</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading index="03" eyebrow="Skills" title="Technical skills" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {technicalSkills.map((g) => (
              <div key={g.title} className="reveal border border-border bg-card p-8">
                <p className="label-mono text-primary">{g.title}</p>
                <ul className="mt-6 space-y-5">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <p className="font-display text-2xl">{it.name}</p>
                      {it.detail && (
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="reveal border border-border p-8">
              <p className="label-mono text-primary">Methods practised in projects</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {engineeringMethods.map((m) => (
                  <span key={m} className="rounded-full border border-border-strong px-4 py-2 text-sm text-muted-foreground">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="reveal border border-border p-8">
              <p className="label-mono text-primary">Personal strengths</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {coreStrengths.map((m) => (
                  <span key={m} className="rounded-full border border-border-strong px-4 py-2 text-sm text-muted-foreground">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection index="04" />
    </>
  );
}
