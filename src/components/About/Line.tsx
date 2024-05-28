import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

type Props = {
  reference: MutableRefObject<HTMLDivElement | null>;
};

const Line = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    // Target
    target: reference,
    // Settings Offset
    offset: ["start start", "end end"],
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
