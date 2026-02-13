export interface Project {
  title: string;
  techStack: string[];
  description: string;
  bullets: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Lobby Chat App",
    techStack: ["React Native", "Expo", "WebSockets"],
    description:
      "A cross-compatible chat app that lets users create private and public rooms with unique IDs for inviting friends.",
    bullets: [
      "Built real-time messaging with private/public room creation and unique room IDs for inviting friends.",
      "Integrated AI bots that can be added to chat rooms by admins.",
    ],
    link: "https://github.com/surya-441/lobby-chat-client",
  },
  {
    title: "Geotrack",
    techStack: [
      "React",
      "deck.gl",
      "Scala",
      "Apache Sedona",
      "ArcGIS",
      "Spark SQL",
      "Finagle",
    ],
    description:
      "A full-stack GIS application to analyze and visualize vehicle trajectory data from the Tempe Taxi dataset.",
    bullets: [
      "Implemented spatial, spatiotemporal, and KNN queries at scale, delivering insights 10x faster than traditional methods.",
      "Used deck.gl for dynamic visualization and Finagle for efficient server communication.",
    ],
  },
  {
    title: "DailyNews",
    techStack: [
      "Node.js",
      "Express",
      "Graph API",
      "AWS EC2",
      "AWS RDS",
      "PostgreSQL",
      "ngrok",
    ],
    description:
      "A news chatbot that delivers curated, summarized news reports to subscribed users via WhatsApp.",
    bullets: [
      "Engineered automated news delivery leveraging Meta's Graph API for WhatsApp integration.",
      "Implemented a webhook to manage user interactions, enabling seamless two-way communication.",
    ],
    link: "https://github.com/surya-441/dailyNews",
  },
  {
    title: "Badminton Analytics",
    techStack: ["Python", "OpenPose", "Computer Vision", "Flask"],
    description:
      "A web app utilizing the OpenPose computer vision model to track and analyze player movements in badminton matches.",
    bullets: [
      "Addressed challenges like blurring and occlusion in real-time player tracking.",
      "Generated statistics including average speed, distance traveled, prime spots, and possession for game strategy insights.",
    ],
  },
];
