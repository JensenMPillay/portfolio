import { motion } from "framer-motion";
import React from "react";

// Animation
const sentence = {
  animate: {
    transition: {
      // Create a Delay for Apparition
      delay: 1,
      // Create a Delay for the Animation of each Word
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  // Initial State
  initial: {
    opacity: 0,
    y: 50,
  },
  // End State
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-left sm:p-0">
      <motion.h1
        className={`font inline-block w-full font-jost text-7xl font-extralight uppercase text-dark dark:text-light ${className} lg:text-6xl md:text-5xl sm:text-4xl`}
        variants={sentence}
        initial="initial"
        animate="animate"
      >
        {/* Separate Text to Animate each Word  */}
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
