import { AboutContentProps, EducationDetailsProps } from "@/@types/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { Variants, motion, useScroll } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useRef } from "react";
import LineIcon from "./LineIcon";

const Details = ({
  id,
  type,
  time,
  place,
  info,
  variants,
}: EducationDetailsProps & { variants: Variants }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="flex w-full flex-row space-x-8 text-left first:mt-0 last:mb-0"
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
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="my-1 w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = ({ scrollRef }: AboutContentProps) => {
  // Content
  const { t } = useTranslation("about");

  const educationData: EducationDetailsProps[] = t("educationData", {
    returnObjects: true,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    // Target
    target: scrollRef,
    // Settings Offset
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [scrollRef]);

  return (
    <>
      <div ref={ref} className="w-full">
        {/* SideBar  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-6 md:w-[3px] sm:left-3"
        />
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
    </>
  );
};

export default Education;
