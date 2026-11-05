import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { profile, homeLanding } from "@/content/site";
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

function HomePage() {
  return (
    <section className="bg-blueprint relative overflow-hidden border-b border-border">
      <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative flex min-h-[80svh] items-center pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="max-w-4xl">
          <div className="animate-rise"><Eyebrow>{homeLanding.eyebrow}</Eyebrow></div>
          <h1 className="animate-rise mt-8 text-6xl leading-[1] sm:text-7xl lg:text-8xl">
            {profile.firstName}<br /><em className="text-primary">{homeLanding.surname}</em>
          </h1>
          <p className="animate-rise mt-8 max-w-2xl font-display text-2xl leading-snug md:text-3xl">
            {profile.major} {homeLanding.studentLabel}
          </p>
          <p className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {homeLanding.supportingSentence}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            {homeLanding.links.map((link) => (
              <Link key={link.to} to={link.to} className={buttonClass({ variant: link.to === "/projects" ? "solid" : "outline" })}>
                {link.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
