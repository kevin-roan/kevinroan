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
  border-top: 1px solid white;
  min-height: 3vmax;
  padding: 0 1rem;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const Copyright = styled.div`
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
      <Copyright>Designed & Developed by Kevin Roan</Copyright>
      <Copyright>Copyright &copy; 2023 Kevin Roan</Copyright>
      <Copyright>
        <IconContainer>
          <a href="https://github.com/kevin-roan/">
            <AiFillGithub />
          </a>
          <a href="https://x.com/kevinroan_/">
            <AiOutlineTwitter />
          </a>
          <a href="https://instagram.com/kevinroan_/">
            <AiFillInstagram />
          </a>
          <a href="https://linkedin.com/in/kevinroan/">
            <FaLinkedinIn />
          </a>
        </IconContainer>
      </Copyright>
    </Container>
  );
}

export default Footer;
