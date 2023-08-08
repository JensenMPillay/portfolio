import "@/styles/globals.css";
import { Quicksand, Jost } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ParticlesBackground from "@/components/ParticlesBackground";

// Custom Fonts
const quicksand = Quicksand({
  subsets: ["latin-ext"],
  variable: "--font-quicksand",
});

const jost = Jost({
  subsets: ["latin-ext"],
  variable: "--font-jost",
});

export default function App({ Component, pageProps }) {
  // Get Routes
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground />
      <main
        className={`${quicksand.variable} ${jost.variable} min-h-screen w-full overflow-hidden bg-gradientLightLayout font-quicksand transition-colors duration-300 ease-in-out dark:bg-gradientDarkLayout`}
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
