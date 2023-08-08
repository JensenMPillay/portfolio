import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

const MouseLightEffect = ({ mouseX, mouseY }) => {
  return (
    <motion.div
      className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
      style={{
        background: useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(1,51,40,1), transparent 80%)`,
      }}
    ></motion.div>
  );
};

export default MouseLightEffect;
