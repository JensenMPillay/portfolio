import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const CustomNavLink = ({ href, title, className = "" }) => {
  // Get Actual Route for Highlight
  const routerPath = useRouter().asPath;

  return (
    <MotionLink
      className={`${className} group fixed right-[-1vw] -translate-x-1/2 -translate-y-1/2 rotate-90 font-jost text-xl font-light uppercase lg:hidden`}
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

const CustomMobileNavLink = ({ href, title, toggle, className = "" }) => {
  // Get Actual Route for Highlight
  const router = useRouter();

  const routerPath = useRouter().asPath;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} xs:text-Zxl group relative font-jost text-7xl font-light uppercase text-light dark:text-dark lg:text-6xl md:text-5xl sm:text-4xl`}
      href={href}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute -bottom-0.5 left-0 inline-block h-[6px] lg:h-[5px] md:h-[4px] sm:h-[3px] xs:h-[2px] ${
          routerPath === href ? "w-full" : "w-0"
        } bg-light transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-dark`}
      />
    </button>
  );
};

const SwitchButton = ({ mode, setMode }) => {
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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-light px-32 py-8 font-medium dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8">
      {/* Hamburger Menu  */}
      <motion.button
        className="hidden flex-col items-center justify-center lg:flex"
        onClick={handleClick}
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

      {/* NavLinks Desktop Screen */}
      {/* <div className="flex w-full items-center justify-between lg:hidden">
        <nav className="flex w-1/3 flex-wrap">
          <CustomNavLink href="/" title="Home" className="mr-4" />
          <CustomNavLink href="/projects" title="Projects" className="mx-4" />
          <CustomNavLink href="/about" title="About" className="ml-4" />
        </nav>
      </div> */}

      {/* Navlinks Tablet & Mobile Screen  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-1/2 top-1/2 z-30 flex min-h-[50vw] min-w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-dark/75 p-16 backdrop-blur-md dark:bg-light/75 lg:p-8 md:p-6"
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <nav className="flex min-h-full w-full flex-col items-center justify-around">
              <CustomMobileNavLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileNavLink
                href="/projects"
                title="Projects"
                className="my-4"
                toggle={handleClick}
              />
              <CustomMobileNavLink
                href="/about"
                title="About"
                className=""
                toggle={handleClick}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo  */}
      <div className="absolute left-1/2 top-2 mt-2 -translate-x-1/2">
        <Logo />
      </div>

      {/* SwitchMode Button  */}
      <SwitchButton mode={mode} setMode={setMode} />

      {/* Social Icons  */}
      <SocialIcons />

      {/* SideBar NavLink */}
      <CustomNavLink
        href="/about"
        title="About"
        className="top-1/3 mr-[18px]"
        toggle={handleClick}
      />
      <CustomNavLink
        href="/projects"
        title="Projects"
        className="top-2/3"
        toggle={handleClick}
      />
    </header>
  );
};

export default Navbar;
