import { useScroll, useSpring } from "framer-motion";
import { MutableRefObject } from "react";
import IndicatorIcon from "../IndicatorIcon";

type Props = {
  reference: MutableRefObject<HTMLLIElement | null>;
};

const LineIcon = ({ reference }: Props) => {
  const { scrollYProgress } = useScroll({
    // Target
    target: reference,
    // Settings Offset
    offset: ["start end", "end center"],
    layoutEffect: true,
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <IndicatorIcon
      className="absolute -left-[52px] md:-left-[38px] sm:-left-8"
      scale={scaleY}
    />
  );
};

export default LineIcon;
