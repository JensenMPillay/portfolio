import { TabProps } from "@/@types/types";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

const SwitchContent = () => {
  // Content
  const { t } = useTranslation("about");

  const tabData: Omit<TabProps, "content">[] = t("tabData", {
    returnObjects: true,
  });

  // Tabs
  const aboutTabs: Omit<TabProps, "title">[] = [
    {
      value: "aboutme",
      content: (scrollRef) => <AboutMe scrollRef={scrollRef} />,
    },
    {
      value: "experience",
      content: (scrollRef) => <Experience scrollRef={scrollRef} />,
    },
    {
      value: "education",
      content: (scrollRef) => <Education scrollRef={scrollRef} />,
    },
  ];

  // Ref
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Content
  const [content, setContent] =
    useState<(typeof aboutTabs)[number]["value"]>("aboutme");

  return (
    <div className="flex h-[70vh] w-full flex-row items-center justify-center rounded-3xl border-solid border-dark shadow-lg dark:border-light lg:flex-col sm:rounded-2xl">
      <motion.div
        className="flex h-full w-1/4 flex-col lg:h-1/4 lg:w-full lg:flex-row lg:items-center lg:justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {tabData.map(({ title, value }, index) => (
          <div
            key={index}
            className="group flex h-1/3 w-full cursor-pointer items-center justify-center border-dark"
            onClick={() => setContent(value)}
          >
            <h2
              className={cn(
                "relative text-center font-jost text-5xl font-extralight uppercase -tracking-wider transition-colors duration-300 ease-in-out group-hover:text-dark dark:group-hover:text-light xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl",
                content === value
                  ? "text-dark dark:text-light"
                  : "text-dark/50 dark:text-light/50",
              )}
            >
              {title}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 inline-block h-[2px] bg-dark text-light transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-light dark:text-dark",
                  content === value ? "w-full" : "w-0",
                )}
              />
            </h2>
          </div>
        ))}
      </motion.div>
      <div
        className="h-full w-3/4 overflow-scroll overflow-x-hidden p-8 backdrop-blur lg:w-full lg:p-6 md:p-4"
        ref={scrollRef}
      >
        {aboutTabs.find((tab) => tab.value === content)?.content(scrollRef)}
      </div>
    </div>
  );
};

export default SwitchContent;
