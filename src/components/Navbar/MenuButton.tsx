import { ToggleButtonProps } from "@/types";
import { navButtonVariants } from "@/utils/variants";
import { motion } from "framer-motion";

const MenuButton = ({ isOpen, toggleMenu }: ToggleButtonProps) => {
  return (
    <motion.button
      className="group fixed left-[28px] top-[28px] hidden flex-col items-center justify-center lg:flex"
      onClick={toggleMenu}
      variants={navButtonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out  dark:bg-light ${
          isOpen
            ? "translate-y-1 rotate-45"
            : "-translate-y-0.5 self-start group-hover:w-4"
        }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-in-out dark:bg-light ${
          isOpen
            ? "-translate-y-1 -rotate-45"
            : "translate-y-0.5 self-end group-hover:w-4"
        }`}
      ></span>
    </motion.button>
  );
};

export default MenuButton;
