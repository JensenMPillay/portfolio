import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Animate Numbers
const AnimatedNumbers = ({ value }) => {
  // Get Refs
  const ref = useRef(null);

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
