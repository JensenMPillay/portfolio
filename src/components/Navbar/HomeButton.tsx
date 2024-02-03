import { navButtonVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { HomeIcon } from "../Icons/Icons";

const MotionLink = motion(Link);

const HomeButton = () => {
  return (
    <MotionLink
      className="fixed left-[18px] top-[18px] flex flex-col items-center justify-center text-dark dark:text-light lg:hidden"
      variants={navButtonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      href="/"
    >
      <HomeIcon />
    </MotionLink>
  );
};

export default HomeButton;
