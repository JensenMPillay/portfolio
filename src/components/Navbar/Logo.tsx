import { SVGProps } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const LogoSvg = ({ className }: SVGProps) => {
  const logo = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="75%"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
      xmlSpace="preserve"
      className={className}
    >
      <motion.path
        fill="none"
        opacity="1.000000"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="25"
        variants={logo}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 1 }}
        // exit="hidden"
        d="M17.000000,46.500000 
	      C18.333334,46.666668 19.867727,46.469280 20.959953,47.072510 
	      C23.583698,48.521572 26.038889,48.700817 28.486769,46.981167 
	      C30.211176,45.769760 32.114094,46.005733 34.000000,46.005554 
	      C104.333336,45.998966 174.666672,45.997910 245.000000,46.003910 
	      C250.712112,46.004398 251.488785,46.744282 251.490341,52.500004 
	      C251.506149,111.000000 251.500000,169.500000 251.500000,228.000000 
	      C251.500000,264.166656 251.475647,300.333374 251.506821,336.500000 
	      C251.538513,373.271515 238.360397,404.320984 210.949570,428.943848 
	      C195.926300,442.439148 178.303009,452.007263 158.460358,455.258026 
	      C118.298317,461.837708 82.147537,453.279510 52.446419,423.553528 
	      C38.725956,409.821625 28.940174,393.851776 23.048019,375.484589 
	      C18.992613,362.842957 17.452280,349.765289 17.500000,336.500000"
      />
      <motion.path
        fill="none"
        opacity="1.000000"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="25"
        variants={logo}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 1.2 }}
        // exit="hidden"
        d="M482.500000,51.500000 
	      C484.509735,54.017315 484.520691,56.972004 484.520142,60.000004 
	      C484.496765,190.666672 484.499084,321.333344 484.510376,452.000000 
	      C484.510529,453.666656 484.666656,455.333344 484.750000,457.000000"
      />
      <motion.path
        fill="none"
        opacity="1.000000"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="25"
        variants={logo}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.6 }}
        // exit="hidden"
        d="M485.000000,41.500000 
	      C485.030945,46.360416 483.710175,49.521641 478.670563,52.308449 
	      C471.178894,56.451202 464.783630,62.604385 458.009796,68.012283 
	      C441.146667,81.474976 424.282104,94.936745 407.514496,108.517883 
	      C390.948151,121.935989 374.557312,135.570816 357.984711,148.981110 
	      C339.551514,163.897003 320.955780,178.611969 302.514984,193.518524 
	      C289.437653,204.089523 276.372375,214.682816 263.548920,225.557678 
	      C256.119995,231.857742 248.891998,233.767746 239.364212,225.659561 
	      C221.671310,210.602844 203.078186,196.609177 185.021835,181.973053 
	      C161.099884,162.582397 137.413467,142.901016 113.478714,123.526291 
	      C86.571281,101.745270 59.453327,80.224220 32.565357,58.419407 
	      C29.563635,55.985157 25.774893,53.683414 25.500000,49.000000"
      />
    </svg>
  );
};

const Logo = () => {
  return (
    <MotionLink
      href="/"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-extrabold text-light transition-colors duration-300 ease-in-out hover:border-dark hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light lg:h-10 lg:w-10 md:h-9 md:w-9 sm:h-8 sm:w-8"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1, delay: 0.6 },
      }}
    >
      <LogoSvg />
    </MotionLink>
    // </div>
  );
};

export default Logo;
