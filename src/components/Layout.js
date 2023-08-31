import { motion } from "framer-motion";
import React from "react";

const Layout = ({ children, className, direction }) => {
  let initialProps = {};
  let animateProps = {};
  let exitProps = {};

  switch (direction) {
    case "center":
      initialProps = { opacity: 1 };
      animateProps = {
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      };
      exitProps = { opacity: 0 };
      break;
    case "top":
      initialProps = { y: "-150%" };
      animateProps = {
        y: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { y: ["0%", "-150%"] };
      break;
    case "left":
      initialProps = { x: "-100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { x: ["0%", "-100%"] };
      break;
    case "right":
      initialProps = { x: "100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { x: ["0%", "100%"] };
      break;
    default:
      break;
  }

  return (
    <motion.div
      className={`z-0 inline-block h-full w-full bg-transparent p-32 pt-0 transition-colors duration-300 ease-in-out dark:bg-transparent xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0 ${className}`}
      initial={initialProps}
      animate={animateProps}
      exit={exitProps}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
