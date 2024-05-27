import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

type Props = {
  reference: MutableRefObject<HTMLDivElement | null>;
  type: "experience" | "education";
};

const Line = ({ reference, type }: Props) => {
  const { scrollYProgress } = useScroll({
    // Target
    target: reference,
    // Settings Offset
    offset:
      type === "experience"
        ? ["start start", "end end"]
        : ["end end", "start start"],
    layoutEffect: false,
  });
  return (
    <motion.div
      style={{ scaleY: scrollYProgress }}
      className="absolute top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:w-[3px] sm:w-[2px]"
    />
  );
};

export default Line;
