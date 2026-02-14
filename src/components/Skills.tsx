import { skills } from "../skills";
import ScrollIndicator from "./ScrollIndicator";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiMysql, // SQL
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiFigma,
    SiNodedotjs, // Node.js
    SiExpress,
    SiSpringboot,
    SiPostgresql,
    SiPrisma,
    SiAmazon, // AWS
    SiDocker,
    SiGit,
    SiLinux,
    SiSanity,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCloud, FaAccessibleIcon } from "react-icons/fa"; 
import { VscCode } from "react-icons/vsc"; 

// Map skills to icons
const iconMap: Record<string, React.ReactNode> = {
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Python: <SiPython />,
    Java: <FaJava />,
    SQL: <SiMysql />,
    React: <SiReact />,
    "React Native": <SiReact />,
    "Next.js": <SiNextdotjs />,
    Redux: <SiRedux />,
    Tailwind: <SiTailwindcss />,
    HTML5: <SiHtml5 />,
    CSS3: <SiCss3 />,
    Figma: <SiFigma />,
    "WCAG 2.0": <FaAccessibleIcon />,
    "Node.js": <SiNodedotjs />,
    Express: <SiExpress />,
    "Spring Boot": <SiSpringboot />,
    PostgreSQL: <SiPostgresql />,
    NeonDB: <FaDatabase />, // No specific icon yet
    PrismaORM: <SiPrisma />,
    "RESTful APIs": <FaCloud />, // Generic
    "MVC Pattern": <VscCode />, // Generic
    "AWS (EC2, S3, RDS)": <SiAmazon />,
    Docker: <SiDocker />,
    Git: <SiGit />,
    "CI/CD": <FaCloud />,
    "Sanity Studio": <SiSanity />,
    "Unit Testing": <VscCode />,
    Agile: <VscCode />,
    Linux: <SiLinux />,
};

const Skills = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden bg-background">
            <ScrollIndicator direction="up" />

            <div className="mb-[2vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0 z-10">
                Technical Skills
            </div>
 
            <div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 gap-[clamp(0.75rem,3vh,2.5rem)] max-w-5xl w-full px-4 overflow-hidden">
                {skills.map((category) => (
                    <div
                        key={category.category}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 p-[clamp(0.4rem,1.2vh,1rem)] shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-[clamp(1.56rem,1.31rem,2.11rem)] font-bold text-foreground mb-[clamp(0.4rem,1.2vh,1rem)] border-b border-gray-100 dark:border-gray-800 pb-0.5">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-[clamp(0.25rem,1.2vh,0.75rem)]">
                            {category.items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-[clamp(0.15rem,0.5vh,0.3rem)] px-1.5 py-0.5 text-[clamp(0.55rem,1.4vh,0.8rem)] font-medium rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                                >
                                    <span className="text-[clamp(0.7rem,1rem,1.8rem)] text-blue-500 dark:text-blue-400">
                                        {iconMap[item] || <VscCode />}
                                    </span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ScrollIndicator direction="end" />
        </section>
    );
};

export default Skills;
