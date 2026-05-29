import { hero, site } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32 sm:px-10 md:pt-32 md:pb-40">
      <div aria-hidden className="hero-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="relative mx-auto w-full max-w-5xl">
        <Badge className="mb-8">
          <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-foreground" />
          {hero.eyebrow}
        </Badge>
        <p className="mb-6 font-display text-2xl text-muted-foreground sm:text-3xl">
          Hi, I&rsquo;m <span className="text-foreground">{site.name}.</span>
        </p>
        <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
          {hero.heading}
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
          {hero.sub}
        </p>
        <p className="mt-10 text-pretty font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {site.location} · {site.availability}
        </p>
      </div>
    </section>
  );
}
