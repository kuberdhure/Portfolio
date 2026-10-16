"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/section";
import { featuredProjects, type Project } from "@/data/content";

function ProjectCard({ p }: { p: Project }) {
  const title = p.title.split(/\s[—-]\s/)[0];
  const cover = p.caseStudy?.cover;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const titleId = `project-${p.id}-title`;
  const summaryId = `project-${p.id}-summary`;
  const detailsHref = p.slug ? `/work/${p.slug}` : p.href;

  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousDocumentOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [isOpen]);

  return (
    <article data-gsap-work-card className="group relative min-w-0">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border bg-muted">
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-fill transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Preview coming soon
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex min-w-0 items-center justify-between gap-4">
        <h3 className="truncate font-display text-xl leading-tight sm:text-2xl">
          {title}
        </h3>
        <ArrowUpRight className="size-4 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100" />
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {p.summary}
      </p>
      {!p.linkDisabled && (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`Open ${title} project preview`}
          onClick={() => {
            dialogRef.current?.showModal();
            setIsOpen(true);
          }}
          className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-4"
        />
      )}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={summaryId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overscroll-contain overflow-y-auto rounded-sm border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-foreground/25 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95 open:duration-500 open:ease-out"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
          {cover ? (
            <Image
              src={cover}
              alt={`${title} hero image`}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Preview coming soon
              </span>
            </div>
          )}
        </div>
        <div className="p-6 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {p.year} · {p.role}
            </p>
            <button
              type="button"
              aria-label="Close project preview"
              onClick={() => dialogRef.current?.close()}
              className="grid size-9 shrink-0 place-items-center border border-border text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
            >
              <X className="size-4" />
            </button>
          </div>
          <h2 id={titleId} className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            {p.title}
          </h2>
          <p id={summaryId} className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            {p.summary}
          </p>
          {detailsHref && !p.linkDisabled && (
            <div className="mt-8 flex justify-end border-t border-border pt-6">
              {p.slug ? (
                <Link
                  href={detailsHref}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-neon"
                >
                  View project
                  <ArrowUpRight className="size-4" />
                </Link>
              ) : (
                <a
                  href={detailsHref}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:text-neon"
                >
                  View project
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </dialog>
    </article>
  );
}

export function Work() {
  return (
    <Section id="work">
      <div className="mb-12 flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-6 bg-border" aria-hidden />
          Selected Work
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border-b border-neon pb-1 font-mono text-[11px] uppercase tracking-widest text-neon transition-colors hover:text-foreground"
        >
          View all work
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
      <div data-gsap-work-list className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </Section>
  );
}
