import Link from "next/link";
import styled from "styled-components";

const Label = styled.a`
  font-size: 24px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 1px;
  color: ${(p) => p.theme.p};
  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

export default function Logo() {
  return (
    <Link href="/" passHref>
      <Label>Jamatul Talukder</Label>
    </Link>
  );
}
