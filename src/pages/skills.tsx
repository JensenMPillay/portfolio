import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills/Skills";
import navTabData from "@/data/navTabData";
import Head from "next/head";

const skills = () => {
  return (
    <>
      <Head>
        <title>Portfolio JM | Skills</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here you will find my skills like Javascript, PHP, React, NextJS, Symfony, Tailwind, Bootstrap, MySQL & Others."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex max-h-[90vh] w-full flex-col items-center overflow-y-auto text-dark dark:text-light">
        <Layout className="" direction="top">
          <AnimatedText className="" text={navTabData[0].title} />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default skills;
