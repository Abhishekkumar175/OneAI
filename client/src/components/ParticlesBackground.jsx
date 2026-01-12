import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 80 },
          color: { value: "#8b5cf6" },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "bottom", 
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}
