import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/Animations/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons/Icons";
import TransitionEffect from "@/components/Transitions/TransitionEffect";

export default function Home() {
  return (
    <>
      {/* Complete Head Component  */}
      <Head>
        <title>JM Portfolio | Home</title>
        <meta name="description" content="jensen mooroongapillay portfolio" />
      </Head>
      {/* Transition Page Effect */}
      <TransitionEffect />
      {/* Page Main  */}
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        {/* Layout Page  */}
        <Layout className="">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profileImage}
                alt="ProfileImageJM"
                className="h-auto w-full lg:hidden md:inline-block"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              ></Image>
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="xl:!text-6xl lg:text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-lg font-medium lg:text-base md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
              <div className=" mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="../../public/dummy.pdf"
                  target="_blank"
                  className="btn btn-primary group"
                  download={false}
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-dark transition-all duration-300 ease-in-out group-hover:w-full dark:bg-light" />
                  <span className="relative z-10 flex flex-row">
                    Resume
                    <LinkArrow className={"ml-1 w-6"} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
