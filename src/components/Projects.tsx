import { projects } from "../projects";
import ScrollIndicator from "./ScrollIndicator";
import GitHubIcon from "@/icons/GitHubIcon";

const Projects = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-8">
            <ScrollIndicator direction="up"/>
            <div className="mt-8 text-4xl text-center font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                Curated Projects
            </div>
            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-rows-3">
                {projects.map((project) => {
                    return (
                        <div className="space-y-4" key={project.title}>
                            <h3 className="text-3xl font-bold leading-tight text-foreground">
                                {project.title}
                            </h3>
                            <p className="text-xl font-normal text-foreground">
                                {project.description}
                            </p>
                            {project.link && project.link.trim() !== "" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                    className="inline-flex items-center gap-2 text-foreground"
                                >
                                    <GitHubIcon />
                                    <span>GitHub</span>
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
            <ScrollIndicator direction="end"/>
        </section>
    );
};

export default Projects;

