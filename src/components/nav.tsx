import Link from "next/link";
import { nav, site } from "@/data/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="font-serif text-lg leading-none tracking-tight"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
