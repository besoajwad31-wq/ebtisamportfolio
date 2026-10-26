import { useState } from "react";
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin } from "lucide-react";

import { profile } from "@/content/site";
import { buttonClass } from "./buttons";
import { ResumeButton } from "./ResumeButton";
import { Container, Eyebrow } from "./ui";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          window.location.href = `mailto:${profile.email}`;
        }
      }}
      className={buttonClass({ variant: "ghost", size: "sm" })}
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

export function ContactSection({ index = "05" }: { index?: string }) {
  return (
    <section className="bg-blueprint relative overflow-hidden border-t border-border py-24 md:py-36">
      <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="reveal">
          <Eyebrow index={index}>Contact</Eyebrow>
          <h2 className="mt-6 max-w-4xl text-5xl leading-[1] md:text-8xl">
            Let’s start a <em className="text-primary">conversation.</em>
          </h2>
          <p className="prose-editorial mt-8 max-w-xl text-muted-foreground">
            I’m always happy to connect about engineering, university projects or learning
            opportunities. The best way to reach me is by email or LinkedIn.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group flex flex-col gap-6 bg-background p-7 transition-colors hover:bg-card md:p-9"
          >
            <span className="flex items-center justify-between">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
            </span>
            <span>
              <span className="label-mono block text-muted-foreground">Email</span>
              <span className="mt-2 block break-all font-display text-2xl">{profile.email}</span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6 bg-background p-7 transition-colors hover:bg-card md:p-9"
          >
            <span className="flex items-center justify-between">
              <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
            </span>
            <span>
              <span className="label-mono block text-muted-foreground">LinkedIn</span>
              <span className="mt-2 block font-display text-2xl">Ebtisam Alshiyamy</span>
            </span>
          </a>
          <div className="flex flex-col gap-6 bg-background p-7 md:p-9">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>
              <span className="label-mono block text-muted-foreground">Based in</span>
              <span className="mt-2 block font-display text-2xl">{profile.location}</span>
            </span>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className={buttonClass({ variant: "solid" })}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Send an email
          </a>
          <ResumeButton />
          <CopyEmailButton />
        </div>
      </Container>
    </section>
  );
}
