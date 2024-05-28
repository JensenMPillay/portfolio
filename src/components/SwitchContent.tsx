import { SwitchContentProps } from "@/@types/types";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const SwitchContent = ({ data, contents }: SwitchContentProps) => {
  // Content
  const [content, setContent] = useState<string>(data[0].value);

  return (
    <div className="w-full flex-col items-center justify-center rounded-3xl border-solid border-dark bg-transparent/20 py-4 shadow-lg dark:border-light dark:bg-transparent/20 sm:rounded-2xl">
      <motion.div
        className="flex flex-row"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {data.map(({ title, value }, index) => (
          <div
            key={index}
            className="group flex w-1/3  cursor-pointer items-center justify-center border-dark"
            onClick={() => setContent(value)}
          >
            <h2
              className={cn(
                "relative origin-center overflow-hidden text-ellipsis text-center font-jost text-5xl font-extralight uppercase -tracking-wider transition-colors duration-300 ease-in-out group-hover:text-dark dark:group-hover:text-light xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl",
                content === value
                  ? "text-dark dark:text-light"
                  : "text-dark/50 dark:text-light/50",
              )}
            >
              {title}
              <span
                className={cn(
                  "absolute bottom-0 left-0 inline-block h-[2px] w-full origin-center scale-x-0 transform bg-dark transition-transform duration-300 ease-in-out group-hover:scale-x-100 dark:bg-light",
                  content === value ? "scale-x-100" : "scale-x-0",
                )}
              />
            </h2>
          </div>
        ))}
      </motion.div>
      <div className="flex-1 p-8 backdrop-blur lg:p-6 md:p-4">
        {contents.find((tab) => tab.value === content)?.content()}
      </div>
    </div>
  );
};

export default SwitchContent;
