// All copy lives here so the rest of the app stays template-shaped.
// Replace these placeholders as you fill in real data.

export const site = {
  name: "Kuber Dhure",
  role: "Freelance React Native Developer",
  description:
    "Kuber Dhure — freelance React Native developer designing and building cross-platform mobile solutions for founders and teams.",
  location: "Mumbai, India · Remote worldwide",
  availability: "Available for new work",
  email: "kuberdhureofficial@gmail.com",
  calendly: "https://calendly.com/kuberdhure-yt",
  social: [
    { label: "GitHub", href: "https://github.com/kuberdhure" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kuberdhure" },
    { label: "Email", href: "mailto:kuberdhureofficial@gmail.com" },
  ],
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Freelance React Native developer — open for projects",
  heading: "I build solutions, not just apps.",
  sub: "I work with founders and teams to turn real business problems into shipped, cross-platform mobile products — designed end-to-end with React Native, not glued together from templates.",
};

export type CaseStudy = {
  cover?: string;
  lead: string;
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  features?: { src: string; caption?: string };
  gallery?: { src: string; caption?: string }[];
  links?: { label: string; href: string }[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  href?: string;
  highlights?: string[];
  tagline?: string;
  client?: string;
  slug?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "trackops",
    title: "TrackOps — Real-Time Trip Tracking App",
    summary:
      "TrackOps captures live GPS trip data on every driver's device, recording routes, stops, and durations whether the network is up or not. Managers get a unified view of fleet activity — no more chasing logs over chat or paper.",
    year: "2025",
    role: "Mobile Product Build",
    client: "viewmyrecords",
    stack: ["React Native (Expo)", "SQLite", "REST APIs", "Maps"],
    highlights: [
      "Developed a web + mobile (Android & iOS) solution",
      "Implemented real-time GPS tracking with route mapping",
      "Integrated facial recognition for verification & attendance",
      "Built route creation, assignment, and trip monitoring features",
      "Enabled automated reports and activity tracking via backend",
    ],
    caseStudy: {
      cover: "/images/trackops/hero.jpg",
      lead: "A cross-platform field-ops system that combines GPS trip tracking with facial recognition and attendance management — giving managers verified, real-time visibility into where field users are and what they're doing.",
      overview:
        "We built a cross-platform system that combines GPS tracking with facial recognition to ensure real-time monitoring and verified user activity. It also streamlines attendance, leave management, and reporting in a single platform.",
      problem:
        "The client lacked a reliable way to verify whether field users actually visited assigned locations. Manual tracking was inconsistent, and attendance/leave management was fragmented, leading to low transparency and inefficiencies.",
      approach:
        "Delivered as an end-to-end build spanning web and mobile from a shared backend, structured around five tracks:",
      outcome:
        "The client moved from fragmented manual tracking to a single platform where every trip, attendance event, and leave request is logged, verified, and auditable in real time. Managers gained visibility they previously couldn't get — without chasing updates over chat or email. Pairing GPS data with facial recognition turned user verification into a default behavior of the system rather than something supervisors had to enforce, removing entire categories of dispute from day-to-day operations. Routine reporting now runs straight out of the dashboard instead of being compiled by hand.",
      features: {
        src: "/images/trackops/features.jpg",
        caption: "Feature overview",
      },
    },
  },
  {
    id: "02",
    title: "UrbanscapeGAN",
    summary:
      "AI system that generates realistic, ecologically sustainable landscape designs for urban environments — built on a GAN architecture trained on geospatial data.",
    year: "2025",
    role: "ML Research & Engineering",
    stack: ["Python", "GAN", "SRTM", "ML"],
    href: "#",
  },
  {
    id: "03",
    title: "Student Content Portal",
    summary:
      "Full-stack platform giving students access to courses, notes, and past papers, with auth, database, and content delivery powered by Appwrite.",
    year: "2024",
    role: "Full-stack build",
    stack: ["React", "Appwrite", "Tailwind"],
    href: "#",
  },
];

export type Tech = { name: string; logo: string };

export const techStack: Tech[] = [
  { name: "React Native", logo: "/images/tech/react.svg" },
  { name: "React", logo: "/images/tech/react.svg" },
  { name: "JavaScript", logo: "/images/tech/javascript.svg" },
  { name: "HTML5", logo: "/images/tech/html5.svg" },
  { name: "CSS3", logo: "/images/tech/css.svg" },
  { name: "Tailwind", logo: "/images/tech/tailwindcss.svg" },
  { name: "Node.js", logo: "/images/tech/nodedotjs.svg" },
  { name: "Express", logo: "/images/tech/express.svg" },
  { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
  { name: "Appwrite", logo: "/images/tech/appwrite.svg" },
  { name: "Android", logo: "/images/tech/android.svg" },
  { name: "AWS", logo: "/images/tech/aws.svg" },
  { name: "Python", logo: "/images/tech/python.svg" },
  { name: "Redux", logo: "/images/tech/redux.svg" },
  { name: "Figma", logo: "/images/tech/figma.svg" },
  { name: "Git", logo: "/images/tech/git.svg" },
];

export type Service = {
  title: string;
  description: string;
  starting?: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "Mobile App MVP",
    description:
      "From problem to shipped React Native app. Cross-platform, polished, and built around the actual outcome you're after — not a feature checklist.",
    starting: "Pricing on request",
    bullets: [
      "iOS + Android from one codebase",
      "Auth, backend & integrations",
      "Delivered in 3–6 weeks",
    ],
  },
  {
    title: "Website & Web App",
    description:
      "Marketing sites, landing pages, or full product builds — engineered with React and Next.js to be fast, accessible, and built to convert.",
    starting: "Pricing on request",
    bullets: [
      "From landing page to full product",
      "React + Next.js stack",
      "SEO, performance, and analytics dialled in",
    ],
  },
  {
    title: "Custom Mobile Solution",
    description:
      "Got a workflow, internal tool, or business process that needs to live on mobile? I'll scope and build a tailored React Native solution that fits how you actually work.",
    starting: "Pricing on request",
    bullets: [
      "Problem discovery + scoping",
      "Custom UX for real users",
      "Native features & offline support",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: replace with real client quotes
export const testimonials: Testimonial[] = [
  {
    quote:
      "Shipped faster than our in-house team and the quality was noticeably better. Would hire again in a heartbeat.",
    name: "Client Name",
    role: "Founder, Company",
  },
  {
    quote:
      "Took a vague brief and turned it into a polished product. Communication was effortless throughout.",
    name: "Client Name",
    role: "PM, Company",
  },
];

export const about = {
  heading: "About",
  body: [
    "I'm Kuber — a freelance mobile product developer based in Mumbai, with a B.Tech in Computer Engineering. My focus is React Native: cross-platform apps that ship to both iOS and Android from a single codebase.",
    "I don't think of my job as 'building apps.' I think of it as solving a problem — understanding what you actually need, scoping a thoughtful approach, and delivering software that fits your business, not the other way around.",
    "Backed by full-stack experience with Node, Appwrite, and MongoDB, I can take a project from a fuzzy idea all the way to a polished, production-ready product. Always up for new and interesting problems.",
  ],
};

export const contact = {
  heading: "Let's work together.",
  sub: "Have a project in mind, or just want to say hi? I usually reply within a day.",
};
