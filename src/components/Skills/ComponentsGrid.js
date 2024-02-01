import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const ComponentsGrid = ({ skillsSVGs, size }) => {
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
      className={`grid flex-1 grid-cols-7 place-items-center overflow-hidden lg:grid lg:grid-cols-5 lg:place-items-center lg:gap-x-6 lg:gap-y-3 md:grid-cols-3 md:gap-x-4 md:gap-y-2`}
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
      {Object.entries(skillsSVGs).map(([key, skillSVG]) => (
        <SkillIcon key={key} size={size} name={key} variants={variantsIcon}>
          {skillSVG("")}
        </SkillIcon>
      ))}
    </motion.div>
  );
};

export default ComponentsGrid;
