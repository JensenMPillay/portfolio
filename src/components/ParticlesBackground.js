import particlesConfig from "@/config/particlesConfig";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    scrollTo(0, 0);
    await console.log(container);
  }, []);

  return (
    <Particles
      options={particlesConfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
export default ParticlesBackground;
