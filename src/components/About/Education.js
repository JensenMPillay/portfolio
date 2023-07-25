import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LineIcon from "./LineIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LineIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-jost text-3xl font-extralight capitalize md:text-2xl sm:text-xl xs:text-base">
          {type}
        </h3>
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Target
    target: ref,
    // Settings Offset
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-64 lg:mt-48 md:mt-32 sm:mt-16">
      <h2 className="mb-32 w-full text-center font-jost text-6xl font-extralight uppercase lg:mb-24 lg:text-5xl md:mb-16 md:text-4xl sm:mb-8 sm:text-3xl">
        Education
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        {/* SideBar  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-6 md:w-[3px]"
        />
        {/* Education List  */}
        <ul className="ml-4 flex w-full flex-col items-start justify-between md:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Master Of Computer Science"
            time="2020-2022"
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
            language understanding."
          />
          <Details
            type="Online Coursework"
            time="2016-2020"
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
