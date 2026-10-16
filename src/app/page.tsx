import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { PortfolioAnimations } from "@/components/portfolio-animations";

export default function Home() {
  return (
    <main data-portfolio-motion>
      <Hero />
      <Work />
      <Skills />
      <Services />
      <About />
      <Contact />
      <PortfolioAnimations />
    </main>
  );
}
