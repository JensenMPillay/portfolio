import { LinkProps } from "@/@types/types";
import { cn } from "@/utils/utils";
import { Target, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  initial: Target;
  animate: Target;
  className?: string;
};

const MotionLink = motion(Link);

const SideNavLink = ({
  href,
  title,
  initial,
  animate,
  className = "",
}: Props & LinkProps) => {
  // Get Actual Route for Highlight
  const routerPath = useRouter().asPath;

  return (
    <MotionLink
      className={cn(
        "group fixed font-jost text-2xl font-light uppercase -tracking-wider transition-colors duration-300 ease-in-out hover:text-dark dark:hover:text-light lg:hidden",
        className,
        routerPath === href
          ? "text-dark dark:text-light"
          : "text-dark/75 dark:text-light/75",
      )}
      href={href}
      initial={{ ...initial, scale: 1 }}
      animate={{
        ...animate,
        transition: { type: "spring", duration: 1.4, delay: 0.6 },
      }}
      whileHover={{
        ...animate,
        transition: { type: "spring", damping: 10, delay: 0, duration: 0.1 },
        scale: 1.2,
      }}
      whileTap={{ ...animate, scale: 0.9 }}
    >
      {title}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 inline-block h-[2px] bg-dark transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-light",
          routerPath === href ? "w-full" : "w-0",
        )}
      />
    </MotionLink>
  );
};

export default SideNavLink;
