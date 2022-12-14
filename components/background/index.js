import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import initializedCanvas from "./canvas";

const Canvas = styled(motion.canvas)`
  opacity: 1;
  position: fixed;
  top: 0;
  z-index: -100000;
  background: ${(p) => p.theme.bg};
  transition: all 0.3s ease-in-out;
`;

export default function Background() {
  useEffect(() => {
    initializedCanvas();
  }, []);
  return (
    <Canvas
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
    ></Canvas>
  );
}
