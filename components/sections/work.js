import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { HeadingSecondary } from "../global/heading";
import { wrapper } from "./globalStyles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useScrollAnimation from "./useScrollAnimation";
import { sectionVariant } from "./globalVariants";

const WorkContainer = styled(motion.section)`
  ${wrapper}
  margin-top:50px;
`;
const Paragraph = styled.p`
  font-size: 18px;
  color: ${(p) => p.theme.lc};
  line-height: 1.7;
  span {
    font-weight: bold;
  }
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 468px) {
    font-size: 15px;
  }
`;

export default function Work() {
  let [ref, control] = useScrollAnimation();

  return (
    <WorkContainer
      variants={sectionVariant}
      ref={ref}
      initial="hidden"
      animate={control}
    >
      <HeadingSecondary>Work</HeadingSecondary>
      <Paragraph>
        I am a junior full-stack developer with a passion for building digital
        stuff. I have a knack to solve a real-life problems with code. I am
        currently studying at a university, learning computer science. Whenever
        i get a free time i spend it by learning or making something in web.
        <span>
          So far i have been making projects for fun or the purpose of my
          university syllabus.{" "}
        </span>
      </Paragraph>
    </WorkContainer>
  );
}
