import Image from "next/image";
import { Section } from "@/components/section";
import { about, site } from "@/data/content";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative mb-8 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
              priority={false}
            />
          </div>
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
