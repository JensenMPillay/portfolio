import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    // Footer
    <footer className="relative bg-transparent text-lg font-medium dark:bg-transparent md:text-base sm:text-sm">
      <Layout className="flex items-center justify-between !py-8 font-jost font-extralight text-dark dark:text-light lg:flex-col lg:!py-6">
        <Link href="/">Build By JM</Link>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      </Layout>
    </footer>
  );
};

export default Footer;
