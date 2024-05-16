import { TabProps } from "@/@types/types";
import AboutMe from "@/components/About/AboutMe";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import SwitchContent from "@/components/SwitchContent";
import { getTitlePage } from "@/utils/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function About() {
  // Content
  const { t } = useTranslation("common");

  const titlePage = t("titles.about");

  // Content
  const { t: trad } = useTranslation("about");

  const tabsData: Omit<TabProps, "content">[] = trad("tabsData", {
    returnObjects: true,
  });

  // Tabs
  const tabsContent: Omit<TabProps, "title">[] = [
    {
      value: "aboutme",
      content: (scrollRef) => <AboutMe scrollRef={scrollRef} />,
    },
    {
      value: "experience",
      content: (scrollRef) => <Experience scrollRef={scrollRef} />,
    },
    {
      value: "education",
      content: (scrollRef) => <Education scrollRef={scrollRef} />,
    },
  ];

  return (
    <>
      <Head>
        <title>{getTitlePage(titlePage)}</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here is an 'About Me' section."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <Layout direction="left">
        <AnimatedText className="" text={titlePage} />
        <SwitchContent data={tabsData} contents={tabsContent} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "about"])),
  },
});
