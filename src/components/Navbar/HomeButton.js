import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon } from "../Icons/Icons";

const MotionLink = motion(Link);

const HomeButton = () => {
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
    <MotionLink
      className="fixed left-[18px] top-[18px] flex flex-col items-center justify-center text-dark dark:text-light lg:hidden"
      variants={button}
      initial="initial"
      animate="animate"
      whileHover="hover"
      href="/"
    >
      <HomeIcon />
    </MotionLink>
  );
};

export default HomeButton;
