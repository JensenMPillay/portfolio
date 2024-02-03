import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import { Tab } from "@/types";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const SwitchContent = () => {
  // Ref
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Tabs
  const tabs: Tab[] = [
    {
      title: "About Me",
      value: "aboutme",
      content: (scrollRef) => <AboutMe scrollRef={scrollRef} />,
    },
    {
      title: "Experience",
      value: "experience",
      content: (scrollRef) => <Experience scrollRef={scrollRef} />,
    },
    {
      title: "Education",
      value: "education",
      content: (scrollRef) => <Education scrollRef={scrollRef} />,
    },
  ];
  // Content
  const [content, setContent] =
    useState<(typeof tabs)[number]["value"]>("aboutme");

  return (
    <div className="flex h-[70vh] w-full flex-row items-center justify-center rounded-3xl border-solid border-dark shadow-lg dark:border-light lg:flex-col sm:rounded-2xl">
      <motion.div
        className="flex h-full w-1/4 flex-col lg:h-1/4 lg:w-full lg:flex-row lg:items-center lg:justify-between"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {tabs.map(({ title, value }, index) => (
          <div
            key={index}
            className="group flex h-1/3 w-full cursor-pointer items-center justify-center border-dark"
            onClick={() => setContent(value)}
          >
            <h2
              className={`relative text-center font-jost text-5xl font-extralight uppercase -tracking-wider ${
                content === value
                  ? "text-dark dark:text-light"
                  : "text-dark/50 dark:text-light/50"
              } transition-colors duration-300 ease-in-out group-hover:text-dark dark:group-hover:text-light xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl`}
            >
              {title}
              <span
                className={`absolute -bottom-0.5 left-0 inline-block h-[2px] ${
                  content === value ? "w-full" : "w-0"
                } bg-dark text-light transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-light dark:text-dark`}
              />
            </h2>
          </div>
        ))}
      </motion.div>
      <div
        className="h-full w-3/4 overflow-scroll overflow-x-hidden p-8 backdrop-blur lg:w-full lg:p-6 md:p-4"
        ref={scrollRef}
      >
        {tabs.find((tab) => tab.value === content)?.content(scrollRef)}
      </div>
    </div>
  );
};

export default SwitchContent;
