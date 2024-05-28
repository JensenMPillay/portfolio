import { ExperienceDetailsProps } from "@/@types/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { Variants, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import Line from "./Line";
import LineIcon from "./LineIcon";

const Details = ({
  id,
  position,
  company,
  companyLink,
  time,
  address,
  works,
  variants,
}: ExperienceDetailsProps & { variants: Variants }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  return (
    <li
      ref={ref}
      className="flex w-full flex-row space-x-8 text-left first:mt-0 last:mb-0 md:space-x-6 sm:space-x-4"
      key={id}
    >
      <LineIcon reference={ref} />
      <motion.div variants={variants} initial="hidden" whileInView="show">
        <h3 className="text-balance font-jost text-2xl font-extralight capitalize md:text-xl sm:text-lg xs:text-base">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-dark/75 dark:text-light/75"
          >
            {company && `@${company}`}
          </a>
        </h3>
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 sm:text-sm xs:text-xs">
          {time} | {address}
        </span>
        <div className="w-full font-medium md:text-sm">
          <ul className="list-disc space-y-1">
            {works.map((line, index) => (
              <li key={index} className="text-balance">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  // Content
  const { t } = useTranslation("about");

  const experienceData: ExperienceDetailsProps[] = t("experienceData", {
    returnObjects: true,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={ref}>
      <Line reference={ref} type="experience" />
      {/* Experience List  */}
      <motion.ul
        className="ml-4 flex w-full flex-col space-y-8 md:ml-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {experienceData.map(
          ({ id, position, company, companyLink, time, address, works }) => {
            return (
              <Details
                id={id}
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                works={works}
                variants={textVariants}
              />
            );
          },
        )}
      </motion.ul>
    </div>
  );
};

export default Experience;
