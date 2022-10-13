import styled from "styled-components";

export const HeadingSecondary = styled.h2`
  display: inline-block;
  font-size: 32px;
  color: #ffffff;
  background: ${(p) => p.theme.p};
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-bottom: 5px solid ${(p) => p.theme.lc};
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 468px) {
    font-size: 28px;
  }
`;
