import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
    return (
        <div className="bg-background text-foreground">
            <ThemeToggle />
            <Intro />
            <WorkExperience />
            <Projects />
        </div>
    );
}
