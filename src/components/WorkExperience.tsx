import { experiences } from "../experiences";

const WorkExperience = () => {
    return (
        <div className="grid grid-cols-2 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-rows-2 lg:grid-rows-3">
            {experiences.map((experience) => {
                return (
                    <div className="space-y-4" key={experience.company}>
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            {experience.company}
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-foreground">
                            {experience.title}
                        </h3>
                        <p className="text-lg font-normal text-foreground">
                            {experience.responsibilities}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default WorkExperience;
