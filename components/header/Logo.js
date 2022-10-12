import styled from "styled-components";

const Label = styled.h1`
  font-size: 24px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 1px;
  color: #0070f3;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export default function Logo() {
  return <Label>Jamatul Talukder</Label>;
}
