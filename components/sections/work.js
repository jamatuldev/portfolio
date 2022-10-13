import styled from "styled-components";
import { HeadingSecondary } from "../global/heading";
import { wrapper } from "./globalStyles";

const WorkContainer = styled.section`
  ${wrapper}
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
  return (
    <WorkContainer>
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
