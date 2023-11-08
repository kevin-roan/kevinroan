import React from "react";
import { Footer } from "../components";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdfe4;
  min-height: 100vh;
`;

function Socials() {
  return (
    <Container>
      <Footer />
    </Container>
  );
}

export default Socials;
