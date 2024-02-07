import SwitchContent from "@/components/About/SwitchContent";
import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import { getTitlePage } from "@/utils/utils";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function About() {
  // Content
  const { t } = useTranslation("common");

  const titlePage = t("titles.about");

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
      <main className="flex max-h-[90vh] w-full flex-col items-center text-dark dark:text-light">
        <Layout direction="left">
          <AnimatedText className="" text={titlePage} />
          <SwitchContent />
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "about"])),
  },
});
