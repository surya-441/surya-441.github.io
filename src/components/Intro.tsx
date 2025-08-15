"use client";

import React from "react";
import Stickman from "./Stickman";
import ScrollIndicator from "./ScrollIndicator";

const Intro = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                maxHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            <h2 className="text-center font-extrabold leading-tight tracking-tight sm:text-4xl">
                Surya Sivakumar
            </h2>
            <p className="mt-4 text-base font-normal text-foreground sm:text-2xl">
                Full-stack developer and machine learning enthusiast with a 4.0
                GPA Master’s in Computer Science from ASU. I bring clarity,
                speed, and precision to every project I touch.
            </p>
            <Stickman />
            <ScrollIndicator direction="down" />
        </section>
    );
};

export default Intro;
