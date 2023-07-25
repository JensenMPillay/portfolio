import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/Animations/AnimatedText";
import Image from "next/image";
import AboutImage from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/About/Skills";
import Experience from "@/components/About/Experience";
import Education from "@/components/About/Education";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import AnimatedNumbers from "@/components/Animations/AnimatedNumbers";

const about = () => {
  return (
    <>
      <Head>
        <title>JM Portfolio | About</title>
        <meta
          name="description"
          content="jensen mooroongapillay portfolio about"
        />
      </Head>
      {/* Transition Page Effect */}
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 text-center md:mb-12 sm:mb-8"
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 font-jost text-lg font-extralight uppercase text-dark/75 dark:text-light/75 md:self-center">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                client&apos;s visions to life.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty - it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={AboutImage}
                alt="AboutImage"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
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
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
