import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

type Props = {
  reference: MutableRefObject<HTMLLIElement | null>;
};

const LineIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    // Target
    target: reference,
    // Settings Offset
    offset: ["start center", "end center"],
    layoutEffect: false,
  });
  return (
    <motion.figure
      className="absolute -left-[52px] stroke-dark dark:stroke-light md:-left-[38px] sm:-left-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 200 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="size-[75px] -rotate-90 md:size-[62px] sm:size-[50px]"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="fill-none stroke-primary stroke-1 dark:stroke-primaryDark"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="fill-primaryDark stroke-[5px] dark:fill-dark md:stroke-[4px]"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="animate-pulse  fill-dark stroke-1 dark:fill-primaryDark"
        />
      </svg>
    </motion.figure>
  );
};

export default LineIcon;
