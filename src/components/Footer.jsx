import React from "react";
import styled from "@emotion/styled";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  border-top: 2px solid white;
  min-height: 3vmax;
  padding: 0 1rem;
`;
const Copyright = styled.div`
  padding: 10px;
  font-size: 1rem;
  font-family: "QuickSand";
  font-weight: 500;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 1.4rem;
    margin: 10px;
    &:hover {
      color: limegreen;
      cursor: pointer;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <Copyright>Designed and Developed by Kevin Roan</Copyright>
      <Copyright>Copyright &copy; 2023 Kevin Roan</Copyright>
      <Copyright>
        <IconContainer>
          <a href="https://github.com/kevin-roan/">
            <AiFillGithub />
          </a>
          <AiOutlineTwitter />
          <AiFillInstagram />
          <FaLinkedinIn />
        </IconContainer>
      </Copyright>
    </Container>
  );
}

export default Footer;
