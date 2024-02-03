import { cn } from "@/utils/tailwindMerge";
import { AnimationDefinition, Variants, motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  onAnimationComplete?: (definition: AnimationDefinition) => void;
};

// Animation
const sentence: Variants = {
  animate: {
    transition: {
      // Create a Delay for Apparition
      delay: 1,
      // Create a Delay for the Animation of each Word
      staggerChildren: 0.1,
    },
  },
};

const singleWord: Variants = {
  // Initial State
  initial: {
    opacity: 0,
    y: 50,
  },
  // End State
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className, onAnimationComplete }: Props) => {
  return (
    <motion.div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-left sm:p-0">
      <motion.h1
        className={cn(
          `font mb-12 inline-block w-full text-center font-jost text-5xl font-extralight uppercase text-dark dark:text-light lg:text-4xl md:mb-8 md:text-3xl sm:mb-4`,
          className,
        )}
        variants={sentence}
        initial="initial"
        animate="animate"
        onAnimationComplete={onAnimationComplete}
      >
        {/* Separate Text to Animate each Word  */}
        {text.split(" ").map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedText;
