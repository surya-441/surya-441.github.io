import ThemeToggle from "@/components/ThemeToggle";
import RightArrow from "@/icons/RightArrow";

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

                <div className="grid grid-rows-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-rows-2 lg:grid-rows-3">
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Best Life
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-foreground">
                            Jr. Software Engineer
                        </h3>
                        <p className="text-lg font-normal text-foreground">
                            Built functional React components for the Best Life
                            app, improved UI performance, and collaborated
                            closely with the team on user-focused feature
                            development.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Self Justice
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-foreground">
                            Backend Developer
                        </h3>
                        <p className="text-lg font-normal text-foreground">
                            Developed secure and scalable backend systems for
                            Self Justice, an AI-driven legal assistance
                            platform. Prevented user impersonation via XSS
                            mitigation, built a Python web scraper with
                            BeautifulSoup for legal data aggregation, and
                            engineered RESTful APIs with Node.js, Elysia.js, and
                            MongoDB for managing user reviews on courthouses,
                            judges, and lawyers.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Big Data Analytics Lab
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-foreground">
                            Research Contributor
                        </h3>
                        <p className="text-lg font-normal text-foreground">
                            Contributed to Big Data Analytics research by
                            developing AI models for disaster damage
                            classification and seizure prediction. Fine-tuned a
                            U-Net model with EfficientNetV2 backbone to classify
                            post-disaster building damage from satellite images,
                            boosting F1 score by 50%. Built time series models
                            using InceptionTime and Echo State Networks,
                            achieving 94% accuracy in epileptic seizure
                            prediction. Findings published at the 6th
                            International Conference on Advance Computing and
                            Intelligent Engineering.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            BNY Mellon
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-foreground">
                            Backend Developer Intern
                        </h3>
                        <p className="text-lg font-normal text-foreground">
                            At BNY Mellon, developed backend solutions to
                            optimize data extraction and processing. Replaced an
                            inefficient RPA process with a Java Spring Boot
                            application to extract daily tax rates, improving
                            efficiency by 50%. Built a customizable retry
                            mechanism for CRON jobs, enhancing reliability by
                            35%. Automated API data retrieval for tax rates,
                            streamlining form generation workflows and reducing
                            manual effort.
                        </p>
                    </div>{" "}
                </div>
            </div>
        </section>
    );
}
