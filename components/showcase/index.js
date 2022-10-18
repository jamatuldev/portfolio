import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

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

const Wrapper = styled(motion.div)`
  overflow: hidden;
`;
const Heading = styled(motion.h1)`
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
const SmHeading = styled(motion.h4)`
  font-size: 20px;
  font-weight: 500;
  color: ${(p) => p.theme.lc};
  margin: 0;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Label = styled(motion.p)`
  color: ${(p) => p.theme.lc};
  background: ${(p) => p.theme.tp};
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
const Avatar = styled(motion.img)`
  height: 160px;
  width: 160px;
  object-fit: cover;
  border: 5px solid ${(p) => p.theme.lc};
  border-radius: 50%;
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
    // initial={{ opacity: 0, y: 0 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{
    //   ease: [0.6, 0.01, -0.05, 0.95],
    //   delay: 2,
    //   duration: 1,
    // }}
    >
      <AvatarWrapper>
        <Avatar
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.7,
          }}
          src="/avatar.jpeg"
          alt="avatar"
        />
      </AvatarWrapper>
      <Wrapper>
        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.7,
          }}
        >
          Hey there, I&apos;m Jamatul
        </Heading>
      </Wrapper>
      <Wrapper>
        <SmHeading
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.7,
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          }}
        >
          MERN FullStack Developer
        </SmHeading>
      </Wrapper>
      <SubHeading>I design and develop Modern Scalable Webapps</SubHeading>
      <Label
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.4,
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        }}
      >
        I like to think myself 😊 as An allrounder ,who can work with both
        frontend and backend at same level.
      </Label>
    </ShowcaseWrapper>
  );
}
