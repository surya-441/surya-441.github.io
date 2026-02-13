import { education } from "../education";
import ScrollIndicator from "./ScrollIndicator";

const Education = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden">
            <ScrollIndicator direction="up" />
            <div className="mt-[5vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0">
                Education
            </div>
            <div className="mt-[4vh] space-y-[3vh] max-w-3xl w-full flex-1 overflow-y-auto px-4 custom-scrollbar flex flex-col justify-center">
                {education.map((edu) => (
                    <div
                        key={edu.institution}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {edu.degree}
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-1">
                            {edu.institution} • {edu.period}
                        </p>
                        <p className="text-lg font-semibold mt-3 text-blue-600 dark:text-blue-400">
                            GPA: {edu.gpa}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {edu.highlights.map((h) => (
                                <span
                                    key={h}
                                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                >
                                    {h}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Education;
