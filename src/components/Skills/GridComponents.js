import React from "react";
import SkillIcon from "./SkillIcon";
import { motion } from "framer-motion";

const GridComponents = ({ skillsSVGs, type, size }) => {
  const variantsGrid = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsIcon = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", damping: 8 } },
  };
  return (
    <motion.div
      className={`flex w-full flex-row justify-around overflow-hidden  lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-x-6 lg:gap-y-3 md:grid-cols-2 md:gap-x-4 md:gap-y-2 sm:grid-cols-2`}
      variants={variantsGrid}
      initial="hidden"
      whileInView="show"
    >
      {/* Mapping from List of Components  */}
      {/* {Object.entries(skillsSVGs).map(([key, skillSVG]) => (
          <SkillIcon key={key} size={size} name={key}>
            {skillSVG("")}
          </SkillIcon>
        ))} */}
      {Object.entries(skillsSVGs)
        .filter(([key, skillSVG]) => {
          if (type === "tools") {
            return key === "AdobeXD" || key === "Figma" || key === "Prestashop";
          } else if (type === "dev") {
            return key !== "AdobeXD" && key !== "Figma" && key !== "Prestashop";
          }
          return true;
        })
        .map(([key, skillSVG]) => (
          <SkillIcon key={key} size={size} name={key} variants={variantsIcon}>
            {skillSVG("")}
          </SkillIcon>
        ))}
    </motion.div>
  );
};

export default GridComponents;
