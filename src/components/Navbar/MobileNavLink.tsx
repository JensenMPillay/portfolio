import { LinkProps } from "@/@types/types";
import { cn } from "@/utils/utils";
import { useRouter } from "next/router";

type Props = {
  toggle: () => void;
};

const MobileNavLink = ({ href, title, toggle }: Props & LinkProps) => {
  // Get Actual Route for Highlight
  const router = useRouter();

  const routerPath = useRouter().asPath;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className="group relative font-jost text-7xl font-light uppercase -tracking-widest text-light transition-all duration-300 ease-in-out hover:-tracking-wider dark:text-dark lg:text-6xl md:text-5xl sm:text-4xl xs:text-2xl"
      onClick={handleClick}
    >
      {title}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 inline-block h-[6px] bg-light transition-[width] duration-300 ease-in-out group-hover:w-full dark:bg-dark lg:h-[5px] md:h-[4px] sm:h-[3px] xs:h-[2px]",
          routerPath === href ? "w-full" : "w-0",
        )}
      />
    </button>
  );
};

export default MobileNavLink;
