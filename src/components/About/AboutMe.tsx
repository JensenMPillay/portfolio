import { AboutMeProps } from "@/@types/types";
import { containerVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import AnimatedNumbers from "../Animations/AnimatedNumbers";

const AboutMe = () => {
  // Content
  const { t } = useTranslation("about");

  const { title, paragraphs, aside }: AboutMeProps = t("aboutmeData", {
    returnObjects: true,
  });

  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <motion.div
        className="col-span-6 flex flex-col items-start justify-start xl:col-span-8 md:order-2 md:col-span-8"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
      >
        <motion.h2
          className="mb-4 font-jost text-lg font-extralight uppercase text-dark/75 dark:text-light/75 md:self-center"
          variants={containerVariants}
        >
          {title}
        </motion.h2>
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="my-2 font-medium"
            variants={containerVariants}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </motion.div>
      <motion.div
        className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {aside.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-end justify-center xl:items-center "
          >
            <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
              <AnimatedNumbers
                value={
                  info.key === "experience"
                    ? new Date().getFullYear() - 2020
                    : info.value
                }
              />
              +
            </span>
            <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
              {info.title}
            </h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
