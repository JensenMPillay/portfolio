import { motion, useScroll, useSpring } from "framer-motion";
import { MutableRefObject } from "react";

type Props = {
  reference: MutableRefObject<HTMLDivElement | null>;
  type: string;
};

const Line = ({ reference, type }: Props) => {
  const { scrollYProgress } = useScroll({
    // Target
    // container: reference,
    // Settings Offset
    // offset: type === "education" ? ["end", "start"] : ["start", "end"],
    layoutEffect: false,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    type != "aboutme" && (
      <motion.div
        style={{ scaleY: scaleY }}
        className="absolute top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:w-[3px] sm:w-[2px]"
      />
    )
  );
};

export default Line;
