"use client";

import React from "react";
import Stickman from "./Stickman";
import ScrollIndicator from "./ScrollIndicator";
import GitHubIcon from "@/icons/GitHubIcon";

const Intro = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden">
            <h2 className="text-center font-extrabold leading-tight tracking-tight text-[clamp(3rem,8vw,5rem)]">
                Surya Sivakumar
            </h2>
            <p className="mt-[2vh] text-[clamp(1rem,2vw,1.25rem)] text-center text-gray-600 dark:text-gray-400 max-w-3xl">
                Full-stack software engineer with experience in building
                scalable web and mobile apps using React, Node.js, and AWS.
                Proven track record of improving performance, usability, and
                reliability across systems impacting 50k+ users.
            </p>
            {/* contact links */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-[3vh] text-base sm:text-lg">
                <a
                    href="mailto:surya040401@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    ✉ surya040401@gmail.com
                </a>
                <a
                    href="https://linkedin.com/in/suryassivakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    🔗 LinkedIn
                </a>
                <a
                    href="https://github.com/surya-441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                </a>
                <span className="text-gray-500 dark:text-gray-500">
                    📍 Dallas, TX
                </span>
            </div>
            <Stickman />
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Intro;
