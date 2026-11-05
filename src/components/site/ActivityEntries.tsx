import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Trophy } from "lucide-react";

import { activitiesContent } from "@/content/activities";
import { activityExperiences } from "@/content/projects";
import { peerLearning } from "@/content/site";
import { buttonClass } from "./buttons";

export function ActivityEntries() {
  return (
    <>
      {activityExperiences.map((activity) => (
        <article key={activity.slug} className="reveal flex flex-col border border-border bg-card p-8 md:p-10">
          <Trophy className="h-6 w-6 text-primary" aria-hidden="true" />
          <h3 className="mt-5 text-3xl leading-tight">{activity.title}</h3>
          <p className="label-mono mt-2 text-primary">{activity.facts.find((fact) => fact.label === "Role")?.value}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{activity.summary}</p>
          <Link
            to="/projects/$slug"
            params={{ slug: activity.slug }}
            className={`${buttonClass({ variant: "ghost", size: "sm" })} mt-6 self-start !px-0`}
          >
            {activitiesContent.readMore}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </article>
      ))}
      <article className="reveal border border-border bg-card p-8 md:p-10">
        <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
        <h3 className="mt-5 text-3xl leading-tight">{peerLearning.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{peerLearning.description}</p>
        <ul className="mt-6 space-y-5">
          {peerLearning.channels.map((channel) => (
            <li key={channel.code} className="border-t border-border pt-5">
              <p className="text-sm font-medium">{channel.code} — {channel.course}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {channel.resources} · {channel.subscribers} {peerLearning.subscriberLabel}
              </p>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${channel.code} — ${peerLearning.channelLabel}`}
                className={`${buttonClass({ variant: "ghost", size: "sm" })} mt-2 !px-0`}
              >
                {peerLearning.channelLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}