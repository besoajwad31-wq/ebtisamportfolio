import { createFileRoute } from "@tanstack/react-router";

import { activitiesContent } from "@/content/activities";
import { ActivityEntries } from "@/components/site/ActivityEntries";
import { ContactSection } from "@/components/site/ContactSection";
import { Container, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: activitiesContent.metaTitle },
      { name: "description", content: activitiesContent.description },
      { property: "og:title", content: activitiesContent.metaTitle },
      { property: "og:description", content: activitiesContent.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <>
      <PageHero eyebrow={activitiesContent.title} title={activitiesContent.title} />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-6 md:grid-cols-2">
            <ActivityEntries />
          </div>
        </Container>
      </section>
      <ContactSection index="—" />
    </>
  );
}