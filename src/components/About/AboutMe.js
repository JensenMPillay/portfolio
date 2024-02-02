import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedNumbers from "../Animations/AnimatedNumbers";

const AboutMe = ({ scrollRef }) => {
  const variantsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // const variantsText = {
  //   hidden: { opacity: 0, y: -50 },
  //   show: { opacity: 1, y: 0 },
  // };

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [scrollRef]);
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <motion.div
        className="col-span-6 flex flex-col items-start justify-start xl:col-span-8 md:order-2 md:col-span-8"
        initial="hidden"
        whileInView="show"
        variants={variantsContainer}
      >
        <motion.h2
          className="mb-4 font-jost text-lg font-extralight uppercase text-dark/75 dark:text-light/75 md:self-center"
          variants={variantsContainer}
        >
          About Me
        </motion.h2>
        <motion.p className="font-medium" variants={variantsContainer}>
          Passionate about programming and computational logic, I&apos;m driven
          by a constant thirst for learning and developing new skills in this
          ever-evolving field.
        </motion.p>

        <motion.p className="my-4 font-medium" variants={variantsContainer}>
          Currently seeking a professional opportunity, my goal is to solidify
          my knowledge and keep progressing to make meaningful contributions to
          the complexities of computer science.
        </motion.p>

        <motion.p className="my-4 font-medium" variants={variantsContainer}>
          With a firm belief that my programming passion, combined with
          enthusiasm and professionalism, can bring value to any team, I&apos;m
          ready to fully commit to tackling new challenges and sharing knowledge
          and energy with colleagues.
        </motion.p>

        <motion.p className="font-medium" variants={variantsContainer}>
          Feel free to reach out if you&apos;re seeking a motivated and
          dedicated professional, eager to actively contribute to your company
          and thrive in a stimulating environment.
        </motion.p>
      </motion.div>
      <motion.div
        className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-end justify-center xl:items-center ">
          <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
            <AnimatedNumbers value={10} />+
          </span>
          <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
            Projects Completed
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
          <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
            <AnimatedNumbers value={3} />+
          </span>
          <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
            Years Of Experience
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
