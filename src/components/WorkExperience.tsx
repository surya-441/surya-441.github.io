"use client";

import { useState } from "react";
import { experiences } from "../experiences";
import ScrollIndicator from "./ScrollIndicator";
import TechPill from "@/components/TechPill";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const WorkExperience = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have N experiences, so lets wrap around
    const experienceIndex = Math.abs(page % experiences.length);
    const exp = experiences[experienceIndex];

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden bg-background">
            <ScrollIndicator direction="up" />

            <div className="mt-2 mb-[2vh] text-[clamp(2rem,5vh,3rem)] text-center font-extrabold leading-tight tracking-tight text-foreground shrink-0 z-10">
                Work Experience
            </div>

            <div className="relative w-full max-w-5xl h-[60vh] flex items-center justify-center">
                {/* Navigation Buttons (Desktop) */}
                <button
                    className="absolute left-2 z-20 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg text-foreground hover:bg-white dark:hover:bg-gray-700 transition-colors hidden sm:flex items-center justify-center"
                    onClick={() => paginate(-1)}
                    aria-label="Previous experience"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    className="absolute right-2 z-20 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg text-foreground hover:bg-white dark:hover:bg-gray-700 transition-colors hidden sm:flex items-center justify-center"
                    onClick={() => paginate(1)}
                    aria-label="Next experience"
                >
                    <ChevronRight size={28} />
                </button>

                {/* Carousel */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full flex items-center justify-center px-4 sm:px-12 py-8"
                        >
                            <div className="w-full max-w-3xl bg-white dark:bg-gray-900/80 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col max-h-full">
                                {/* Header */}
                                <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 shrink-0">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                                {exp.role}
                                            </h3>
                                            <a
                                                href={exp.companyUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium hover:underline block mt-1"
                                                onClick={(e) => !exp.companyUrl && e.preventDefault()}
                                            >
                                                {exp.company}
                                            </a>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Tech Stack - horizontally scrollable if needed */}
                                    <div className="mt-4 flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar p-1">
                                        {exp.techStack.map((tech) => (
                                            <TechPill key={tech} tech={tech} />
                                        ))}
                                    </div>
                                </div>

                                {/* Body - Scrollable */}
                                <div className="p-6 pt-2 sm:p-8 sm:pt-2  overflow-y-auto custom-scrollbar flex-1">
                                    <ul className="space-y-3 list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-6 z-10 shrink-0">
                {experiences.map((_, idx) => (
                    <button
                        key={idx}
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            const direction = idx > experienceIndex ? 1 : -1;
                            setPage([page + (idx - experienceIndex), direction]);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            idx === experienceIndex
                                ? "bg-blue-500 w-6"
                                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                        }`}
                        aria-label={`Go to experience ${idx + 1}`}
                    />
                ))}
            </div>

            <ScrollIndicator direction="down" />
        </section>
    );
};

export default WorkExperience;
