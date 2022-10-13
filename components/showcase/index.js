import styled from "styled-components";

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 70px);
  @media (max-width: 768px) {
  }
`;
const Heading = styled.h1`
  font-size: 42px;
  color: ${(p) => p.theme.p};
  font-weight: 500;
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
  font-size: 28px;
  font-weight: 400;
  color: ${(p) => p.theme.lc};
  margin: 0;
  margin-top: 15px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const SmHeading = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: ${(p) => p.theme.lc};
  margin: 0;
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
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 468px) {
    font-size: 14px;
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
    <ShowcaseWrapper>
      <AvatarWrapper>
        <Avatar src={"/avatar.jfif"} alt="avatar" />
      </AvatarWrapper>
      <Heading>Hey there, I'm Jamatul</Heading>
      <SmHeading>Javascript and Typescript Developer</SmHeading>
      <SubHeading>I design and develop Modern Scalable Webapps</SubHeading>
      <Label>
        Me 😊 An allrounder ,who can work with both frontend and backend
      </Label>
    </ShowcaseWrapper>
  );
}
