import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navLinks, profile } from "@/content/site";
import { ResumeButton } from "./ResumeButton";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-primary/50 font-display text-lg italic text-primary ${className}`}
    >
      {profile.initials}
      <span className="absolute -right-1 top-1/2 h-px w-2 bg-primary/60" />
      <span className="absolute -left-1 top-1/2 h-px w-2 bg-primary/60" />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${profile.shortName} — home`}
          onClick={() => setOpen(false)}
        >
          <Monogram className="transition-colors group-hover:bg-primary-soft" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xl tracking-wide">{profile.shortName}</span>
            <span className="label-mono text-[0.6rem] text-muted-foreground">{profile.major}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="label-mono relative py-2 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
              activeProps={{ "data-status": "active" } as Record<string, string>}
            >
              {l.label}
            </Link>
          ))}
          <ResumeButton size="sm" />
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="bg-blueprint h-[calc(100dvh-5rem)] border-t border-border bg-background px-6 pb-10 pt-8 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="animate-rise flex items-baseline justify-between border-b border-border py-5 font-display text-4xl text-foreground data-[status=active]:text-primary"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
                <span className="label-mono text-muted-foreground">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <ResumeButton />
          </div>
        </div>
      )}
    </header>
  );
}
