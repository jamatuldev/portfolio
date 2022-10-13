import styled from "styled-components";
import { HeadingSecondary } from "../global/heading";
import { wrapper } from "./globalStyles";

const LoveWrapper = styled.section`
  ${wrapper}
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${(p) => p.theme.lc};
  span {
    font-weight: bold;
    color: ${(p) => p.theme.p};
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 468px) {
    font-size: 15px;
  }
`;

export default function Love() {
  return (
    <LoveWrapper>
      <HeadingSecondary>I ❤️</HeadingSecondary>
      <Paragraph>
        <span>Nature</span>, Music, Travelling, Problem Solving, Football,
        Badminton
      </Paragraph>
    </LoveWrapper>
  );
}
