import { MotionValue, motion, useMotionTemplate } from "framer-motion";

type Props = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

const MouseLightEffect = ({ mouseX, mouseY }: Props) => {
  return (
    <motion.div
      className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
      style={{
        background: useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.2), transparent 50%)`,
      }}
    ></motion.div>
  );
};

export default MouseLightEffect;
