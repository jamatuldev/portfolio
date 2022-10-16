import Head from "next/head";
import styled from "styled-components";
import ContactSection from "../../components/sections/contact";

const ContactPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
export default function Contact() {
  return (
    <>
      <Head>
        <title>Jamatul Talukder | A Mern Stack Web developer</title>
        <meta name="description" content="I am a mernstack webdevloper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactPageWrapper>
        <ContactSection />
      </ContactPageWrapper>
    </>
  );
}
