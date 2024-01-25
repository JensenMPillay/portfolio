import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MailIcon } from "../Icons/Icons";

const SocialIconContainer = ({ href, index, name, children }) => {
  const icon = {
    initial: {
      scale: 0,
      opacity: 0,
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
  };
  return (
    <motion.a
      href={href}
      target="_blank"
      className="group relative w-12"
      variants={icon}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <span className="absolute left-full top-1/2 -translate-y-1/2 text-dark opacity-0 transition-all delay-0 duration-300 group-hover:opacity-100 group-hover:duration-300 dark:text-light">
        {name}
      </span>
      {children}
    </motion.a>
  );
};

const SocialIcons = () => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center justify-center text-dark dark:text-light lg:left-4 md:left-1">
      <SocialIconContainer
        name="Github"
        href="https://www.github.com/JensenMPillay"
        index="3"
      >
        <GithubIcon className="transition-all duration-300 group-hover:scale-125" />
      </SocialIconContainer>
      <SocialIconContainer
        name="LinkedIn"
        href="https://www.linkedin.com/in/jensenpillay/"
        index="2"
      >
        <LinkedInIcon className="transition-all duration-300 group-hover:scale-125" />
      </SocialIconContainer>
      <SocialIconContainer
        name="Send&nbsp;Email"
        href="mailto:jmooroongapillay@gmail.com"
        index="1"
      >
        <MailIcon className="transition-all duration-300 group-hover:scale-125" />
      </SocialIconContainer>
      <motion.span
        className="h-24 w-0.5 bg-dark dark:bg-light"
        initial={{ height: 0 }}
        animate={{ height: "6rem" }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      ></motion.span>
    </div>
  );
};

export default SocialIcons;
