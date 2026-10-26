import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ebtisam Alshiyamy · Industrial and System Engineering" },
      {
        name: "description",
        content:
          "Get in touch with Ebtisam Alshiyamy, Industrial and System Engineering student in Jeddah, Saudi Arabia, by email or LinkedIn.",
      },
      { property: "og:title", content: "Contact Ebtisam Alshiyamy" },
      {
        property: "og:description",
        content: "Email, LinkedIn and resume for Ebtisam Alshiyamy, University of Jeddah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection index="—" asPage />
    </div>
  );
}
