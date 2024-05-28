import { ProjectProps } from "@/@types/types";
import { cn } from "@/utils/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "next-i18next";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import IndicatorIcon from "../IndicatorIcon";
import FeaturedProject from "./FeaturedProject";

const Slider = ({ children }: PropsWithChildren) => {
  // Content
  const { t } = useTranslation("projects");

  const projectsData: ProjectProps[] = t("projectsData", {
    returnObjects: true,
  });

  // Slider Config
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dragFieldRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [offset, setOffset] = useState(0);
  const [dragWidth, setDragWidth] = useState(0);

  const [projectInView, setProjectInView] = useState(0);
  const [projectsLength, setProjectsLength] = useState(0);

  const handleIsInView = (projectInViewId: number) => {
    setProjectInView(projectInViewId);
  };

  const x = useSpring(useMotionValue(1), { damping: 10, duration: 300 });
  const scaleX = useTransform(x, [0, projectsLength], [0, 1]);

  useEffect(() => {
    const updateOffset = () => {
      const clientRect = wrapperRef.current?.getBoundingClientRect();
      const offSetWidth = contentRef.current?.scrollWidth ?? +64;
      const offset = offSetWidth - 16;
      const newOffset = clientRect ? offset - clientRect?.width : offset;

      setOffset(newOffset);
      setDragWidth(offSetWidth);
    };
    updateOffset();

    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  useEffect(() => {
    setProjectsLength(projectsData.length);
  }, [projectsData.length]);

  useEffect(() => {
    x.set(projectInView);
  }, [x, projectInView]);

  return (
    <div className="relative flex h-full w-full flex-col items-center">
      <div
        ref={dragFieldRef}
        className="pointer-events-none absolute left-0 top-0 h-full"
        style={{
          left: `-${offset}px`,
          width: `${dragWidth}px`,
        }}
      />
      <div
        ref={wrapperRef}
        className="relative mx-1 h-full w-full overflow-hidden"
      >
        <motion.div
          ref={contentRef}
          className="relative flex gap-6"
          drag={offset > 0 ? "x" : undefined}
          dragConstraints={dragFieldRef}
        >
          {projectsData.map(
            ({ id, className, title, tools, summary, video, link, github }) => {
              return (
                <FeaturedProject
                  id={id}
                  key={id}
                  className={cn(`m-2 min-w-fit cursor-grab`, className)}
                  title={title}
                  tools={tools}
                  summary={summary}
                  video={video}
                  link={link}
                  github={github}
                  handleIsInView={handleIsInView}
                />
              );
            },
          )}
          {/* Drag Navigation Behavior  */}
          <div className="h-auto w-60 p-60 xl:w-48 xl:p-48 lg:w-32 lg:p-32 md:w-24 md:p-24"></div>
        </motion.div>
      </div>
      <IndicatorIcon scale={scaleX} />
    </div>
  );
};

export default Slider;
