import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LineIcon from "./LineIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LineIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="font-jost text-3xl font-extralight capitalize md:text-2xl sm:text-xl xs:text-base">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primaryDark dark:text-primary"
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

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Target
    target: ref,
    // Settings Offset
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 lg:my-48 md:my-32 sm:my-16">
      <h2 className="mb-32 w-full text-center font-jost text-6xl font-extralight uppercase lg:mb-24 lg:text-5xl md:mb-16 md:text-4xl sm:mb-8 sm:text-3xl">
        Experience
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        {/* SideBar  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-6 md:w-[3px]"
        />
        {/* Experiences List  */}
        <ul className="ml-4 flex w-full flex-col items-start justify-between md:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
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
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://www.amazon.com"
            time="2020-2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
            as product recommendations and user reviews, and optimizing the app's performance and reliability."
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
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
