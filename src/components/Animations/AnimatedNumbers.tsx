import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
};

// Animate Numbers
const AnimatedNumbers = ({ value }: Props) => {
  // Get Refs
  const ref = useRef<HTMLSpanElement | null>(null);

  // Initial Motion Value
  const motionValue = useMotionValue(0);

  // Set Animation for the Motion Value
  const springValue = useSpring(motionValue, { duration: 6000 });

  // Get inView Element (Option : Once not Each)
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // if InView, set to the value expected
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedNumbers;
