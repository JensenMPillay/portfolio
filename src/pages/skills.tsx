import { TabProps } from "@/@types/types";
import AnimatedText from "@/components/Animations/AnimatedText";
import {
  AdobeXD,
  Bootstrap,
  Docker,
  Figma,
  Flask,
  FramerMotion,
  Github,
  GraphQL,
  Javascript,
  MySQL,
  NextJS,
  NodeJS,
  PHP,
  PostgreSQL,
  Prestashop,
  Prisma,
  Python,
  ReactJS,
  Stripe,
  Symfony,
  TailwindCSS,
  Typescript,
} from "@/components/Icons/SkillsIcons";
import Layout from "@/components/Layout";
import SkillsGrid from "@/components/Skills/SkillsGrid";
import SwitchContent from "@/components/SwitchContent";
import { getTitlePage } from "@/utils/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Skills() {
  // Content
  const { t } = useTranslation("common");

  const titlePage = t("titles.skills");

  // Content
  const { t: trad } = useTranslation("skills");

  const tabsData: Omit<TabProps, "content">[] = trad("tabsData", {
    returnObjects: true,
  });

  const languagesSVGs = [
    <Javascript key="javascript" />,
    <PHP key="php" />,
    <Python key="python" />,
    <Typescript key="typescript" />,
  ];

  const frameworksSVGs = [
    <Flask key="flask" />,
    <NextJS key="nextjs" />,
    <NodeJS key="nodejs" />,
    <ReactJS key="reactjs" />,
    <Symfony key="symfony" />,
  ];

  const toolsSVGs = [
    <AdobeXD key="adobexd" />,
    <Bootstrap key="bootstrap" />,
    <Docker key="docker" />,
    <Figma key="figma" />,
    <FramerMotion key="framermotion" />,
    <Github key="github" />,
    <GraphQL key="graphql" />,
    <MySQL key="mysql" />,
    <PostgreSQL key="postgresql" />,
    <Prestashop key="prestashop" />,
    <Prisma key="prisma" />,
    <Stripe key="stripe" />,
    <TailwindCSS key="tailwindcss" />,
  ];

  // Tabs
  const tabsContent: Omit<TabProps, "title">[] = [
    {
      value: "languages",
      content: () => <SkillsGrid skillsSVGs={languagesSVGs} />,
    },
    {
      value: "frameworks",
      content: () => <SkillsGrid skillsSVGs={frameworksSVGs} />,
    },
    {
      value: "tools",
      content: () => <SkillsGrid skillsSVGs={toolsSVGs} />,
    },
  ];

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
      <Layout className="" direction="top">
        <AnimatedText className="" text={titlePage} />
        <SwitchContent data={tabsData} contents={tabsContent} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "skills"])),
  },
});
