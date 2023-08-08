import React, { useEffect } from "react";
import AnimatedNumbers from "../Animations/AnimatedNumbers";
import AboutImage from "../../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = ({ scrollRef }) => {
  const variantsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const variantsText = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [scrollRef]);
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <motion.div
        className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
        initial="hidden"
        whileInView="show"
        variants={variantsContainer}
      >
        <motion.h2
          className="mb-4 font-jost text-lg font-extralight uppercase text-dark/75 dark:text-light/75 md:self-center"
          variants={variantsContainer}
        >
          About Me
        </motion.h2>
        <motion.p className="font-medium" variants={variantsContainer}>
          Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
          passion for creating beautiful, functional, and user-centered digital
          experiences. With 4 years of experience in the field. I am always
          looking for new and innovative ways to bring my client&apos;s visions
          to life.
        </motion.p>

        <motion.p className="my-4 font-medium" variants={variantsContainer}>
          I believe that design is about more than just making things look
          pretty - it&apos;s about solving problems and creating intuitive,
          enjoyable experiences for users.
        </motion.p>

        <motion.p className="font-medium" variants={variantsContainer}>
          Whether I&apos;m working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </motion.p>
      </motion.div>
      <motion.div
        className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-transparent p-8 dark:border-light dark:bg-transparent xl:col-span-4 md:order-1 md:col-span-8"
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
        {/* <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" /> */}
        <Image
          src={AboutImage}
          alt="AboutImage"
          className="h-auto w-full rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </motion.div>
      <motion.div
        className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-end justify-center xl:items-center ">
          <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
            <AnimatedNumbers value={50} />+
          </span>
          <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
            Satisfied Clients
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center ">
          <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
            <AnimatedNumbers value={40} />+
          </span>
          <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
            Projects Completed
          </h2>
        </div>
        <div className="flex flex-col items-end justify-center xl:items-center">
          <span className="inline-block font-jost text-7xl font-extralight lg:text-6xl md:text-5xl sm:text-4xl">
            <AnimatedNumbers value={4} />+
          </span>
          <h2 className="font-jost text-lg font-medium uppercase text-dark/75 dark:text-light/75 md:text-base">
            Years Of Experience
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
