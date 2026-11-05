import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { projects, projectWork, activityExperiences, featuredSlugs } from "@/content/projects";
import { MAJOR, profile, peerLearning, navLinks } from "@/content/site";

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === "test" ? [] : sourceFiles(full);
    return /\.(tsx?|css)$/.test(name) && !name.endsWith(".gen.ts") ? [full] : [];
  });
}

describe("Portfolio content rules", () => {
  it("keeps five destinations in the requested order", () => {
    expect(navLinks.map((link) => link.to)).toEqual(["/", "/about", "/projects", "/activities", "/contact"]);
  });

  it("groups hackathon participation under Activities, outside project listings", () => {
    expect(activityExperiences.map((entry) => entry.slug)).toEqual(["sports-hackathon"]);
    expect(projectWork.map((entry) => entry.slug)).toEqual([
      "reverse-engineering-cooling-fan", "solar-powered-phone-case", "quality-control-toyota",
    ]);
    expect(featuredSlugs).not.toContain("sports-hackathon");
    expect(projects.find((entry) => entry.slug === "sports-hackathon")).toBeDefined();
  });
  it("preserves the EISE131 channel and its 143 subscribers", () => {
    const channel = peerLearning.channels.find((entry) => entry.code === "EISE131");
    expect(channel?.subscribers).toBe(143);
    expect(channel?.url).toBe("https://t.me/statuniofjed");
  });

  it("preserves the EISE232 channel and its 81 subscribers", () => {
    const channel = peerLearning.channels.find((entry) => entry.code === "EISE232");
    expect(channel?.subscribers).toBe(81);
    expect(channel?.url).toBe("https://t.me/EISE232mid");
  });

  it("names the major consistently as 'Industrial & Systems Engineering'", () => {
    expect(MAJOR).toBe("Industrial & Systems Engineering");
    expect(profile.major).toBe(MAJOR);
  });

  it("never uses the old major name 'Industrial Engineering' anywhere in the site source", () => {
    const offenders = sourceFiles(join(process.cwd(), "src")).filter((f) =>
      /Industrial Engineering/i.test(readFileSync(f, "utf8")),
    );
    expect(offenders).toEqual([]);
  });

  it("includes the three confirmed projects", () => {
    const titles = projects.map((p) => p.title);
    expect(titles).toContain("Reverse Engineering of a Handheld Cooling Fan");
    expect(titles).toContain("Solar-Powered Phone Case Project");
    expect(titles).toContain("Sports Hackathon Participation");
  });

  it("gives every project a unique link", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
