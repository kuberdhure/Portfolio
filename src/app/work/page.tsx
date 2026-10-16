import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/data/content";

const rowClass =
  "group grid grid-cols-12 items-baseline gap-4 py-8 transition-colors hover:bg-muted/40 sm:gap-8 sm:py-10";

function Row({
  id,
  title,
  summary,
  year,
  role,
  stack,
  slug,
  linkDisabled,
  client,
}: (typeof projects)[number]) {
  const inner = (
    <>
      <span className="col-span-2 font-mono text-xs text-muted-foreground sm:col-span-1">
        {id}
      </span>
      <div className="col-span-10 sm:col-span-7">
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">
          {title}
        </h3>
        {client && (
          <p className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Made for
            </span>
            <span className="font-display text-lg italic text-foreground">
              {client}
            </span>
          </p>
        )}
        <p className="mt-2 max-w-xl text-pretty text-muted-foreground">
          {summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((t) => (
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
        {role}
      </span>
      <span className="col-span-4 flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:col-span-1">
        <span>{year}</span>
        {!linkDisabled && (
          <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
        )}
      </span>
    </>
  );

  if (slug && !linkDisabled) {
    return (
      <Link href={`/work/${slug}`} className={rowClass}>
        {inner}
      </Link>
    );
  }

  return <div className={rowClass}>{inner}</div>;
}

export default function WorkIndexPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:px-10 md:pt-24 md:pb-20">
        <div aria-hidden className="hero-bg pointer-events-none absolute inset-0 -z-10" />
        <div className="relative mx-auto w-full max-w-5xl">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            All work
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            A fuller look at the projects, prototypes, and case studies I’ve
            worked on.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            This page includes the complete set of work entries, including
            placeholder concepts that are ready for real screenshots and copy
            later.
          </p>
        </div>
      </section>

      <Section className="pt-0">
        <ul className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li key={project.slug ?? project.id}>
              <Row {...project} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
