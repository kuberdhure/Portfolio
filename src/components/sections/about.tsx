import { Section } from "@/components/section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">
            {about.heading}
          </h2>
        </div>
        <div className="space-y-5 text-pretty text-lg text-muted-foreground md:col-span-7">
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
