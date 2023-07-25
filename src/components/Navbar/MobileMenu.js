import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavLink from "./MobileNavLink";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    // Navlinks Tablet & Mobile Screen
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed left-1/2 top-1/2 z-30 flex min-h-[50vw] min-w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-dark/75 p-16 backdrop-blur-md dark:bg-light/75 lg:p-8 md:p-6"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <nav className="flex min-h-full w-full flex-col items-center justify-around">
            <MobileNavLink
              href="/"
              title="Home"
              className=""
              toggle={toggleMenu}
            />
            <MobileNavLink
              href="/projects"
              title="Projects"
              className="my-4"
              toggle={toggleMenu}
            />
            <MobileNavLink
              href="/about"
              title="About"
              className=""
              toggle={toggleMenu}
            />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
