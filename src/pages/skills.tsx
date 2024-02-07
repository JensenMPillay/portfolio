import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import SkillsGrid from "@/components/Skills/SkillsGrid";
import { getTitlePage } from "@/utils/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Skills() {
  // Content
  const { t } = useTranslation("common");

  const titlePage = t("titles.projects");

  return (
    <>
      <Head>
        <title>{getTitlePage(titlePage)}</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here you will find my skills like Javascript, PHP, React, NextJS, Symfony, Tailwind, Bootstrap, MySQL & Others."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex max-h-[90vh] w-full flex-col items-center overflow-y-auto text-dark dark:text-light">
        <Layout className="" direction="top">
          <AnimatedText className="" text={titlePage} />
          <SkillsGrid />
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "skills"])),
  },
});
