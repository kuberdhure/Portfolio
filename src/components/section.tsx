import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  label?: string;
};

export function Section({ id, label, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-border px-6 py-24 sm:px-10 md:py-32",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl">
        {label && (
          <div className="mb-12 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-6 bg-border" aria-hidden />
            {label}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
