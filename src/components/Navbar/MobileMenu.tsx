import { ToggleButtonProps } from "@/@types/types";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import MobileNavLink from "./MobileNavLink";

const MobileMenu = ({ isOpen, toggleMenu }: ToggleButtonProps) => {
  // Content
  const { t } = useTranslation("common");

  const { home, skills, about, projects } = t("titles", {
    returnObjects: true,
  });

  return (
    // Navlinks Tablet & Mobile Screen
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed left-1/2 top-1/2 z-30 flex min-h-[50vw] min-w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-dark/75 p-16 backdrop-blur dark:bg-light/75 lg:p-8 md:p-6"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { ease: "anticipate" },
          }}
        >
          <nav className="flex min-h-full w-full flex-col items-center justify-around">
            <MobileNavLink href="/" title={home} toggle={toggleMenu} />
            <MobileNavLink href="/about" title={about} toggle={toggleMenu} />
            <MobileNavLink href="/skills" title={skills} toggle={toggleMenu} />
            <MobileNavLink
              href="/projects"
              title={projects}
              toggle={toggleMenu}
            />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
