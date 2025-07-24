import ThemeToggle from "@/components/ThemeToggle";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <section className="bg-background text-foreground">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <ThemeToggle />
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                        Surya Sivakumar
                    </h2>
                    <p className="mt-4 text-base font-normal text-foreground sm:text-xl">
                        Full-stack developer and machine learning enthusiast
                        with a 4.0 GPA Master’s in Computer Science from Arizona
                        State University. I’ve architected secure, scalable
                        systems across React, Node.js, and Spark ecosystems, and
                        led impactful projects in GIS, computer vision, and NLP.
                        Whether it’s building production-grade systems or
                        pushing the edge in AI, I bring clarity, speed, and
                        precision to every project I touch.
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    );
}
