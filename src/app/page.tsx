import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";
import StickmanWave from "@/components/Stickman";

export default function Home() {
    return (
        <section className="bg-background text-foreground">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="max-w-2xl mx-auto ">
                    <ThemeToggle />
                    <h2 className="text-3xl text-center font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                        Surya Sivakumar
                    </h2>
                    <p className="mt-4 text-base font-normal text-foreground sm:text-xl">
                        <center>
                            Full-stack developer and machine learning enthusiast
                            with a 4.0 GPA Master’s in Computer Science from
                            ASU. I bring clarity, speed, and
                            precision to every project I touch.
                        </center>
                        <br />
                        <strong>me: </strong>I like solving problems.
                        <br />
                        <strong>world: </strong>Are you good at it?
                        <br />
                        <strong>me: </strong>Lol no.
                        <br />
                        <strong>me: </strong>But boy do I like trying.
                        <br />
                        <strong>world: </strong>... <br />
                    </p>
                </div>
                <StickmanWave />
                <Projects />
            </div>
        </section>
    );
}
