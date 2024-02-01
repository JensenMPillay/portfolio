import { useEffect, useState } from "react";
import * as skillsSVGs from "../Icons/SkillsIcons";
import ComponentsGrid from "./ComponentsGrid";

const Skills = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Initialize Values
    function handleResize() {
      if (window.matchMedia("(min-width: 1279px)").matches) {
        setSize(250);
      } else if (window.matchMedia("(min-width: 1023px)").matches) {
        setSize(225);
      } else if (window.matchMedia("(min-width: 767px)").matches) {
        setSize(175);
      } else if (window.matchMedia("(min-width: 639px)").matches) {
        setSize(125);
      } else {
        setSize(150);
      }
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
