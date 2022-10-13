import styled from "styled-components";

const GrayLabel = styled.h6`
  font-size: 14px;
  font-weight: 300;
  color: ${(p) => p.theme.lc};
  span {
    font-weight: bold;
  }
  margin: 0;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CopyrightsLabel = styled.p`
  font-size: 16px;
  color: ${(p) => p.theme.lc};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FooterWrappper = styled.footer`
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 5rem;
    text-align: center;
    padding: 10px;
  }
`;
export default function Footer() {
  return (
    <FooterWrappper>
      <GrayLabel>
        This website is design and developed by <span> Jamatul Talukder</span>
      </GrayLabel>
      <CopyrightsLabel>
        Copyright © {new Date().getFullYear()} Jamatul Talukder All rights
        reserved.
      </CopyrightsLabel>
    </FooterWrappper>
  );
}
