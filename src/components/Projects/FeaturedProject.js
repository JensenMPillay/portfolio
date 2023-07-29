import { GithubIcon } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ButtonGo from "../Buttons/ButtonGo";

const FeaturedProject = ({
  id,
  className,
  title,
  type,
  summary,
  img,
  link,
  github,
}) => {
  const MotionLink = motion(Link);
  return (
    <div id={id} className={className}>
      <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark lg:flex-col md:p-4 sm:rounded-2xl sm:rounded-br-xl sm:p-3 xs:p-2">
        <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <Image
            src={img}
            alt={title}
            className="w-full, h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </Link>
        <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-3">
          <span className="font-jost text-base font-normal uppercase text-dark/50 dark:text-light/50 lg:text-sm md:text-xs">
            {type}
          </span>
          <Link href={link} target="_blank" className="">
            <h2 className="my-2 w-full text-left font-jost text-4xl font-bold uppercase -tracking-wider lg:text-2xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light lg:my-1.5 md:my-1 md:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex w-full items-center justify-between lg:mt-1.5 md:mt-1">
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
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeaturedProject;
