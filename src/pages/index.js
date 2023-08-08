import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/images/profile/developer-pic-1.png";
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
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "fit-content",
      transition: {
        duration: 1,
      },
    },
  };

  const variantsText = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75,
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
              className="flex w-1/2 items-center justify-center overflow-hidden md:w-full"
              initial="hidden"
              animate={controls}
              variants={variantsImage}
            >
              <Image
                src={profileImage}
                alt="ProfileImageJM"
                className="h-auto w-full lg:hidden md:flex"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              ></Image>
            </motion.div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
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
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development
                </motion.p>
                <motion.div
                  className=" mt-4 flex items-center justify-center md:mt-2"
                  variants={variantsText}
                >
                  <ButtonDownload name="Resume" link="dummy.pdf" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
