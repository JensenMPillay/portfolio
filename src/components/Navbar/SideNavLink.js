import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const SideNavLink = ({ href, title, className = "" }) => {
  // Get Actual Route for Highlight
  const routerPath = useRouter().asPath;

  return (
    <MotionLink
      className={`${className} group fixed right-[-1vw] -translate-x-1/2 -translate-y-1/2 rotate-90 font-jost text-xl font-light uppercase -tracking-wider text-dark dark:text-light lg:hidden`}
      href={href}
      initial={{
        x: 100,
        rotate: 90,
      }}
      animate={{
        x: 0,
        rotate: 90,
        transition: { type: "spring", duration: 1, delay: 0.6 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[2px] ${
          routerPath === href ? "w-full" : "w-0"
        } bg-dark text-light transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-light dark:text-dark`}
      />
    </MotionLink>
  );
};

export default SideNavLink;
