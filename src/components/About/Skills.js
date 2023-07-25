import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:bg-light dark:text-dark dark:shadow-light lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm sm:bg-transparent sm:font-bold sm:text-dark sm:dark:bg-transparent sm:dark:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      //   Set Animation InView
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      //   Animate Once Only
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center font-jost text-6xl font-extralight uppercase lg:mt-48 lg:text-5xl md:mt-32 md:text-4xl sm:mt-16 sm:text-3xl">
        Skills
      </h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg  lg:dark:bg-circularDarkLg md:h-[60vh] md:bg-circularLightMd md:dark:bg-circularDarkMd sm:h-[50vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 md:text-sm sm:p-3 sm:font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Figma" x="15vw" y="-12vw" />
        <Skill name="AdobeXD" x="32vw" y="-5vw" />
        <Skill name="Bootstrap" x="0vw" y="-20vw" />
        <Skill name="TailwindCSS" x="-25vw" y="18vw" />
        <Skill name="PHP" x="15vw" y="15vw" />
        <Skill name="SQL" x="-15vw" y="-10vw" />
        <Skill name="Symfony" x="-15vw" y="9vw" />
        <Skill name="NodeJS" x="25vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
