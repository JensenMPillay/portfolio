import SwitchContent from "@/components/About/SwitchContent";
import AnimatedText from "@/components/Animations/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio JM | About</title>
        <meta
          name="description"
          content="Welcome to Jensen Mooroongapillay's portfolio. Here is an 'About Me' section."
        />
      </Head>
      {/* Transition Page Effect */}
      {/* <TransitionEffect /> */}
      <main className="flex max-h-[90vh] w-full flex-col items-center text-dark dark:text-light">
        <Layout direction="left">
          <AnimatedText className="" text="About" />
          <SwitchContent />
        </Layout>
      </main>
    </>
  );
};

export default about;
