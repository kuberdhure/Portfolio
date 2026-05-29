import { Section } from "@/components/section";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <Section id="testimonials" label="Kind Words">
      <div className="grid gap-12 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="flex flex-col gap-6">
            <blockquote className="text-pretty font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
              <span aria-hidden className="mr-1 text-muted-foreground">
                “
              </span>
              {t.quote}
              <span aria-hidden className="ml-1 text-muted-foreground">
                ”
              </span>
            </blockquote>
            <figcaption className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {t.name} — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
