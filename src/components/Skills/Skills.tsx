import { skillsSVGsProps } from "@/types";
import { useEffect, useState } from "react";
import * as skillsSVGsObject from "../Icons/SkillsIcons";
import ComponentsGrid from "./ComponentsGrid";

const Skills = () => {
  const [size, setSize] = useState<number>(0);

  // Type Import SkillsSVGs
  const skillsSVGs: skillsSVGsProps = Object.entries(skillsSVGsObject).reduce(
    (acc, [key, SkillSVG]) => {
      acc[key] = <SkillSVG />;
      return acc;
    },
    {} as skillsSVGsProps,
  );

  useEffect(() => {
    // Initialize Size Icon
    function handleResize() {
      // Viewport Size
      const viewportWidth = window.innerWidth;

      // Options
      const sizeOptions = [
        { minWidth: 1279, size: 250 },
        { minWidth: 1023, size: 225 },
        { minWidth: 767, size: 200 },
        { minWidth: 639, size: 175 },
      ];

      // Get Size
      const newSize = sizeOptions.find(
        (option) => viewportWidth >= option.minWidth,
      );

      // Set Size
      setSize(newSize ? newSize.size : 150);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div className="flex max-h-full w-full flex-row rounded-3xl border-solid border-dark bg-transparent shadow-lg dark:border-light sm:rounded-2xl">
      <div className="h-full w-full overflow-y-auto backdrop-blur">
        <ComponentsGrid skillsSVGs={skillsSVGs} size={size} />
      </div>
    </div>
  );
};

export default Skills;
