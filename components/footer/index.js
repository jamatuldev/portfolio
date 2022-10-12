import styled from "styled-components";

const GrayLabel = styled.h6`
  font-size: 14px;
  span {
    font-weight: bold;
  }
  margin: 0;
`;

const CopyrightsLabel = styled.p`
  font-size: 16px;
`;

const FooterWrappper = styled.footer`
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
