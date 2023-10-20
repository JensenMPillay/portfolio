import React from "react";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import { motion } from "framer-motion";

const SwitchThemeButton = ({ mode, setMode }) => {
  const button = {
    initial: {
      y: -100,
      scale: 1,
    },
    animate: {
      y: 0,
      transition: { type: "spring", duration: 1, delay: 0.6 },
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        damping: 10,
        duration: 1,
      },
      tap: {
        scale: 0.9,
        transition: {
          type: "spring",
          damping: 10,
          duration: 1,
        },
      },
    },
  };
  return (
    <motion.button
      className={`fixed right-[18px] top-[18px] flex h-auto w-8 items-center justify-center rounded-full p-1  ${
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
      variants={button}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      {mode === "dark" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </motion.button>
  );
};

export default SwitchThemeButton;
