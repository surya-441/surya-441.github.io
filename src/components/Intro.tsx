"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Stickman from "./Stickman";
import ScrollIndicator from "./ScrollIndicator";
import GitHubIcon from "@/icons/GitHubIcon";
import { FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 py-8 snap-start overflow-hidden">
            <motion.h2 
                className="text-center font-extrabold leading-tight tracking-tight text-[clamp(1rem,8vw,5rem)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Surya Sivakumar
            </motion.h2>
            <motion.p 
                className="mt-[2vh] text-[clamp(1rem,2vw,1.25rem)] text-center text-gray-600 dark:text-gray-400 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Full-stack software engineer with experience in building
                scalable web and mobile apps using React, Node.js, and AWS.
                Proven track record of improving performance, usability, and
                reliability across systems impacting 50k+ users.
            </motion.p>
            {/* contact links */}
            <motion.div 
                className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-[3vh] text-base sm:text-lg"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.a
                    variants={itemVariants}
                    href="mailto:surya040401@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    ✉ surya040401@gmail.com
                </motion.a>
                <motion.a
                    variants={itemVariants}
                    href="https://linkedin.com/in/suryassivakumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <FaLinkedinIn />
                    LinkedIn
                </motion.a>
                <motion.a
                    variants={itemVariants}
                    href="https://github.com/surya-441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                </motion.a>
                <motion.span 
                    variants={itemVariants}
                    className="text-gray-500 dark:text-gray-500"
                >
                    📍 Dallas, TX
                </motion.span>
            </motion.div>
            <Stickman />
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Intro;
