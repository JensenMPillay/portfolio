import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/images/profile/profile.png";
import AnimatedText from "@/components/Animations/AnimatedText";
import TransitionEffect from "@/components/Transitions/TransitionEffect";
import ButtonDownload from "@/components/Buttons/ButtonDownload";
import { motion, useAnimationControls } from "framer-motion";

export default function Home() {
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

  const variantsImage = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      // height: "fit-content",
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
  };

  const variantsText = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const controls = useAnimationControls();

  const handleAnimationComplete = () => {
    controls.start("show");
  };

  return (
    <>
      {/* Complete Head Component  */}
      <Head>
        <title>JM Portfolio | Home</title>
        <meta name="description" content="jensen mooroongapillay portfolio" />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      {/* Page Main  */}
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        {/* Layout Page  */}
        <Layout className="" direction="center">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <motion.div
              className="flex w-1/3 items-center justify-center overflow-hidden md:w-full"
              initial="hidden"
              animate={controls}
              variants={variantsImage}
            >
              <Image
                src={profileImage}
                alt="ProfileImageJM"
                className="h-48 w-48 lg:mb-4 lg:h-36 lg:w-36 md:h-24 md:w-24"
                priority
                // sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              ></Image>
            </motion.div>
            <div className="flex w-2/3 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Welcome, I'm Jensen, Software Developer"
                className="xl:!text-6xl lg:text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
                onAnimationComplete={handleAnimationComplete}
              />
              <motion.div
                initial="hidden"
                animate={controls}
                variants={variantsContainer}
              >
                <motion.p
                  className="my-4 text-lg font-medium lg:text-base md:text-sm sm:text-xs"
                  variants={variantsText}
                >
                  As a totally dedicated full-stack developer, my goal is to
                  turn ideas into innovative web applications. Explore my
                  portfolio and projects, highlighting my mastery of React.js
                  and Symfony.
                </motion.p>
                <motion.div
                  className=" mt-4 flex items-center justify-center md:mt-2"
                  variants={variantsText}
                >
                  <ButtonDownload name="Resume" link="/docs/CV_JensenM.pdf" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
