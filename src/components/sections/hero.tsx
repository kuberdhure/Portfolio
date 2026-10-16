import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hero, site } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32 sm:px-10 md:pt-32 md:pb-40">
      <div aria-hidden className="hero-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="relative mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-12 md:items-center md:gap-16">
        <div className="md:col-span-7">
          <Badge className="mb-8" data-gsap-hero>
            <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-foreground" />
            {hero.eyebrow}
          </Badge>
          <p data-gsap-hero className="mb-6 font-display text-2xl text-muted-foreground sm:text-3xl">
            Hi, I&rsquo;m <span className="text-foreground">{site.name}.</span>
          </p>
          <h1 data-gsap-hero className="max-w-3xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            {hero.heading}
          </h1>
          <p data-gsap-hero className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {hero.sub}
          </p>
          <a
            href={`mailto:${site.email}`}
            data-gsap-hero
            className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2")}
          >
            Drop me a mail
            <ArrowUpRight className="size-4" />
          </a>
          <p data-gsap-hero className="mt-10 text-pretty font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {site.location} · {site.availability}
          </p>
        </div>
        <div className="md:col-span-5">
          <div data-gsap-hero className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_24px_80px_-32px_hsl(var(--foreground)/0.35)]">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
