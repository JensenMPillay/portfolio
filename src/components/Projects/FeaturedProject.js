import { GithubIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonGo from "../Buttons/ButtonGo";

const FeaturedProject = ({
  id,
  className = "",
  title,
  type,
  summary,
  img,
  link,
  github,
  handleIsInView,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const MotionLink = motion(Link);
  const variantsProjectTextContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsProjectText = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      handleIsInView(id);
    }
  }, [isInView, handleIsInView, id]);

  return (
    <div id={id} className={className} ref={ref}>
      <article className="relative flex h-full w-full flex-row items-center justify-between rounded-3xl border-solid border-dark bg-transparent p-6 shadow-lg backdrop-blur dark:border-light dark:bg-transparent lg:flex-col md:p-4 sm:rounded-2xl sm:p-3 xs:p-2">
        {/* <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]" /> */}
        <motion.div
          className="w-full cursor-not-allowed overflow-hidden rounded-lg lg:w-full"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 15,
          }}
        >
          <Image
            src={img}
            alt={title}
            className="h-auto w-full"
            // priority
            // sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw"
          />
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-3"
          variants={variantsProjectTextContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.span
            className="my-2 font-jost text-base font-normal uppercase text-dark/50 dark:text-light/50 lg:text-sm md:text-xs"
            variants={variantsProjectText}
          >
            {type}
          </motion.span>
          <motion.h2
            className="my-2 w-full text-left font-jost text-4xl font-bold uppercase -tracking-wider lg:text-2xl"
            variants={variantsProjectText}
          >
            {title}
          </motion.h2>
          <motion.p
            className="my-2 font-medium text-dark dark:text-light lg:my-1.5 md:my-1 md:text-sm"
            variants={variantsProjectText}
          >
            {summary}
          </motion.p>
          <motion.div
            className="mt-2 flex w-full items-center justify-between lg:mt-1.5 md:mt-1"
            variants={variantsProjectText}
          >
            <ButtonGo name="View" link={link} />
            <MotionLink
              href={github}
              target="_blank"
              className="mx-2 flex w-16"
              initial={{ rotate: 0 }}
              whileHover={{
                rotate: 360,
                scale: 1.2,
                transition: {
                  type: "spring",
                  damping: 10,
                  duration: 0.6,
                },
              }}
            >
              <GithubIcon className="" />
            </MotionLink>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
};

export default FeaturedProject;
