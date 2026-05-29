import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { contact, site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="flex flex-col gap-10">
        <h2 className="max-w-3xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
          {contact.heading}
        </h2>
        <p className="max-w-xl text-pretty text-lg text-muted-foreground">
          {contact.sub}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className={cn(buttonVariants(), "gap-2")}
          >
            {site.email}
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            Book a call
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
