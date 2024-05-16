import { skillsSVGsProps } from "@/@types/types";
import { Variants, motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import SkillIcon from "./SkillIcon";

type Props = {
  skillsSVGs: skillsSVGsProps;
  size: number;
};

const ComponentsGrid = ({ skillsSVGs, size }: Props) => {
  const variantsGrid: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsIcon: Variants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 8 },
    },
    exit: { opacity: 0, scale: 0 },
  };

  // Animation
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("show");
  }, [controls, skillsSVGs]);

  return (
    <motion.ul
      className="grid h-full w-full grid-cols-7 place-items-center gap-x-6 gap-y-3 xl:grid-cols-6 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-2.5 md:grid-cols-4 md:gap-x-4 md:gap-y-2 sm:grid-cols-3"
      variants={variantsGrid}
      initial="hidden"
      animate={controls}
    >
      {/* Mapping from List of Components  */}
      {skillsSVGs.map((skillSVG) => (
        <SkillIcon
          key={skillSVG.key}
          size={size}
          name={skillSVG.key}
          variants={variantsIcon}
        >
          {skillSVG}
        </SkillIcon>
      ))}
    </motion.ul>
  );
};

export default ComponentsGrid;
