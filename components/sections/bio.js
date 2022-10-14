import { motion } from "framer-motion";
import styled from "styled-components";
import { HeadingSecondary } from "../global/heading";
import { wrapper } from "./globalStyles";
import { sectionVariant } from "./globalVariants";
import useScrollAnimation from "./useScrollAnimation";

const BioWrapper = styled(motion.section)`
  ${wrapper}
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const Bold = styled.h4`
  font-size: 24px;
  color: ${(p) => p.theme.c};
  margin: 0;
  margin-right: 20px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 468px) {
    font-size: 20px;
  }
`;
const Normal = styled.p`
  font-size: 18px;
  color: ${(p) => p.theme.lc};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 468px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background: ${(p) => p.theme.t};
  color: #fff;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background: ${(p) => p.theme.s};
  }
`;

export default function Bio() {
  let [ref, control] = useScrollAnimation();
  return (
    <BioWrapper
      variants={sectionVariant}
      ref={ref}
      initial="hidden"
      animate={control}
    >
      <HeadingSecondary>Bio</HeadingSecondary>
      <Line>
        <Bold>2000</Bold>
        <Normal>Born in Austagram,Kishoreganj,Dhaka,Bangladesh</Normal>
      </Line>
      <Line>
        <Bold>2018</Bold>
        <Normal>
          Started Studying Computer Science and Engineering at Patuakhali
          Science and Technology University.
        </Normal>
      </Line>
      <Line>
        <Bold>2021 - Present</Bold>
        <Normal>Started Learning Web development and still learning 😁</Normal>
      </Line>
      <Button>My Portfolio</Button>
    </BioWrapper>
  );
}
