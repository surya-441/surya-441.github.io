import { education } from "../education";
import ScrollIndicator from "./ScrollIndicator";

const Education = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden bg-background">
            <ScrollIndicator direction="up" />

            <div className="mb-[2vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0 z-10">
                Education
            </div>
            <div className="mt-[4vh] space-y-[clamp(1rem,2vh,3vh)] max-w-3xl w-full flex flex-col justify-center">
                {education.map((edu) => (
                    <div
                        key={edu.institution}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 p-[clamp(0.75rem,3vh,2rem)]"
                    >
                        <h3 className="text-[clamp(1rem,4vh,1.75rem)] font-bold text-foreground">
                            {edu.degree}
                        </h3>
                        <p className="text-[clamp(0.85rem,2.5vh,1.25rem)] text-gray-600 dark:text-gray-400 mt-1">
                            {edu.institution} • {edu.period}
                        </p>
                        <p className="text-[clamp(0.85rem,2.5vh,1.1rem)] font-semibold mt-2 text-blue-600 dark:text-blue-400">
                            GPA: {edu.gpa}
                        </p>
                        <div className="flex flex-wrap gap-[clamp(0.4rem,1.5vh,1rem)] mt-3">
                            {edu.highlights.map((h) => (
                                <span
                                    key={h}
                                    className="px-2.5 py-0.5 text-[clamp(0.7rem,1.8vh,0.875rem)] rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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
