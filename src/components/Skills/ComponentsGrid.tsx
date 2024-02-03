import { skillsSVGsProps } from "@/types";
import { Variants, motion } from "framer-motion";
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
    show: { opacity: 1, scale: 1, transition: { type: "spring", damping: 8 } },
  };
  return (
    <motion.div
      className={`grid h-full w-full grid-cols-7 place-items-center gap-x-6 gap-y-3 overflow-hidden xl:grid-cols-6 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-2.5 md:grid-cols-4 md:gap-x-4 md:gap-y-2 sm:grid-cols-3`}
      variants={variantsGrid}
      initial="hidden"
      whileInView="show"
    >
      {/* Mapping from List of Components  */}
      {Object.entries(skillsSVGs).map(([key, skillSVG]) => (
        <SkillIcon key={key} size={size} name={key} variants={variantsIcon}>
          {skillSVG}
        </SkillIcon>
      ))}
    </motion.div>
  );
};

export default ComponentsGrid;
