import { cn } from "@/utils/utils";
import { navButtonVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const SwitchLangButton = () => {
  const MotionLink = motion(Link);

  const { pathname, locale } = useRouter();

  return (
    <>
      <MotionLink
        className={cn(
          "flex h-auto w-4 items-center justify-center p-1 uppercase text-dark dark:text-light",
          locale === "en" && "font-bold",
        )}
        variants={navButtonVariants}
        whileHover="hover"
        whileTap="tap"
        href={pathname}
        locale="en"
      >
        EN
      </MotionLink>
      <motion.span className="flex h-auto items-center justify-center p-1 text-dark dark:text-light">
        /
      </motion.span>
      <MotionLink
        className={cn(
          "flex h-auto w-4 items-center justify-center p-1 uppercase text-dark dark:text-light",
          locale === "fr" && "font-bold",
        )}
        variants={navButtonVariants}
        whileHover="hover"
        whileTap="tap"
        href={pathname}
        locale="fr"
      >
        FR
      </MotionLink>
    </>
  );
};

export default SwitchLangButton;
