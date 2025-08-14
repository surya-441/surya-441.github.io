import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";

export default function Home() {
    return (
        <div className="bg-background text-foreground">
            <ThemeToggle />
            <Intro />
            <Projects />
        </div>
    );
}
