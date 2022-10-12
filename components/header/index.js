import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Nav";

const Container = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  background: #ffffff;
  // backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
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
`;

export default function Header({ toggleTheme }) {
  return (
    <Container>
      <Wrapper>
        <Logo></Logo>
        <Navbar toggleTheme={toggleTheme} />
      </Wrapper>
    </Container>
  );
}
