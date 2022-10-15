import { motion } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Nav";

const Container = styled(motion.header)`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.c};
  background: transparent;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
`;
const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: auto;
  @media (max-width: 1245px) {
    width: 70%;
  }
  @media (max-width: 920px) {
    width: 85%;
  }
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (min-width: 1245px) {
    width: 65%;
  }
`;

export default function Header({ toggleTheme }) {
  return (
    <Container
      initial={{ opacity: 0, marginTop: -150 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{
        delay: 4.2,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Wrapper>
        <Logo></Logo>
        <Navbar toggleTheme={toggleTheme} />
      </Wrapper>
    </Container>
  );
}
