import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const SideNavLink = ({ href, title, initial, animate, className = "" }) => {
  // Get Actual Route for Highlight
  const routerPath = useRouter().asPath;

  return (
    <MotionLink
      className={`${className} group fixed font-jost text-2xl font-light uppercase -tracking-wider ${
        routerPath === href
          ? "text-dark dark:text-light/75"
          : "text-dark/75 dark:text-light/75"
      } transition-colors duration-300 ease-in-out hover:text-dark dark:hover:text-light lg:hidden`}
      href={href}
      initial={{ ...initial, scale: 1 }}
      animate={{
        ...animate,
        transition: { type: "spring", duration: 1.4, delay: 0.6 },
      }}
      whileHover={{
        ...animate,
        transition: { type: "spring", damping: 10, delay: 0, duration: 0.1 },
        scale: 1.2,
      }}
      whileTap={{ ...animate, scale: 0.9 }}
    >
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[2px] ${
          routerPath === href ? "w-full" : "w-0"
        } bg-dark transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-light`}
      />
    </MotionLink>
  );
};

export default SideNavLink;
