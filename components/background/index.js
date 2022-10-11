import { useEffect } from "react";
import styled from "styled-components";
import initializedCanvas from "./canvas";

const Canvas = styled.canvas`
  opacity: 0.8;
  position: fixed;
  top: 0;
  z-index: -100000;
`;

export default function Background() {
  useEffect(() => {
    initializedCanvas();
  }, []);
  return <Canvas></Canvas>;
}
