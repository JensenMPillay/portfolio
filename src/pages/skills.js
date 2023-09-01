import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import Skills from "@/components/Skills/Skills";

const skills = () => {
  return (
    <>
      <Head>
        <title>Portfolio JM | Skills</title>
        <meta
          name="description"
          content="jensen mooroongapillay portfolio developer software freelance application web react nextjs symfony javascript php mysql tailwind bootstrap"
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="" direction="top">
          <AnimatedText
            className="mb-16 text-center md:mb-12 sm:mb-8"
            text="SKILLS"
          />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default skills;
