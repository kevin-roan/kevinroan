import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #282c34;
  height: 100vmax;
`;
const HeaderStyled = styled.h1`
  color: #dbdee3;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  margin-bottom: 10px;
`;

export default function Projects() {
  return (
    <Container>
      <HeaderStyled>Projects</HeaderStyled>
    </Container>
  );
}
