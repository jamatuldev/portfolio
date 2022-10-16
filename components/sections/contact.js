import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { wrapper } from "./globalStyles";

const ContactWrapper = styled(motion.section)`
  ${wrapper}
  margin-top: 250px;
  //background: ${(p) => p.theme.sbg};
  border-radius: 5px;
  padding: 15px 30px;
  text-align: center;
  position: relative;
`;

const Heading = styled(motion.h1)`
  color: ${(p) => p.theme.lc};
  font-size: 64px;
  line-height: 1;
  margin: 0;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 468px) {
    font-size: 42px;
  }
  @media (max-width: 320px) {
    font-size: 36px;
  }
`;

const SubHeading = styled(motion.a)`
  color: ${(p) => p.theme.lc};
  font-size: 48px;
  font-weight: 500;
  margin: 0;
  margin: 10px 0;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 468px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

const BackText = styled(motion.p)`
  font-size: 300px;
  color: ${(p) => p.theme.g};
  opacity: 0.5;
  position: absolute;
  top: -520px;
  z-index: -50;
`;

export default function ContactSection() {
  return (
    <ContactWrapper>
      <BackText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        @
      </BackText>
      <Heading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      >
        My Contact
      </Heading>
      <Link href="mailto: jamatuldev@gmail.com" passHref>
        <SubHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        >
          jamatuldev@gmail.com
        </SubHeading>
      </Link>
    </ContactWrapper>
  );
}
