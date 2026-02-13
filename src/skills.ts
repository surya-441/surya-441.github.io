export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Tailwind",
      "HTML5",
      "CSS3",
      "Figma",
      "WCAG 2.0",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Spring Boot",
      "PostgreSQL",
      "NeonDB",
      "PrismaORM",
      "RESTful APIs",
      "MVC Pattern",
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      "AWS (EC2, S3, RDS)",
      "Docker",
      "Git",
      "CI/CD",
      "Sanity Studio",
      "Unit Testing",
      "Agile",
      "Linux",
    ],
  },
];
