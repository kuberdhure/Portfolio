import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();

  const cs = project.caseStudy;
  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects.slice(idx + 1).find((p) => p.slug);

  return (
    <main className="px-6 pb-32 pt-12 sm:px-10 md:pb-40">
      <article className="mx-auto w-full max-w-5xl">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All work
        </Link>

        {/* Cover */}
        <ImagePlaceholder
          aspect="aspect-[16/10]"
          label={cs.cover ? "Cover" : "Cover image — drop file & wire src"}
          src={cs.cover}
          className="mt-12 md:mt-16"
        />

        {/* Title block */}
        <header className="mt-16 border-b border-border pb-16 md:mt-24 md:pb-20">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {project.id} · {project.year}
            {project.client && (
              <>
                {" · Made for "}
                <span className="text-foreground">{project.client}</span>
              </>
            )}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
          {cs.lead && (
            <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              {cs.lead}
            </p>
          )}

          {/* Meta strip */}
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Meta label="Client" value={project.client ?? "—"} />
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
            <Meta label="Stack" value={project.stack.join(", ")} />
          </dl>

          {cs.links && cs.links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {cs.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {l.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Problem */}
        <CaseSection label="Context" heading="The problem">
          <p>{cs.problem}</p>
        </CaseSection>

        {/* Solution */}
        <CaseSection label="Solution" heading="The solution">
          <p>{cs.overview}</p>
        </CaseSection>

        {/* Approach */}
        <CaseSection label="Process" heading="The approach">
          <p>{cs.approach}</p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-10 space-y-3 border-t border-border pt-10">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-neon shadow-[0_0_10px_hsl(var(--neon)/0.6)]"
                  />
                  <span className="text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </CaseSection>

        {/* Features */}
        {cs.features && (
          <section className="mt-24 md:mt-32">
            <SectionLabel label="Features" />
            <ImagePlaceholder
              aspect="aspect-[16/10]"
              label={cs.features.caption ?? "Features"}
              src={cs.features.src}
              className="mt-10"
            />
          </section>
        )}

        {/* Gallery */}
        {cs.gallery && cs.gallery.length > 0 && (
          <section className="mt-24 md:mt-32">
            <SectionLabel label="Gallery" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cs.gallery.map((g, i) => (
                <ImagePlaceholder
                  key={i}
                  aspect="aspect-[4/5]"
                  label={g.caption ?? `Screenshot ${i + 1}`}
                  src={g.src}
                />
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        <CaseSection label="Result" heading="The outcome">
          <p>{cs.outcome}</p>
        </CaseSection>

        {/* Stack chips */}
        <section className="mt-24 md:mt-32">
          <SectionLabel label="Built with" />
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-neon/50 bg-neon/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-neon shadow-[0_0_14px_-4px_hsl(var(--neon)/0.45)]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <nav className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10 md:mt-32">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All work
          </Link>
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex items-baseline gap-3"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Next project
              </span>
              <span className="font-display text-2xl italic transition-transform group-hover:-translate-x-0">
                {next.title.split(" — ")[0]}
              </span>
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      <span className="h-px w-6 bg-border" aria-hidden />
      {label}
    </div>
  );
}

function CaseSection({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
      <div className="md:col-span-4">
        <SectionLabel label={label} />
        <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="space-y-5 text-pretty text-lg text-muted-foreground md:col-span-8">
        {children}
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-pretty text-sm text-foreground">{value}</dd>
    </div>
  );
}

function ImagePlaceholder({
  aspect,
  label,
  src,
  className = "",
}: {
  aspect: string;
  label: string;
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={label}
        className={`block h-auto w-full rounded-2xl border border-border ${className}`}
      />
    );
  }
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-muted ${aspect} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
