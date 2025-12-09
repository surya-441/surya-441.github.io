import { projects } from "../projects";
import ScrollIndicator from "./ScrollIndicator";

const Projects = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                padding: "2rem 1rem",
            }}
        >
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
                                    className="inline-flex items-center gap-2 text-foreground"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M12 0C5.371 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.933 0-1.312.469-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404 11.5 11.5 0 013.003.404c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.768.84 1.232 1.91 1.232 3.222 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.103.823 2.222 0 1.605-.015 2.896-.015 3.288 0 .322.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.628-5.373-12-12-12z" />
                                    </svg>
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
