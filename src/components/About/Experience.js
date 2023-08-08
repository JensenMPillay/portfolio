import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import LineIcon from "./LineIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  variants,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
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
            @{company}
          </a>
        </h3>
        <span className="font-jost font-medium capitalize italic text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({ scrollRef }) => {
  const ref = useRef(null);

  const variantsExperienceContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsExperienceText = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

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
    <div className="">
      {/* <h2 className="mb-16 w-full text-center font-jost text-6xl font-extralight uppercase lg:mb-12 lg:text-5xl md:mb-8 md:text-4xl sm:mb-6 sm:text-3xl">
        Experience
      </h2> */}
      <div ref={ref} className="relative w-full">
        {/* SideBar  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-6 md:w-[3px] sm:left-3"
        />
        {/* Experiences List  */}
        <motion.ul
          className="ml-4 flex w-full flex-col items-start justify-between md:ml-2"
          variants={variantsExperienceContainer}
          initial="hidden"
          whileInView="show"
        >
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            variants={variantsExperienceText}
          />
          <Details
            position="Intern"
            company="Facebook"
            companyLink="https://www.facebook.com"
            time="Summer 2021"
            address="Menlo Park, CA"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
            share short-form video content, including designing and implementing a new user interface and developing 
            the backend infrastructure to support the feature."
            variants={variantsExperienceText}
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://www.amazon.com"
            time="2020-2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
            variants={variantsExperienceText}
          />
          <Details
            position="Software Developer Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com"
            time="Summer 2019"
            address="Redmond, WA"
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
            including implementing a new user interface for a system settings panel and optimizing the performance of 
            a core system component."
            variants={variantsExperienceText}
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default Experience;
