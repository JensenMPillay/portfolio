import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full p-32 pt-0 transition-colors duration-300 ease-in-out xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
