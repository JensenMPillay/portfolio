import { navButtonVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const SwitchButtons = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="fixed right-[18px] top-[18px] flex space-x-2"
      variants={navButtonVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default SwitchButtons;
