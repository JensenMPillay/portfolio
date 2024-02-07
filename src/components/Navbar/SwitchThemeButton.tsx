import { cn } from "@/utils/utils";
import { navButtonVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "../Icons/Icons";

type Props = {
  mode: string;
  setMode: (mode: string) => void;
};

const SwitchThemeButton = ({ mode, setMode }: Props) => {
  return (
    <motion.button
      className={cn(
        "flex h-auto w-8 items-center justify-center rounded-full p-1",
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark",
      )}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
      variants={navButtonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {mode === "dark" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </motion.button>
  );
};

export default SwitchThemeButton;
