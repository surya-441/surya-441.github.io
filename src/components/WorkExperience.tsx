import { experiences } from "../experiences";
import ScrollIndicator from "./ScrollIndicator";

const WorkExperience = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                maxHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            <ScrollIndicator direction="up" />
            <div className="mt-8 text-4xl text-center font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                Work Experience
            </div>
            <div className="relative ml-6">
                {/* vertical line */}
                <div className="absolute top-0 left-2 h-full w-0.5 bg-gray-300" />

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative pl-10">
                            {/* dot aligned to role */}
                            <div className="absolute left-0 top-[0.6em] w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
                            {/* content */}
                            <div>
                                <h3 className="text-3xl font-bold">
                                    {exp.role}
                                </h3>
                                <p className="text-xl text-gray-600">
                                    {exp.company} • {exp.period}
                                </p>
                                <p className="text-lg text-gray-700 mt-3">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default WorkExperience;
