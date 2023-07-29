import React from "react";
import { GithubIcon, LinkedInIcon, MailIcon } from "../Icons/Icons";
import { motion } from "framer-motion";

const SocialIconContainer = ({ href, index, children }) => {
  const icon = {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: 0,
    },
    animate: (customValue) => ({
      scale: [0, 1, 1.5, 3, 1.5, 1],
      opacity: 1,
      transition: {
        type: "spring",
        damping: 8,
        duration: 1,
        delay: customValue * 0.2 + 1,
      },
    }),
    hover: {
      rotate: 180,
      transition: {
        type: "inertia",
        velocity: 450,
      },
    },
  };
  return (
    <motion.a
      href={href}
      target="_blank"
      className="w-12 "
      variants={icon}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={index}
    >
      {children}
    </motion.a>
  );
};

const SocialIcons = () => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center justify-center text-dark dark:text-light lg:left-4 md:left-1">
      <SocialIconContainer href="https:/www.github.com/JensenMPillay" index="3">
        <GithubIcon />
      </SocialIconContainer>
      <SocialIconContainer
        href="https:/www.linkedin.com/in/jensenpillay/"
        index="2"
      >
        <LinkedInIcon />
      </SocialIconContainer>
      <SocialIconContainer href="mailto:jmooroongapillay@gmail.com" index="1">
        <MailIcon />
      </SocialIconContainer>
      <motion.span
        className="h-24 w-0.5 bg-dark dark:bg-light"
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      ></motion.span>
    </div>
  );
};

export default SocialIcons;
