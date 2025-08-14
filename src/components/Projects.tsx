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
            }}
        >
            <ScrollIndicator direction="up"/>
            <div className="mt-8 text-3xl text-center font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Curated Projects
            </div>
            <div className="grid grid-cols-2 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-rows-2 lg:grid-rows-3">
                {projects.map((project) => {
                    return (
                        <div className="space-y-4" key={project.title}>
                            <h3 className="text-2xl font-bold leading-tight text-foreground">
                                {project.title}
                            </h3>
                            <p className="text-lg font-normal text-foreground">
                                {project.description}
                            </p>
                        </div>
                    );
                })}
            </div>
            <ScrollIndicator direction="end"/>
        </section>
    );
};

export default Projects;
