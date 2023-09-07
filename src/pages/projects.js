import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import Slider from "@/components/Projects/Slider";

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio JM | Projects</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here you will find my projects in ReactJS, NextJS, PHP, Symfony, Tailwind, Bootstrap, MySQL & Others."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="" direction="right">
          <AnimatedText
            className="mb-16 text-center md:mb-12 sm:mb-8"
            text="PROJECTS"
          />
          <Slider />
        </Layout>
      </main>
    </>
  );
};

export default projects;
