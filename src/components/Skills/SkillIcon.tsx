import {
  Variants,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent, PropsWithChildren, useEffect } from "react";
import MouseLightEffect from "./MouseLightEffect";

type Props = {
  size: number;
  name: string | null;
  variants: Variants;
};

const SkillIcon = ({
  size,
  name,
  children,
  variants,
}: PropsWithChildren<Props>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const motionX = useMotionValue(size / 4);
  const motionY = useMotionValue(size / 4);
  const x = useSpring(motionX, { damping: 10, duration: 300 });
  const y = useSpring(motionY, { damping: 10, duration: 300 });
  const rotateX = useTransform(y, [0, size / 2], [45, -45]);
  const rotateY = useTransform(x, [0, size / 2], [-45, 45]);
  const scale = useSpring(useMotionValue(1), { damping: 10, duration: 300 });

  function handleMouseMove(event: MouseEvent<HTMLLIElement | null>) {
    let containerRect = event.currentTarget.getBoundingClientRect();
    let mouseXPosition = event.clientX - containerRect.left;
    let mouseYPosition = event.clientY - containerRect.top;

    mouseX.set(mouseXPosition);
    mouseY.set(mouseYPosition);

    x.set(mouseX.get());
    y.set(mouseY.get());
  }

  function handleMouseLeave() {
    x.set(size / 4);
    y.set(size / 4);
    scale.set(1);
  }

  function handleMouseOver() {
    scale.set(1.5);
  }

  useEffect(() => {
    x.set(size / 4);
    y.set(size / 4);
    return () => {
      x.set(size / 4);
      y.set(size / 4);
    };
  }, [size, x, y]);

  return (
    <motion.li
      className="group relative flex flex-col place-items-center rounded-lg"
      style={{
        perspective: size,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      variants={variants}
    >
      <MouseLightEffect mouseX={mouseX} mouseY={mouseY} />
      <motion.div
        className="scale-100 rounded-lg bg-transparent shadow-xl"
        style={{
          width: size / 2,
          height: size / 2,
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
        }}
        animate="animate"
      >
        {children}
      </motion.div>
      <span className="opacity-1 group-hover:opacity-150 text-lg font-extralight capitalize -tracking-wide lg:text-base md:text-sm sm:text-xs">
        {name}
      </span>
    </motion.li>
  );
};

export default SkillIcon;
