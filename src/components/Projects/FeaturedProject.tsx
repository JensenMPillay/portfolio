import { GithubIcon } from "@/components/Icons/Icons";
import { ProjectProps } from "@/types";
import { containerVariants, textVariants } from "@/utils/variants";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButtonGo from "../Buttons/ButtonGo";

const FeaturedProject = ({
  id,
  className = "",
  title,
  tools,
  summary,
  video,
  link,
  github,
  handleIsInView,
}: ProjectProps & { handleIsInView: (projectInViewId: number) => void }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const isVideoInView = useInView(videoRef, { once: false, amount: 0.5 });

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const MotionLink = motion(Link);

  useEffect(() => {
    const videoCurrentRef = videoRef.current;
    const handleVideoLoadedMetadata = () => {
      setIsVideoLoaded(true);
    };
    videoCurrentRef?.addEventListener(
      "canplaythrough",
      handleVideoLoadedMetadata,
    );
    if (isInView) {
      handleIsInView(id);
    }
    if (isVideoInView) {
      videoCurrentRef?.play();
    } else {
      videoCurrentRef?.pause();
    }
    return () => {
      videoCurrentRef?.removeEventListener(
        "canplaythrough",
        handleVideoLoadedMetadata,
      );
    };
  }, [isInView, handleIsInView, id, isVideoInView]);

  return (
    <div id={String(id)} className={className} ref={ref}>
      <article className="relative flex h-full w-full flex-row items-center justify-between space-x-3 rounded-3xl border-solid border-dark bg-transparent p-6 shadow-lg backdrop-blur dark:border-light dark:bg-transparent md:flex-col md:justify-start md:p-4 sm:rounded-2xl sm:p-3 xs:p-2">
        {/* <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]" /> */}
        <motion.div
          className="flex w-full cursor-not-allowed items-center justify-center overflow-hidden rounded-lg md:w-full"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: isVideoLoaded ? 1 : 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* <Image
            src={img}
            alt={title}
            className="h-auto w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          /> */}
          <video className="h-auto w-full" muted loop ref={videoRef}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          className="flex w-full flex-col items-start justify-between md:w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            className="my-2 flex h-1/5 w-full flex-row flex-wrap"
            variants={textVariants}
          >
            {tools.map((tool, index) => (
              <h6
                className="mx-1 font-jost text-base font-normal uppercase text-dark/50 dark:text-light/50 lg:text-sm md:text-xs"
                key={index}
              >
                {tool}
              </h6>
            ))}
          </motion.div>
          <motion.h2
            className="my-2 w-full text-left font-jost text-4xl font-bold uppercase -tracking-wider lg:text-2xl"
            variants={textVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="my-2 font-medium text-dark dark:text-light lg:my-1.5 md:my-1 md:text-xs"
            variants={textVariants}
          >
            {summary}
          </motion.p>
          <motion.div
            className="mt-2 flex w-full items-center justify-between lg:mt-1.5 md:mt-1"
            variants={textVariants}
          >
            {link && <ButtonGo title="View" href={link} />}
            {github && (
              <MotionLink
                href={github}
                target="_blank"
                className="mx-2 flex w-16"
                initial={{ rotate: 0 }}
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  transition: {
                    type: "spring",
                    damping: 10,
                    duration: 0.6,
                  },
                }}
              >
                <GithubIcon />
              </MotionLink>
            )}
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
};

export default FeaturedProject;
