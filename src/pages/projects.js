import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgCrypto from "../../public/images/projects/crypto-screener-cover-image.jpg";
import ImgFolio from "../../public/images/projects/portfolio-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const projectsData = [
  {
    id: 1,
    className: "col-span-12",
    title: "Crypto Screener Application",
    type: "Featured Project",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    img: ImgCrypto,
    link: "/",
    github: "/",
  },
  {
    id: 2,
    className: "col-span-12",
    title: "React Portfolio Website",
    type: "Featured Project",
    summary:
      "A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.",
    img: ImgFolio,
    link: "/",
    github: "/",
  },
];

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
          <Link
            href={link}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left font-jost text-4xl font-bold uppercase lg:text-2xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light lg:my-1.5 md:my-1 md:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex w-full items-center justify-between lg:mt-1.5 md:mt-1">
            <Link
              href={link}
              target="_blank"
              className="btn btn-primary group mr-2"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-dark transition-all duration-300 ease-in-out group-hover:w-full dark:bg-light" />
              <span className="relative z-10 flex flex-row">Go</span>
            </Link>
            <Link
              href={github}
              target="_blank"
              className="mx-2 flex w-16 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90"
            >
              <GithubIcon className="" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>JM Portfolio | About</title>
        <meta
          name="description"
          content="jensen mooroongapillay portfolio projects"
        />
      </Head>
      {/* Transition Page Effect */}
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="bg-gradientLightLayout pt-16 dark:bg-gradientDarkLayout">
          <AnimatedText
            className="mb-16 text-center md:mb-12 sm:mb-8"
            text="Imagination Trumps Knowledge!"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projectsData.map(
              ({ id, className, title, type, summary, img, link, github }) => {
                return (
                  <FeaturedProject
                    id={id}
                    key={id}
                    className={className}
                    title={title}
                    type={type}
                    summary={summary}
                    img={img}
                    link={link}
                    github={github}
                  />
                );
              },
            )}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
