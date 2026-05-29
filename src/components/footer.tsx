import { site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {site.social.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
