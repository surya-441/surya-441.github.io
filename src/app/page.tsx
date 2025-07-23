import ThemeToggle from "@/components/ThemeToggle";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
    return (
        <section className="bg-background text-foreground">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <ThemeToggle />
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                        Surya Sivakumar
                    </h2>
                    <p className="mt-4 text-base font-normal text-foreground sm:text-xl">
                        Curious and driven software engineer building elegant,
                        practical solutions at the intersection of code and
                        creativity.
                    </p>
                </div>
                <WorkExperience />
            </div>
        </section>
    );
}
