import { Section } from "@/components/section";
import { services } from "@/data/content";

export function Services() {
  return (
    <Section id="services" label="Services">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="flex flex-col bg-background p-8 transition-colors hover:bg-muted/40"
          >
            <h3 className="font-serif text-2xl tracking-tight">{s.title}</h3>
            {s.starting && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.starting}
              </p>
            )}
            <p className="mt-4 text-pretty text-muted-foreground">
              {s.description}
            </p>
            <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block size-1 rounded-full bg-foreground"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
