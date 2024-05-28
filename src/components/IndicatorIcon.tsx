import { cn } from "@/utils/utils";
import { motion, MotionValue } from "framer-motion";
import { HTMLAttributes } from "react";

type Props = {
  scale: MotionValue<any>;
};

const IndicatorIcon = ({
  className,
  scale,
}: HTMLAttributes<HTMLDivElement> & Props) => {
  return (
    <motion.figure
      className={cn("stroke-dark dark:stroke-light", className)}
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
          style={{ pathLength: scale }}
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

export default IndicatorIcon;
