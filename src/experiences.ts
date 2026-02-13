export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  techStack: string[];
  bullets: string[];
  summary: string;
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Nova Astro",
    companyUrl: "https://novaastro.io",
    period: "Aug 2025 – Jan 2026",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Figma",
      "WCAG 2.0",
      "NeonDB",
      "PrismaORM",
      "Vercel",
      "AWS",
    ],
    summary: "Built gamified learning features and subscription systems for an ed-tech platform.",
    bullets: [
      "Built puzzle games based on Figma wireframes designed to keep kids engaged on the platform.",
      "Setup the database schema and SQL queries for the assignment system, seamlessly connecting assignments with lessons.",
      "Built a Stripe-powered subscription system with integrated DB tracking, supporting multiple price tiers and bundles.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Best Life",
    companyUrl: "https://getbestlife.app",
    period: "Feb 2025 – Jun 2025",
    techStack: [
      "React Native",
      "FastAPI",
      "TypeScript",
      "Jest",
      "Sanity Studio",
      "Redux",
      "WCAG 2.0",
      "AWS",
    ],
    summary: "Optimized mobile app navigation and address entry for 50k+ users.",
    bullets: [
      "Consolidated multiple graph views into a single tabbed interface, streamlining navigation for 50k+ users with color-coded warnings that boosted issue detection speed.",
      "Implemented GPS detection and Google Places autofill within address entry, decreasing average input time by 30%.",
      "Built a CMS system that tailors content based on whether the user is on iOS or Android.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Self Justice",
    companyUrl: "https://selfjustice.ca",
    period: "Jul 2024 – Feb 2025",
    techStack: ["Express", "Node.js", "MongoDB", "WordPress", "Python", "GCP"],
    summary: "Secured platform against XSS, built RAG AI backend, and scalable REST APIs.",
    bullets: [
      "Mitigated a cross-site scripting vulnerability threatening 2k+ user accounts, reinforcing platform security.",
      "Built a Python web scraper with BeautifulSoup to extract data from 150+ pages into a JSON database, enabling a RAG AI chatbot backend.",
      "Developed a secure and scalable RESTful API backend to handle user reviews for courthouses, judges, and lawyers.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "BNY Mellon",
    companyUrl: "https://bny.com",
    period: "Jun 2021 – Aug 2021",
    techStack: ["Java", "Spring Boot", "Maven", "MySQL", "Agile"],
    summary: "Automated RPA workflows and cron jobs, reducing failure rates and retrieval time.",
    bullets: [
      "Replaced an inefficient RPA workflow with a custom bot, cutting retrieval time by 80%.",
      "Engineered a customizable retry mechanism for cron jobs, reducing transient job failures by 30%.",
      "Automated tax rate retrieval from an external API and integrated data into form generation workflows.",
    ],
  },
];
