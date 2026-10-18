/**
 * All the words on the site live here. Edit this file to change content;
 * the components only handle layout and style.
 *
 * Anything marked TODO is a placeholder for you to fill in (links, dates, images).
 */

export const profile = {
  name: "Caleb Chanda Mwelwa",
  firstName: "Caleb",
  initials: "CCM",
  photo: "/hero-bw.jpg", // hero portrait (public/hero-bw.jpg)
  role: "Backend & Web Developer",
  tagline:
    "Backend and web developer working in Python/Django and Java/Spring Boot. I build complete systems and take them all the way to production.",
  email: "calebmchanda@gmail.com",
  links: {
    github: "https://github.com/caleb412",
    linkedin: "https://www.linkedin.com/in/caleb-chanda-mwelwa/",
    cv: "/cv.pdf",
  },
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
] as const;

export const about = {
  intro:
    "I recently graduated with distinction from Kazan National Technological Research University (KNRTU) in Software Administration and Information Systems, with a 4.87/5 GPA and a Russian government scholarship. I like building practical software end to end: designing the backend and database, connecting the frontend, containerising everything and deploying it to a real server. I am especially interested in where software engineering meets cybersecurity.",
  services: [
    { title: "Backend Development", icon: "/icons/backend.png" },
    { title: "Web Applications", icon: "/icons/frontend.png" },
    { title: "Deployment & DevOps", icon: "/icons/prototyping.png" },
    { title: "Secure Systems", icon: "/icons/ux.png" },
  ],
};

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Freelance Developer",
    org: "Technical Consultant · Legacy League Technologies, Kazan",
    period: "Jul 2026 – Present",
    points: [
      "Assessed and documented the architecture of a Laravel 10 / PHP application, with recommendations for optimisation.",
      "Analysed existing systems to pinpoint improvement opportunities and drive better performance.",
      "Designed bespoke technical solutions around specific client needs.",
      "Resolved clients' technical issues promptly and kept progress transparent with detailed project reports.",
    ],
  },
  {
    title: "Java Backend Development Program",
    org: "Sber",
    period: "Jan 2025 – Jun 2025",
    points: [
      "Built a personal finance tracker REST API with Java, Spring Boot, Maven and PostgreSQL.",
      "Implemented JWT authentication with Spring Security and a global exception handler.",
      "Refactored DTO conversion out of entities into dedicated mapper classes.",
    ],
  },
  {
    title: "Software Administration & Information Systems",
    org: "Kazan National Technological Research University (KNRTU)",
    period: "2021 – 2026",
    points: [
      "Graduated with a distinction degree and a 4.87/5 GPA.",
      "Recipient of the Russian government scholarship; honoured by the institute.",
    ],
  },
];

/** Shown as floating 3D balls in the Technologies section. Logos live in /public/tech. */
export const technologies = [
  { name: "Python", icon: "/tech/python.png" },
  { name: "Django", icon: "/tech/django.png" },
  { name: "Java", icon: "/tech/java.png" },
  { name: "Spring Boot", icon: "/tech/spring-boot.png" },
  { name: "PostgreSQL", icon: "/tech/postgresql.png" },
  { name: "Docker", icon: "/tech/docker.png" },
  { name: "Nginx", icon: "/tech/nginx.png" },
  { name: "Linux", icon: "/tech/linux.png" },
  { name: "Git", icon: "/tech/git.png" },
  { name: "React", icon: "/tech/react.png" },
  { name: "Next.js", icon: "/tech/nextjs.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  { name: "JWT", icon: "/tech/jwt.png" },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image?: string; // TODO: add a screenshot to /public/projects/ and reference it here
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "erva-learn",
    name: "Erva Learn",
    description:
      "A tutor–student marketplace and LMS within the Erva Suite platform: AI-powered teacher recommendations, onboarding surveys, teacher profiles, messaging and booking. Django backend, Next.js frontend, PostgreSQL with pgvector, an AI microservice, Redis and Nginx, deployed with Docker Compose to a DigitalOcean server behind Cloudflare DNS.",
    stack: ["Django", "Next.js", "PostgreSQL", "pgvector", "Docker", "Nginx"],
    image: "/projects/erva.jpg",
    demo: "https://drive.google.com/file/d/12ltsd_tE6pVNPBOOE0vjqaqeH0tu7GHU/view?usp=drive_link",
  },
  {
    id: "finance-tracker",
    name: "Finance Tracker",
    description:
      "A personal finance REST API for tracking income and expenses per user, secured with JWT and Spring Security, with mapper-based DTOs and a global exception handler.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    repo: "https://github.com/caleb412/personal_finance_tracker", // TODO
  },
  {
    id: "elgamal",
    name: "ElGamal Crypto",
    description:
      "A Windows Forms desktop application implementing ElGamal public-key encryption.",
    stack: ["C#", "WinForms", "Cryptography"],
    repo: "#", // TODO
  },
  {
    id: "people-detection",
    name: "People Detection",
    description:
      "A computer vision project that detects people in images and video with YOLO.",
    stack: ["Python", "YOLO", "Computer Vision"],
    repo: "#", // TODO
  },
];

/** "Beyond code" strip near the end of the page: creative work outside the professional side. */
export const beyondCode = {
  eyebrow: "Beyond code",
  title: "Sparking Tones.",
  text: "Outside of software I play guitar and sing. Sparking Tones is the music project where that side of me lives: a Lusaka-based home for honest art, making music since 2022.",
  url: "https://www.sparkingtones.com/",
  cta: "Visit Sparking Tones",
  motto: ["Make.", "Honest.", "Art."], // the project's own headline
};
