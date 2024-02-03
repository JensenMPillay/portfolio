import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Slider from "@/components/Projects/Slider";
import Head from "next/head";

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
      <main className="flex max-h-[90vh] w-full flex-col items-center text-dark dark:text-light">
        <Layout className="" direction="right">
          <AnimatedText className="" text="PROJECTS" />
          <Slider />
        </Layout>
      </main>
    </>
  );
};

export default projects;
