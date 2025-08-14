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
      style={{
        position: "absolute",
        // Use top for 'up' direction, bottom otherwise
        ...(direction === "up" ? { top: "20px" } : { bottom: "20px" }),
        width: "100%",
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#0070f3",
      }}
    >
      {scrollTextMapping[direction]}
    </div>
  );
};

export default ScrollIndicator;
