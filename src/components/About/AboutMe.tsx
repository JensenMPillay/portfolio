import aboutmeData from "@/data/aboutmeData";
import { AboutContentProps } from "@/types";
import { containerVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedNumbers from "../Animations/AnimatedNumbers";

const AboutMe = ({ scrollRef }: AboutContentProps) => {
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [scrollRef]);
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <motion.div
        className="col-span-6 flex flex-col items-start justify-start xl:col-span-8 md:order-2 md:col-span-8"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
      >
        <motion.h2
          className="mb-4 font-jost text-lg font-extralight uppercase text-dark/75 dark:text-light/75 md:self-center"
          variants={containerVariants}
        >
          {aboutmeData.title}
        </motion.h2>
        {aboutmeData.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="my-2 font-medium"
            variants={containerVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {aboutmeData.aside.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-end justify-center xl:items-center "
          >
            <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
              <AnimatedNumbers value={info.value} />+
            </span>
            <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
              {info.title}
            </h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
