import { AboutContentProps, ExperienceDetailsProps } from "@/@types/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { Variants, motion, useScroll } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useRef } from "react";
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
      className="mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0 md:w-[80%]"
      key={id}
    >
      <LineIcon reference={ref} />
      <motion.div variants={variants} initial="hidden" whileInView="show">
        <h3 className="font-jost text-3xl font-extralight capitalize md:text-2xl sm:text-xl xs:text-base">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primaryDark dark:text-primaryDark"
          >
            {company && `@${company}`}
          </a>
        </h3>
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <div className="w-full font-medium md:text-sm">
          <ul className="list-disc">
            {works.map((line, index) => (
              <li key={index} className="my-1">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = ({ scrollRef }: AboutContentProps) => {
  // Content
  const { t } = useTranslation("about");

  const experienceData: ExperienceDetailsProps[] = t("experienceData", {
    returnObjects: true,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    // Target
    container: scrollRef,
    // Settings Offset
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [scrollRef]);

  return (
    <>
      <div ref={ref} className="relative w-full">
        {/* SideBar  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-6 md:w-[3px] sm:left-3"
        />
        {/* Experiences List  */}
        <motion.ul
          className="ml-4 flex w-full flex-col items-start justify-between md:ml-2"
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
    </>
  );
};

export default Experience;
