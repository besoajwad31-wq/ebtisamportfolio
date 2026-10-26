import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { projects } from "@/content/projects";
import { MAJOR, profile } from "@/content/site";

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return name === "test" ? [] : sourceFiles(full);
    return /\.(tsx?|css)$/.test(name) && !name.endsWith(".gen.ts") ? [full] : [];
  });
}

describe("Portfolio content rules", () => {
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
