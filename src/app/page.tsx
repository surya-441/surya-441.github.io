import ScrollManager from "@/components/ScrollManager";
import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <div className="bg-background text-foreground h-screen overflow-hidden">
            <ThemeToggle />
            <ScrollManager sectionCount={5}>
                <Intro />
                <WorkExperience />
                <Education />
                <Projects />
                <Skills />
            </ScrollManager>
        </div>
    );
}
