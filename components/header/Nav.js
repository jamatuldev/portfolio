import styled from "styled-components";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState } from "react";
import { useThemeContext } from "../../contexts/theme";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  &:not(:last-of-type) {
    margin: 0 10px;
  }
  &:last-of-type {
    margin-left: 20px;
  }
`;
const MenuButton = styled.button`
  display: none;
  background: transparent;
  padding: 3px;
  border-radius: 5px;
  border: 3px solid ${(p) => p.theme.lc};
  margin-left: 10px;
  cursor: pointer;
  svg {
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuList = styled.ul`
  display: none;
  width: 250px;
  padding: 10px;
  background: ${(p) => p.theme.sbg};
  position: absolute;
  top: 50px;
  right: 0px;
  list-style: none;
  border-radius: 5px;
  border: 2px solid ${(p) => p.theme.g};
  li {
    margin: 0 0 10px 0 !important;
  }
  &:last-child {
    margin: 0 !important;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    display: ${(p) => (p.visible ? "flex" : "hidden")};
    flex-direction: column;
  }
`;
const Anchor = styled.a`
  font-size: 18px;
  padding: 10px 20px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 468px) {
    font-size: 15px;
  }
`;

const ButtonWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Navbar({ toggleTheme }) {
  const [visible, setVisible] = useState(false);
  let [theme] = useThemeContext();
  return (
    <Nav>
      <List>
        <ListItem>
          <Link href={"/works"} passHref>
            <Anchor>Works</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/"} passHref>
            <Anchor>About</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/contact"} passHref>
            <Anchor>Contact</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <ThemeButton />
        </ListItem>
      </List>
      <ButtonWrapper>
        <ThemeButton toggleTheme={toggleTheme} />
      </ButtonWrapper>
      <MenuButton onClick={() => setVisible((val) => !val)}>
        <MenuIcon color={theme === "light" ? "#24292f" : "#c9d1d9"} />
      </MenuButton>
      <MenuList visible={visible}>
        <ListItem>
          <Link href={"/works"} passHref>
            <Anchor>Works</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/"} passHref>
            <Anchor>About</Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={"/contact"} passHref>
            <Anchor>Contact</Anchor>
          </Link>
        </ListItem>
      </MenuList>
    </Nav>
  );
}

function MenuIcon({ color = "#000000" }) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
    </svg>
  );
}
