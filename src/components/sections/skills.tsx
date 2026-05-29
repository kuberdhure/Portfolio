"use client";

import { useEffect, useRef } from "react";
import { Section } from "@/components/section";
import { techStack } from "@/data/content";

const SPEED_PX_PER_SEC = 40;

export function Skills() {
  // Duplicate the list so the marquee loops seamlessly.
  const items = [...techStack, ...techStack];

  const trackRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const hoveringRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    let raf = 0;
    let last = performance.now();

    const tick = (time: number) => {
      const dt = (time - last) / 1000;
      last = time;
      if (!draggingRef.current && !hoveringRef.current) {
        offsetRef.current -= SPEED_PX_PER_SEC * dt;
      }
      const half = halfWidthRef.current;
      if (half > 0) {
        if (offsetRef.current <= -half) offsetRef.current += half;
        if (offsetRef.current > 0) offsetRef.current -= half;
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    let next = dragStartRef.current.offset + dx;
    const half = halfWidthRef.current;
    if (half > 0) {
      while (next <= -half) next += half;
      while (next > 0) next -= half;
    }
    offsetRef.current = next;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <Section id="skills" label="Toolkit">
      <div
        className="marquee-mask relative cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing"
        onPointerEnter={() => {
          hoveringRef.current = true;
        }}
        onPointerLeave={() => {
          hoveringRef.current = false;
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <ul
          ref={trackRef}
          className="flex w-max gap-12 py-4 will-change-transform sm:gap-16"
        >
          {items.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              className="flex w-24 shrink-0 flex-col items-center gap-3"
              aria-hidden={i >= techStack.length ? "true" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.logo}
                alt={t.name}
                className="pointer-events-none size-10 object-contain"
                draggable={false}
                loading="lazy"
              />
              <span className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
