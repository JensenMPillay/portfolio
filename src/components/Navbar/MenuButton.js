import React from "react";
import { motion } from "framer-motion";

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      className="fixed hidden flex-col items-center justify-center lg:flex"
      onClick={toggleMenu}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { type: "spring", duration: 1, delay: 0.6 },
      }}
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
        }`}
      ></span>
    </motion.button>
  );
};

export default MenuButton;
