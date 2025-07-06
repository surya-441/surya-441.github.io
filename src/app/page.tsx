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
            Curious and driven software engineer building elegant, practical
            solutions at the intersection of code and creativity.
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
              Built functional React components for the Best Life app, improved
              UI performance, and collaborated closely with the team on
              user-focused feature development.
            </p>
            <a
              href="#"
              title=""
              className="text-foreground bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              role="button"
            >
              View case study <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
