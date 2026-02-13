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
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden">
            <ScrollIndicator direction="up" />
            <div className="mt-[5vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0">
                Technical Skills
            </div>
            <div className="mt-[4vh] grid grid-cols-1 sm:grid-cols-2 gap-[3vh] max-w-4xl w-full flex-1 overflow-y-auto px-4 pb-[5vh] custom-scrollbar">
                {skills.map((category) => (
                    <div
                        key={category.category}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                                >
                                    <span className="text-lg text-blue-500 dark:text-blue-400">
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
