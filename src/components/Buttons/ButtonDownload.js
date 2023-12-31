import Link from "next/link";
import React from "react";

const ButtonDownload = ({ name, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative flex items-center px-20 py-4 text-lg font-semibold uppercase
       md:text-base sm:text-sm"
      download
    >
      <span className="absolute left-0 top-1/2 flex h-full w-1/4 -translate-y-1/2 rounded-full bg-dark transition-all duration-300 ease-in-out group-hover:w-full dark:bg-light"></span>
      <span className="absolute left-0 top-1/2 flex h-full w-1/4 -translate-y-1/2 flex-row items-center justify-center transition-all duration-300 ease-in-out group-hover:w-2/5">
        <span className="flex min-h-[0.5rem] min-w-[1.5rem]  transform overflow-hidden rounded-xl bg-light opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:bg-dark"></span>
        <div className="flex h-full -translate-x-3 flex-col items-center justify-center">
          <span className="min-h-[0.5rem] min-w-[1rem] rotate-45 transform overflow-hidden rounded-xl bg-light dark:bg-dark"></span>
          <span className="min-h-[0.5rem] min-w-[1rem] -rotate-45 transform overflow-hidden rounded-xl bg-light dark:bg-dark"></span>
        </div>
      </span>
      <span className="z-10 text-dark transition-all duration-300 ease-in-out group-hover:text-light dark:text-light dark:group-hover:text-dark">
        {name}
      </span>
    </Link>
  );
};

export default ButtonDownload;
