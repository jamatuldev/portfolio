import { motion } from "framer-motion";
import styled from "styled-components";

const ShowcaseWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  @media (max-width: 768px) {
  }
`;
const Heading = styled.h1`
  font-size: 42px;
  color: ${(p) => p.theme.p};
  font-family: monospace;
  font-family: "Fredoka One";
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 468px) {
    font-size: 34px;
    line-height: 1;
  }
`;
const SubHeading = styled.h2`
  display: none;
  font-size: 32px;
  font-weight: 400;
  color: ${(p) => p.theme.lc};
  margin: 0;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const SmHeading = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: ${(p) => p.theme.lc};
  margin: 0;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Label = styled.p`
  color: #ffffff;
  background: ${(p) => p.theme.p};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0;
  width: 450px;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 410px;
  }
  @media (max-width: 468px) {
    font-size: 14px;
    width: 365px;
  }
  @media (max-width: 431px) {
    font-size: 14px;
    width: 260px;
  }
`;
const AvatarWrapper = styled.div``;
const Avatar = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(p) => p.theme.g};
  @media (max-width: 768px) {
    height: 140px;
    width: 140px;
  }
  @media (max-width: 468px) {
    height: 130px;
    width: 130px;
  }
`;

export default function Showcase() {
  return (
    <ShowcaseWrapper
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, -0.05, 0.95],
        delay: 1,
        duration: 1,
      }}
    >
      <AvatarWrapper>
        <Avatar src={"/avatar.jfif"} alt="avatar" />
      </AvatarWrapper>
      <Heading>Hey there, I&apos;m Jamatul</Heading>
      <SmHeading>Javascript and Typescript Developer</SmHeading>
      <SubHeading>I design and develop Modern Scalable Webapps</SubHeading>
      <Label>
        I like to think myself 😊 as An allrounder ,who can work with both
        frontend and backend at same level.
      </Label>
    </ShowcaseWrapper>
  );
}
