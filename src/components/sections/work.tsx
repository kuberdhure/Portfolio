import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { projects, type Project } from "@/data/content";

const rowClass =
  "group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-muted/40 sm:gap-8 sm:py-10";

function Row({ p }: { p: Project }) {
  const inner = (
    <>
      <span className="col-span-2 font-mono text-xs text-muted-foreground sm:col-span-1">
        {p.id}
      </span>
      <div className="col-span-10 sm:col-span-7">
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">
          {p.title}
        </h3>
        {p.client && (
          <p className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Made for
            </span>
            <span className="font-display text-lg italic text-foreground">
              {p.client}
            </span>
          </p>
        )}
        <p className="mt-2 max-w-xl text-pretty text-muted-foreground">
          {p.summary}
        </p>
        {p.tagline && (
          <p className="mt-3 max-w-xl font-display text-base italic text-foreground/80">
            {p.tagline}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-neon/50 bg-neon/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neon shadow-[0_0_14px_-4px_hsl(var(--neon)/0.45)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="col-span-8 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:col-span-3 sm:block">
        {p.role}
      </span>
      <span className="col-span-4 flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:col-span-1">
        <span>{p.year}</span>
        <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </>
  );

  if (p.slug) {
    return (
      <Link href={`/work/${p.slug}`} className={rowClass}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={p.href ?? "#"} className={rowClass}>
      {inner}
    </a>
  );
}

export function Work() {
  return (
    <Section id="work" label="Selected Work">
      <ul className="divide-y divide-border border-y border-border">
        {projects.map((p) => (
          <li key={p.id}>
            <Row p={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
