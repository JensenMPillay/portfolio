import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import * as skillsSVGs from "../Icons/SkillsIcons";
import GridComponents from "./GridComponents";

const Skills = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Initialize Values
    function handleResize() {
      if (window.matchMedia("(min-width: 1279px)").matches) {
        setSize(250);
      } else if (window.matchMedia("(min-width: 1023px)").matches) {
        setSize(225);
      } else if (window.matchMedia("(min-width: 767px)").matches) {
        setSize(175);
      } else if (window.matchMedia("(min-width: 639px)").matches) {
        setSize(125);
      } else {
        setSize(150);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div className="flex h-[50vh] w-full flex-row rounded-3xl border-solid border-dark bg-transparent shadow-lg dark:border-light sm:rounded-2xl">
      <div className="flex h-[50vh] w-full flex-row items-center justify-center rounded-3xl border-solid border-dark shadow-lg dark:border-light lg:flex-col sm:rounded-2xl">
        <motion.div
          className="flex h-full w-1/4 flex-col lg:h-1/4 lg:w-full lg:flex-row lg:items-center lg:justify-between"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="group flex h-1/2 w-full items-center justify-center border-dark">
            <h2 className="text-center font-jost text-4xl font-light uppercase -tracking-wider text-dark/50 dark:text-light/50 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
              Frameworks Librairies Softwares
            </h2>
          </div>
          <div className="group flex h-1/2 w-full items-center justify-center border-dark">
            <h2 className="text-center font-jost text-4xl font-light uppercase -tracking-wider text-dark/50 dark:text-light/50 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
              Design Platforms C.M.S.
            </h2>
          </div>
        </motion.div>
        <div className="flex h-full w-3/4 flex-col backdrop-blur lg:h-3/4 lg:w-full lg:flex-row lg:items-center lg:justify-center">
          <div className="flex h-1/2 w-full items-center justify-center border-dark p-1 lg:h-full lg:w-1/2">
            <GridComponents skillsSVGs={skillsSVGs} size={size} type="dev" />
          </div>
          <div className="flex h-1/2 w-full items-center justify-center border-dark p-1 lg:h-full lg:w-1/2">
            <GridComponents skillsSVGs={skillsSVGs} size={size} type="tools" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
