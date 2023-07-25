import React from "react";
import { MoonIcon, SunIcon } from "../Icons/Icons";
import { motion } from "framer-motion";

const SwitchThemeButton = ({ mode, setMode }) => {
  return (
    <motion.button
      className={`flex items-center justify-center rounded-full p-1 ${
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1, delay: 0.6 },
      }}
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
