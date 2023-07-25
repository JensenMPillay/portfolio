import React from "react";
import { GithubIcon, LinkedInIcon, MailIcon } from "../Icons/Icons";
import { motion } from "framer-motion";

const SocialIcons = () => {
  const icon = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: [0, 1, 1.5, 1],
    },
  };
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center justify-center text-dark dark:text-light lg:left-4 md:left-1">
      <motion.a
        href="https:/www.github.com/JensenMPillay"
        target="_blank"
        className="w-12 "
        variants={icon}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <GithubIcon className="transition-transform duration-100 ease-in-out hover:scale-110 active:scale-90" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/jensenpillay/"
        target="_blank"
        className="w-12"
        variants={icon}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      >
        <LinkedInIcon className="transition-transform duration-100 ease-in-out hover:scale-110 active:scale-90" />
      </motion.a>
      <motion.a
        href="/"
        target="_blank"
        className="w-12"
        variants={icon}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", duration: 1, delay: 0.6 }}
      >
        <MailIcon className="transition-transform duration-100 ease-in-out hover:scale-110 active:scale-90" />
      </motion.a>
      <motion.span
        className="h-32 w-0.5 bg-dark dark:bg-light"
        initial={{ height: 0 }}
        animate={{ height: "10rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
      ></motion.span>
    </div>
  );
};

export default SocialIcons;
