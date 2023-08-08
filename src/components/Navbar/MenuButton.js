import React from "react";
import { motion } from "framer-motion";

const MenuButton = ({ isOpen, toggleMenu }) => {
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
    },
  };
  return (
    <motion.button
      className="group fixed left-[28px] top-[28px] hidden flex-col items-center justify-center lg:flex"
      onClick={toggleMenu}
      variants={button}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out  dark:bg-light ${
          isOpen
            ? "translate-y-1 rotate-45"
            : "-translate-y-0.5 self-start group-hover:w-4"
        }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen
            ? "-translate-y-1 -rotate-45"
            : "translate-y-0.5 self-end group-hover:w-4"
        }`}
      ></span>
    </motion.button>
  );
};

export default MenuButton;
