export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Arizona State University",
    period: "Aug 2022 – May 2024",
    gpa: "4.0 / 4.0",
    highlights: [
      "Data Mining",
      "Statistical Machine Learning",
      "Network Security",
      "Software Security",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "MIT, Anna University",
    period: "Aug 2018 – Jun 2022",
    gpa: "3.52 / 4.0",
    highlights: [
      "Application Development Practices",
      "Cloud Computing",
      "Object Oriented Analysis & Design",
    ],
  },
];
