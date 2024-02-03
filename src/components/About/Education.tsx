import educationData from "@/data/educationData";
import { AboutContentProps, EducationDetailsProps } from "@/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { Variants, motion, useScroll } from "framer-motion";
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
      className="mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0 md:w-[80%]"
      key={id}
    >
      <LineIcon reference={ref} />
      <motion.div variants={variants} initial="hidden" whileInView="show">
        <h3 className="font-jost text-3xl font-extralight capitalize md:text-2xl sm:text-xl xs:text-base">
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
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    // Target (Container or Direct Target)
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
        {/* Education List  */}
        <motion.ul
          className="ml-4 flex w-full flex-col items-start justify-between md:ml-2"
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
