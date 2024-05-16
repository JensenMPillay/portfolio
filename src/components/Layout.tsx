import { cn } from "@/utils/utils";
import { Target, Variant, motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  direction?: string;
};

const Layout = ({
  children,
  className,
  direction,
}: PropsWithChildren<Props>) => {
  let initialProps: Target = {};
  let animateProps: Variant = {};
  let exitProps: Variant = {};

  switch (direction) {
    case "center":
      initialProps = { opacity: 1 };
      animateProps = {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      };
      exitProps = { opacity: 0 };
      break;
    case "top":
      initialProps = { y: "-150%" };
      animateProps = {
        y: "0%",
        transition: { duration: 0.6, type: "spring" },
      };
      exitProps = { y: ["0%", "-150%"] };
      break;
    case "left":
      initialProps = { x: "-100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 0.6, type: "spring" },
      };
      exitProps = { x: ["0%", "-100%"] };
      break;
    case "right":
      initialProps = { x: "100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 0.6, type: "spring" },
      };
      exitProps = { x: ["0%", "100%"] };
      break;
    default:
      break;
  }

  return (
    <motion.section
      className={cn(
        "z-0 flex h-full w-full flex-col bg-transparent p-32 text-dark transition-colors duration-300 ease-in-out dark:bg-transparent dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8",
        className,
      )}
      initial={initialProps}
      animate={animateProps}
      exit={exitProps}
    >
      {children}
    </motion.section>
  );
};

export default Layout;
