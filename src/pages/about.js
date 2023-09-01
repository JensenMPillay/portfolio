import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/Animations/AnimatedText";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import SwitchContent from "@/components/About/SwitchContent";

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio JM | About</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here is an 'About Me' section."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="" direction="left">
          <AnimatedText
            className="mb-16 text-center md:mb-12 sm:mb-8"
            text="About"
          />
          <SwitchContent />
        </Layout>
      </main>
    </>
  );
};

export default about;
