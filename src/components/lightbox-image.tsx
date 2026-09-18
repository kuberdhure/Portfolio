"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function LightboxImage({ src, alt, className = "" }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
        aria-label={`Expand ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10 text-right font-mono text-[10px] uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          View full image
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background/90 text-foreground shadow-lg transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-neon sm:right-8 sm:top-8"
              aria-label="Close image preview"
            >
              <X className="size-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[calc(100vh-2rem)] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[calc(100vh-4rem)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
