import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import projectsData from "@/data/projectsData";
import FeaturedProject from "@/components/Projects/FeaturedProject";

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
