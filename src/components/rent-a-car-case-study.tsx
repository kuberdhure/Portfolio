"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LightboxImage } from "@/components/lightbox-image";

type Slide = { src: string; alt: string; label: string; heading: string; description: string };

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      <span className="h-px w-6 bg-border" aria-hidden />
      {label}
    </div>
  );
}

function EditorialSection({ label, heading, children }: { label: string; heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
      <div className="md:col-span-4">
        <SectionLabel label={label} />
        <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{heading}</h2>
      </div>
      <div className="text-pretty text-lg text-muted-foreground md:col-span-8">{children}</div>
    </section>
  );
}

function ProductCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const move = (direction: number) => setActive((index) => (index + direction + slides.length) % slides.length);

  return (
    <section className="mt-24 md:mt-32">
      <SectionLabel label="Product Gallery" />
      <h2 className="mt-6 font-display text-3xl leading-tight md:text-4xl">{slides[active].heading}</h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">{slides[active].description}</p>
      <div
        className="group relative overflow-hidden rounded-2xl border border-border bg-[#fefaf1]"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
          touchStart.current = null;
        }}
      >
        <div className="flex items-start transition-transform duration-500 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide) => (
            <LightboxImage key={slide.src} src={slide.src} alt={slide.alt} className="w-full shrink-0 rounded-none" />
          ))}
        </div>
        {slides.length > 1 && <>
          <button type="button" aria-label="Previous product image" onClick={() => move(-1)} className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-60 backdrop-blur transition hover:border-foreground hover:opacity-100 sm:left-5"><ChevronLeft className="size-4" /></button>
          <button type="button" aria-label="Next product image" onClick={() => move(1)} className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 text-foreground opacity-60 backdrop-blur transition hover:border-foreground hover:opacity-100 sm:right-5"><ChevronRight className="size-4" /></button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-border bg-background/80 px-2 py-2 backdrop-blur">
            {slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Show ${slide.label} image`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${active === index ? "w-5 bg-neon" : "w-1.5 bg-muted-foreground/60 hover:bg-foreground"}`} />)}
          </div>
        </>}
      </div>
    </section>
  );
}

export function RentACarCaseStudy() {
  const imageRoot = "/images/rent-a-car/images";
  const liveDemoUrl = "https://car-rental-demo-orpin.vercel.app/";
  return <>
    <header className="border-b border-border pb-16 md:pb-20">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">02 · 2026 · Concept Project</p>
      <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">Car Rental — Booking &amp; Fleet Management Platform</h1>
      <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">A modern car rental platform designed to manage vehicle discovery, bookings, availability, and rental operations from a single interface.</p>
      <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        <Meta label="Type" value="Concept Project" /><Meta label="Role" value="Design & Development" /><Meta label="Year" value="2026" /><Meta label="Stack" value="Next.js, React, Tailwind CSS" />
      </dl>
      <a href={liveDemoUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center rounded-full bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 hover:bg-neon">
        View live demo →
      </a>
    </header>

    <div className="mt-12 overflow-hidden rounded-2xl border border-border md:mt-16">
      <LightboxImage src={`${imageRoot}/hero.jpeg`} alt="Car rental platform hero" className="rounded-none" />
    </div>

    <EditorialSection label="Concept" heading="The concept"><p>The goal was to explore how a modern car rental experience could bring vehicle discovery, availability, booking, and fleet management into one streamlined platform.</p></EditorialSection>
    <EditorialSection label="Product" heading="The platform"><p>The platform brings the customer booking experience and rental management tools together in a single system, covering vehicle discovery, booking, fleet management, and operational oversight.</p></EditorialSection>
    <ProductCarousel slides={[
      { src: `${imageRoot}/fleet.png`, alt: "Vehicle fleet browsing experience", label: "Fleet", heading: "Explore the fleet", description: "Browse available vehicles, compare rental options, and explore detailed vehicle information before making a reservation." },
      { src: `${imageRoot}/booking.png`, alt: "Car rental booking flow", label: "Booking", heading: "A streamlined booking experience", description: "A focused booking flow that guides customers from vehicle selection to rental details and reservation." },
      { src: `${imageRoot}/dashboard_1.png`, alt: "Rental operations dashboard", label: "Management", heading: "Manage rentals from one place", description: "A centralized dashboard for managing vehicles, monitoring bookings, and keeping track of rental operations." },
      { src: `${imageRoot}/dashboard_2.png`, alt: "Rental management dashboard", label: "Management", heading: "Manage rentals from one place", description: "A centralized dashboard for managing vehicles, monitoring bookings, and keeping track of rental operations." },
    ]} />
    <section className="mt-24 md:mt-32"><SectionLabel label="Features" /><h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Key Features</h2><div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{["Fleet Management", "Vehicle Details", "Vehicle Availability", "Online Booking", "Booking Management", "Admin Dashboard"].map((feature) => <div key={feature} className="border-b border-r border-border px-5 py-6 font-display text-xl italic text-foreground">{feature}</div>)}</div></section>
    <section className="mt-24 md:mt-32"><SectionLabel label="Built with" /><div className="mt-8 flex flex-wrap gap-2">{["Next.js", "React", "Tailwind CSS"].map((tech) => <span key={tech} className="inline-flex items-center rounded-full border border-neon/50 bg-neon/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-neon shadow-[0_0_14px_-4px_hsl(var(--neon)/0.45)]">{tech}</span>)}</div></section>
    <section className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
      <SectionLabel label="Live demo" />
      <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Explore the platform</h2>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">Try the customer booking experience or explore the management dashboard.</p>
      <a href={liveDemoUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center rounded-full bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 hover:bg-neon">
        View live demo →
      </a>
    </section>
  </>;
}

function Meta({ label, value }: { label: string; value: string }) { return <div><dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</dt><dd className="mt-2 text-pretty text-sm text-foreground">{value}</dd></div>; }
