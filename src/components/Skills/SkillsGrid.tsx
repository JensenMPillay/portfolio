import { useEffect, useState } from "react";
import ComponentsGrid from "./ComponentsGrid";

const SkillsGrid = ({ skillsSVGs }: { skillsSVGs: JSX.Element[] }) => {
  const [size, setSize] = useState<number>(0);

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

  return <ComponentsGrid skillsSVGs={skillsSVGs} size={size} />;
};

export default SkillsGrid;
