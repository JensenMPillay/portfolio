import particlesConfig from "@/config/particlesConfig";
import { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

const ParticlesBackground = () => {
  const [initParticles, setInitParticles] = useState<boolean>(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInitParticles(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      scrollTo(0, 0);
      // await console.log(container);
    },
    [],
  );

  const options = useMemo(() => particlesConfig, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 5 }}
    >
      <Particles
        options={options}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
      />
    </motion.div>
  );
};
export default ParticlesBackground;
