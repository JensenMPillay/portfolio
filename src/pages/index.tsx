import AnimatedText from "@/components/Animations/AnimatedText";
import ButtonDownload from "@/components/Buttons/ButtonDownload";
import Layout from "@/components/Layout";
import { getTitlePage } from "@/utils/utils";
import {
  AnimationDefinition,
  Variants,
  motion,
  useAnimationControls,
} from "framer-motion";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import profileImage from "../../public/images/profile/profile.png";

export default function Home() {
  // Content
  const { t: c } = useTranslation("common");

  const titlePage = c("titles.home");

  const buttonName = c("buttons.resume");

  const { t } = useTranslation("index");

  const { title, paragraphs } = t("indexData", { returnObjects: true });

  // Variants
  const variantsImage: Variants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      // height: "fit-content",
      scale: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 15,
      },
    },
  };

  const variantsContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Animation
  const controls = useAnimationControls();

  const handleAnimationComplete = (definition: AnimationDefinition) => {
    controls.start("show");
  };

  return (
    <>
      {/* Complete Head Component  */}
      <Head>
        <title>{getTitlePage(titlePage)}</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. I'm a full-stack software developer with expertise in web applications."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      {/* Layout Page  */}
      <Layout className="self-center" direction="center">
        <div className="flex w-full items-center justify-between lg:flex-col">
          <motion.div
            className="flex w-1/3 items-center justify-center md:w-full"
            initial="hidden"
            animate={controls}
            variants={variantsImage}
          >
            <Image
              src={profileImage}
              alt="ProfileImageJM"
              className="h-48 w-48 rounded-full bg-dark/50 dark:bg-light/50 lg:mb-4 lg:h-36 lg:w-36 md:h-24 md:w-24"
              placeholder="blur"
              blurDataURL={"/images/profile/profile.png"}
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
            ></Image>
          </motion.div>
          <div className="flex w-2/3 flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text={title}
              className="mb-0 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl"
              onAnimationComplete={handleAnimationComplete}
            />
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variantsContainer}
            >
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="my-4 text-balance text-lg font-medium text-dark/70 dark:text-light/70 lg:text-base md:text-sm sm:text-xs"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <motion.div className=" mt-4 flex items-center justify-center md:mt-2">
                <ButtonDownload
                  title={buttonName}
                  href="/docs/CV_JensenM.pdf"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "index"])),
  },
});
