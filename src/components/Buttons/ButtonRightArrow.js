import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonRightArrow = ({ name, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={link}
      target="_blank"
      className="btn btn-primary group mr-2"
      //   ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-dark transition-all duration-300 ease-in-out group-hover:w-full dark:bg-light">
        <span className="flex h-full w-0 items-center justify-center bg-dark transition-all duration-300 ease-in-out group-hover:w-full dark:bg-light">
          {isHovered && (
            <>
              <motion.span
                className="min-h-[0.5rem] min-w-[40%] rounded-xl bg-light dark:bg-dark"
                initial={{ x: -25 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1 }}
              ></motion.span>
              <span className="flex h-auto w-auto -translate-x-1.5 flex-col items-center justify-center">
                <motion.span
                  className="min-h-[0.5rem] min-w-[1rem] rotate-45 transform rounded-xl bg-light dark:bg-dark"
                  initial={{ x: -25, rotate: 0, translateY: 3 }}
                  animate={{ x: 0, rotate: 45, translateY: 0 }}
                  transition={{ type: "spring", duration: 1 }}
                ></motion.span>
                <motion.span
                  className="min-h-[0.5rem] min-w-[1rem] -rotate-45 transform rounded-xl bg-light dark:bg-dark"
                  initial={{ x: -25, rotate: 0, translateY: -3 }}
                  animate={{ x: 0, rotate: -45, translateY: 0 }}
                  transition={{ type: "spring", duration: 1 }}
                ></motion.span>
              </span>
            </>
          )}
        </span>
      </span>
      <span className="relative flex h-full w-full flex-row transition-all duration-300 ease-out group-hover:opacity-0">
        {name}
      </span>
    </Link>
  );
};

export default ButtonRightArrow;
