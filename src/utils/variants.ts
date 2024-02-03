import { Variants } from "framer-motion";

export const navButtonVariants: Variants = {
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
    // tap: {
    //   scale: 0.9,
    //   transition: {
    //     type: "spring",
    //     damping: 10,
    //     duration: 1,
    //   },
    // },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};
