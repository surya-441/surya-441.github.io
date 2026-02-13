"use client";

import React from "react";
import Stickman from "./Stickman";
import ScrollIndicator from "./ScrollIndicator";

const Intro = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-8">
            <h2 className="text-center font-extrabold leading-tight tracking-tight text-6xl md:text-7xl">
                Surya Sivakumar
            </h2>
            <p className="mt-4 text-xl text-center text-foreground max-w-3xl">
                Full-stack developer and machine learning enthusiast with a 4.0
                GPA Master&apos;s in Computer Science from ASU. I bring clarity,
                speed, and precision to every project I touch.
            </p>
            <Stickman />
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Intro;
