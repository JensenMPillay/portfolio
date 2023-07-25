import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 h-screen w-screen bg-dark dark:bg-light"
        // initial={{ y: "100%", height: "0%" }}
        animate={{ y: "-100%", height: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ y: ["-100%", "0%"] }}
      ></motion.div>

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-20 h-screen w-screen bg-light dark:bg-dark"
        initial={{ y: "100%", height: "0%" }}
        animate={{ y: "-100%", height: "100%" }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-10 h-screen w-screen bg-dark dark:bg-light"
        initial={{ y: "100%", height: "0%" }}
        animate={{ y: "-100%", height: "100%" }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;
