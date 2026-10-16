import { ArrowUpRight } from "lucide-react";
import { LightboxImage } from "@/components/lightbox-image";

const imageRoot = "/images/real-estate";
const liveDemoUrl = "https://realsta-kd.vercel.app";

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      <span className="h-px w-6 bg-border" aria-hidden />
      {label}
    </div>
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

export function RealEstateCaseStudy() {
  return (
    <>
      <header className="border-b border-border pb-16 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          05 · 2026 · Concept Project
        </p>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
          North &amp; Pine — Real Estate Website Concept
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          An editorial real estate experience that makes property discovery feel
          less transactional and more personal.
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <Meta label="Type" value="Concept Project" />
          <Meta label="Role" value="Design & Development" />
          <Meta label="Year" value="2026" />
          <Meta label="Stack" value="Next.js, GSAP" />
        </dl>
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-neon hover:text-foreground"
        >
          View live demo
          <ArrowUpRight className="size-4" />
        </a>
      </header>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border md:mt-16">
        <LightboxImage
          src={`${imageRoot}/hero.jpeg`}
          alt="North & Pine real estate website concept shown in a browser window"
          className="rounded-none"
        />
      </div>

      <section className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel label="Concept" />
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            The Concept
          </h2>
        </div>
        <div className="space-y-5 text-pretty text-lg text-muted-foreground md:col-span-8">
          <p>
            The idea was to move away from the conventional real estate website
            layout and create something that feels more like a premium lifestyle
            publication.
          </p>
          <p>
            Inspired by contemporary architecture magazines and luxury editorial
            design, the visual direction uses generous whitespace, oversized
            typography, restrained colors, and immersive imagery.
          </p>
          <p>
            The goal was to make property discovery feel less transactional and
            more personal , reflecting the idea that finding a home is about
            finding a place that feels right.
          </p>
        </div>
      </section>

      <section className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel label="Art Direction" />
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Visual Direction
          </h2>
        </div>
        <div className="space-y-10 text-pretty text-lg text-muted-foreground md:col-span-8">
          <p>
            The visual identity follows a minimal, editorial approach with a
            warm and understated aesthetic.
          </p>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-foreground">
                Typography
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <span className="text-foreground">Instrument Sans</span> —
                  used for headings to establish a clean, confident visual
                  hierarchy.
                </li>
                <li>
                  <span className="text-foreground">DM Sans</span> — used for
                  body copy and supporting text to maintain readability and
                  consistency.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground">
                Design Language
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Minimal layouts with generous whitespace.</li>
                <li>Large-scale architectural photography.</li>
                <li>Neutral, understated color palette.</li>
                <li>Refined typography and clear content hierarchy.</li>
                <li>Subtle interactions and scroll-based transitions.</li>
              </ul>
            </div>
          </div>
          <p>
            The overall direction balances sophistication with usability,
            keeping the properties and their imagery at the center of attention.
          </p>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <SectionLabel label="Features" />
        <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
          Key Features
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Immersive Hero Section
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              A visually engaging introduction that establishes the brand
              identity through architectural imagery and prominent typography.
            </p>
          </article>
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Curated Property Showcase
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              A dedicated property section that highlights selected listings
              through image-led cards and essential property information.
            </p>
          </article>
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Brand Storytelling
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              An introduction to the agency&apos;s philosophy, expertise, and
              approach to real estate.
            </p>
          </article>
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Client Testimonials
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              A testimonial section designed to establish trust through
              customer experiences.
            </p>
          </article>
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Contact Experience
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              A dedicated inquiry section with a structured contact form that
              makes connecting with the agency straightforward.
            </p>
          </article>
          <article className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-8">
            <h3 className="font-display text-xl italic text-foreground sm:col-span-4">
              Motion &amp; Interactions
            </h3>
            <p className="text-pretty text-muted-foreground sm:col-span-8">
              Subtle GSAP-powered animations and transitions that add depth to
              the browsing experience.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <SectionLabel label="Showcase" />
        <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
          Website preview
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
          A closer look at the visual direction and property presentation.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <LightboxImage
            src={`${imageRoot}/showcase.webp`}
            alt="North & Pine real estate website homepage preview"
            className="rounded-none"
          />
        </div>
      </section>
    </>
  );
}