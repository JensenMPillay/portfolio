import { EducationDetailsProps } from "@/@types/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import Line from "./Line";
import LineIcon from "./LineIcon";

const Details = ({
  id,
  type,
  time,
  place,
  info,
  variants,
}: EducationDetailsProps & { variants: Variants }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  return (
    <li
      ref={ref}
      className="relative flex w-full flex-row space-x-8 text-left md:space-x-6 sm:space-x-4"
      key={id}
    >
      <LineIcon reference={ref} />
      <motion.div
        className=""
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <h3 className="font-jost text-2xl font-extralight capitalize md:text-xl sm:text-lg xs:text-base">
          {type}
        </h3>
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 sm:text-sm xs:text-xs">
          {time} | {place}
        </span>
        <p className="my-1 w-full text-balance font-medium md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  // Content
  const { t } = useTranslation("about");

  const educationData: EducationDetailsProps[] = t("educationData", {
    returnObjects: true,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative" ref={ref}>
      <Line reference={ref} type="education" />
      {/* Education List  */}
      <motion.ul
        className="ml-4 flex w-full flex-col space-y-8 md:ml-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {educationData.map(({ id, type, time, place, info }) => {
          return (
            <Details
              id={id}
              key={id}
              type={type}
              time={time}
              place={place}
              info={info}
              variants={textVariants}
            />
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Education;
