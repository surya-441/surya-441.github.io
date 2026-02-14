import React from "react";

export type ScrollDirection = "up" | "down" | "end";

type ScrollIndicatorProps = {
    direction: ScrollDirection;
};

const scrollTextMapping: Record<ScrollDirection, string> = {
    up: "Scroll Up ▲",
    down: "Scroll Down ▼",
    end: "You've reached the end!",
};

const ScrollIndicator = ({ direction }: ScrollIndicatorProps) => {
  return (
    <div
      className="absolute w-full text-center text-[clamp(1rem,3vh,1.5rem)]"
      style={{
        ...(direction === "up" ? { top: "20px" } : { bottom: "20px" }),
        color: "var(--accent)",
      }}
    >
      {scrollTextMapping[direction]}
    </div>
  );
};

export default ScrollIndicator;

