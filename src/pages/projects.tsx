import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Slider from "@/components/Projects/Slider";
import { getTitlePage } from "@/utils/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Projects() {
  // Content
  const { t } = useTranslation("common");

  const titlePage = t("titles.projects");

  return (
    <>
      <Head>
        <title>{getTitlePage(titlePage)}</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here you will find my projects in ReactJS, NextJS, PHP, Symfony, Tailwind, Bootstrap, MySQL & Others."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <Layout className="place-self-center" direction="right">
        <AnimatedText className="" text={titlePage} />
        <Slider />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "projects"])),
  },
});
