"use client";

import { useState } from "react";
import { projects } from "../projects";
import ScrollIndicator from "./ScrollIndicator";
import GitHubIcon from "@/icons/GitHubIcon";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import TechPill from "@/components/TechPill";

const Projects = () => {
    // Track expanded item by index. Only one item can be expanded at a time.
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden">
            <ScrollIndicator direction="up" />
            <div className="mt-[5vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0">
                Curated Projects
            </div>
            <div className="mt-[4vh] grid grid-cols-1 sm:grid-cols-2 gap-[2vh] max-w-5xl w-full flex-1 overflow-y-auto px-4 pb-[5vh] custom-scrollbar place-content-center">
                {projects.map((project, idx) => {
                    const isExpanded = expandedIndex === idx;
                    return (
                        <div
                            key={project.title}
                            className={`rounded-2xl border transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${
                                isExpanded
                                    ? "border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20 shadow-md col-span-1 sm:col-span-2 lg:col-span-1" // Keeping grid layout consistent
                                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 bg-transparent"
                            }`}
                            onClick={() => toggleExpand(idx)}
                        >
                            <div className="p-3 sm:p-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-foreground">
                                        {project.title}
                                    </h3>
                                    <div className="text-gray-400 dark:text-gray-500">
                                        {isExpanded ? (
                                            <IoChevronUp size={18} />
                                        ) : (
                                            <IoChevronDown size={18} />
                                        )}
                                    </div>
                                </div>
                                
                                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech stack preview (always visible) */}
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {(isExpanded ? project.techStack : project.techStack.slice(0, 3)).map((tech) => (
                                        <TechPill key={tech} tech={tech} />
                                    ))}
                                    {!isExpanded && project.techStack.length > 3 && (
                                        <span className="px-2 py-1 text-xs text-gray-400 flex items-center">
                                            +{project.techStack.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isExpanded
                                            ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <ul className="space-y-2 list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 mb-4">
                                            {project.bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>

                                        {project.link && project.link.trim() !== "" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`View ${project.title} on GitHub`}
                                                className="inline-flex items-center gap-2 text-foreground hover:text-blue-500 transition-colors font-medium"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <GitHubIcon />
                                                <span>View on GitHub</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Projects;
