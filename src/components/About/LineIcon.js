import { motion, useScroll } from "framer-motion";
import React from "react";

const LineIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    // Target
    target: reference,
    // Settings Offset
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light md:-left-3">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-primary stroke-1 dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-primaryDark stroke-[5px] dark:fill-dark md:stroke-[4px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse  fill-dark stroke-1 dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LineIcon;
