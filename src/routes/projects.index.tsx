import { createFileRoute } from "@tanstack/react-router";

import { projects } from "@/content/projects";
import { ContactSection } from "@/components/site/ContactSection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Container, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ebtisam Alshiyamy · Industrial and System Engineering" },
      {
        name: "description",
        content:
          "University projects by Ebtisam Alshiyamy: reverse engineering in Autodesk Inventor, a solar-powered phone case design, a sports hackathon and a quality control case study.",
      },
      { property: "og:title", content: "Projects — Ebtisam Alshiyamy" },
      {
        property: "og:description",
        content:
          "Reverse engineering, engineering design and quality projects from the University of Jeddah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Work from the <em className="text-primary">drafting table.</em>
          </>
        }
      >
        <p>
          University projects in reverse engineering, CAD modeling, engineering design and quality —
          each with a full case study.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
            <p className="label-mono text-muted-foreground">Index of works</p>
            <p className="label-mono text-primary">{String(projects.length).padStart(2, "0")} entries</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        </Container>
      </section>

      <ContactSection index="—" />
    </>
  );
}
