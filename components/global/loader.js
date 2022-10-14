import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const colors = ["#0DAEBF", "#7D80E8", "#E83869", "#56E89D"];
const CircleAnimation = keyframes`
0%{
    top:60px;
    height:5px;
    border-radius: 50px 50px 15px 15px;
    transform: scaleX(1.7);
}
40%{
    height:20px;
    border-radius: 50%;
    transform: scaleX(1);
}
100%{
    top:0%;
}`;

const ShadowAnimation = keyframes`
0%{
    transform: scaleX(1.5);
}
40%{
    transform: scaleX(1);
    opacity: .7;
}
100%{
    transform: scaleX(.2);
    opacity: .4;
}
`;

const FullScreenWrapper = styled(motion.div)`
  height: calc(100vh - 70px);
  width: 100%;
  position: relative;
`;

const LoaderWrapper = styled(motion.div)`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled(motion.div)`
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
  position: absolute;
  border-radius: 50%;
  background-color: ${colors[0]};
  left: 15%;
  transform-origin: 50%;
  animation-name: ${CircleAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;
  &:nth-child(2) {
    background-color: ${colors[1]};
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    background-color: ${colors[2]};
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

const Shadow = styled(motion.div)`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;
  animation-name: ${ShadowAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;
  &:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }
  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;

let circle = {
  initial: {
    opacity: 0,
    scale: 0.1,
  },
  animate: {
    opacity: 1,
    scale: 1.5,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

export default function Loader() {
  return (
    <FullScreenWrapper>
      <LoaderWrapper>
        <Circle
          variants={circle}
          initial="initial"
          animate="animate"
          exit="exit"
        ></Circle>
        <Circle
          variants={circle}
          initial="initial"
          animate="animate"
          exit="exit"
        ></Circle>
        <Circle
          variants={circle}
          initial="initial"
          animate="animate"
          exit="exit"
        ></Circle>
        <Shadow></Shadow>
        <Shadow></Shadow>
        <Shadow></Shadow>
      </LoaderWrapper>
    </FullScreenWrapper>
  );
}
