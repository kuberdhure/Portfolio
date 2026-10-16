"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PortfolioAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.querySelector<HTMLElement>("[data-portfolio-motion]");
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-gsap-hero]", root);

      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            delay: 0.1,
            ease: "power3.out",
          }
        );
      }

      const sections = gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]", root);
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      const workLists = gsap.utils.toArray<HTMLElement>("[data-gsap-work-list]", root);
      workLists.forEach((list) => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-work-card]", list);
        if (cards.length === 0) return;

        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: list,
              start: "top 82%",
              once: true,
            },
          }
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  return null;
}