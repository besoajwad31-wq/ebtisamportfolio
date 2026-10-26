import type { ReactNode } from "react";

/** Small numbered section eyebrow, e.g. "01 — Selected Work". */
export function Eyebrow({ index, children }: { index?: string | undefined; children: ReactNode }) {
  return (
    <p className="label-mono flex items-center gap-3 text-primary">
      {index && <span className="text-muted-foreground">{index}</span>}
      <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {children && <div className="prose-editorial mt-6 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center rounded-full border border-border-strong px-3 py-1.5 text-[0.625rem] text-muted-foreground">
      {children}
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>;
}

/** Page intro used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  children,
  index,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  index?: string;
}) {
  return (
    <section className="bg-blueprint relative overflow-hidden border-b border-border pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="bg-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="animate-rise">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="animate-rise mt-6 max-w-5xl text-5xl leading-[1] md:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {children && (
          <div
            className="animate-rise prose-editorial mt-8 max-w-2xl text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
