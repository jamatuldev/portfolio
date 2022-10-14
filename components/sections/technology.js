import { motion } from "framer-motion";
import styled from "styled-components";
import { HeadingSecondary } from "../global/heading";
import { wrapper } from "./globalStyles";
import { sectionVariant } from "./globalVariants";
import useScrollAnimation from "./useScrollAnimation";

const TechnologyWrapper = styled(motion.section)`
  ${wrapper}
`;

const Label = styled.h4`
  font-size: 24px;
  font-weight: 500;
  color: ${(p) => p.theme.lc};
  margin: 0;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 468px) {
    font-size: 20px;
  }
`;
const TextWrapper = styled.div`
  margin-bottom: 20px;
`;
const Wrapper = styled.div``;
const Paragraph = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${(p) => p.theme.lc};
  font-size: 18px;
  line-height: 1.7;
  span {
    font-weight: bold;
    margin-left: 15px;
  }
  img {
    margin-left: 15px;
    height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 468px) {
    font-size: 15px;
  }
`;

export default function Technology() {
  let [ref, control] = useScrollAnimation();
  return (
    <TechnologyWrapper
      variants={sectionVariant}
      ref={ref}
      initial="hidden"
      animate={control}
    >
      <HeadingSecondary>Technology</HeadingSecondary>
      <Wrapper>
        <TextWrapper>
          <Label>Design</Label>
          <Paragraph>
            For design purpose i use :{" "}
            <img src="/icons/figma.svg" alt="Figma Icon" /> <span>Figma</span>{" "}
            <img src="/icons/photoshop.svg" alt="photoshop Icon" />{" "}
            <span>Photoshop</span>
          </Paragraph>
        </TextWrapper>
        <TextWrapper>
          <Label>Frontend</Label>
          <Paragraph>
            To build UI and Interactivity i use :{" "}
            <img src="/icons/react.svg" alt="react Icon" /> <span>React</span>{" "}
            <img src="/icons/next.js.svg" alt="next.js Icon" />{" "}
            <span>Next.js</span>
            <img src="/icons/redux.svg" alt="redux Icon" /> <span>Redux</span>{" "}
            <img src="/icons/sass.svg" alt="sass Icon" /> <span>Sass</span>
            <img
              src="/icons/styled-components.svg"
              alt="styled-components Icon"
            />{" "}
            <span>Styled-Components</span>
            <img src="/icons/material-ui.svg" alt="material-ui Icon" />{" "}
            <span>Material-Ui</span>{" "}
            <img src="/icons/framer-motion.svg" alt="framer-motion Icon" />{" "}
            <span>Framer-Motion</span>{" "}
            <img src="/icons/babel.svg" alt="babel Icon" /> <span>Babel</span>{" "}
            <img src="/icons/webpack.svg" alt="webpack Icon" />{" "}
            <span>Webpack</span>{" "}
          </Paragraph>
        </TextWrapper>
        <TextWrapper>
          <Label>Backend</Label>
          <Paragraph>
            For creating rest api i use :{" "}
            <img src="/icons/node.svg" alt="node Icon" /> <span>Node</span>{" "}
            <img src="/icons/express.svg" alt="express Icon" />{" "}
            <span>Express</span>
            <img src="/icons/strapi.svg" alt="strapi Icon" />{" "}
            <span>Strapi</span>
            <img src="/icons/mongodb.svg" alt="mongodb Icon" />{" "}
            <span>MongoDb</span>
          </Paragraph>
        </TextWrapper>
      </Wrapper>
    </TechnologyWrapper>
  );
}
