import { cn } from "@/utils/tailwindMerge";
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
        transition: { duration: 1, ease: "easeInOut" },
      };
      exitProps = { opacity: 0 };
      break;
    case "top":
      initialProps = { y: "-150%" };
      animateProps = {
        y: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { y: ["0%", "-150%"] };
      break;
    case "left":
      initialProps = { x: "-100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { x: ["0%", "-100%"] };
      break;
    case "right":
      initialProps = { x: "100%" };
      animateProps = {
        x: "0%",
        transition: { duration: 1, type: "spring" },
      };
      exitProps = { x: ["0%", "100%"] };
      break;
    default:
      break;
  }

  return (
    <motion.div
      className={cn(
        "z-0 inline-block h-full w-full bg-transparent p-32 pt-0 transition-colors duration-300 ease-in-out dark:bg-transparent xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0",
        className,
      )}
      initial={initialProps}
      animate={animateProps}
      exit={exitProps}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
