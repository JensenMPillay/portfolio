import ParticlesBackground from "@/components/ParticlesBackground";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Jost, Quicksand } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";
import { cn } from "@/utils/utils";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

// Custom Fonts
const quicksand = Quicksand({
  subsets: ["latin-ext"],
  variable: "--font-quicksand",
});

const jost = Jost({
  subsets: ["latin-ext"],
  variable: "--font-jost",
});

function App({ Component, pageProps }: AppProps) {
  // Get Routes
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <ParticlesBackground />
      <main
        className={cn(
          "min-h-screen w-full overflow-hidden bg-gradientLightLayout font-quicksand transition-colors duration-300 ease-in-out dark:bg-gradientDarkLayout",
          quicksand.variable,
          jost.variable,
        )}
      >
        <Navbar />
        {/* Animate Exit on Transition and Waiting other animations  */}
        <AnimatePresence mode="wait">
          {/* Each Page Come Here  */}
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default appWithTranslation(App);
