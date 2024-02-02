import { useEffect, useState } from "react";
import * as skillsSVGs from "../Icons/SkillsIcons";
import ComponentsGrid from "./ComponentsGrid";

const Skills = () => {
  const [size, setSize] = useState(0);

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
    <div className="flex h-[75vh] w-full flex-row rounded-3xl border-solid border-dark bg-transparent shadow-lg dark:border-light sm:rounded-2xl">
      <div className="h-full w-full overflow-y-auto backdrop-blur">
        <ComponentsGrid skillsSVGs={skillsSVGs} size={size} />
      </div>
    </div>
  );
};

export default Skills;
