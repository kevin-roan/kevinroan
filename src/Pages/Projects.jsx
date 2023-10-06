import React from "react";
import { BookingCard } from "../components/Card";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const HeaderStyled = styled.h1`
  color: #282c34;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  margin-bottom: 10px;
`;

const CardStyled = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  border: 2px solid black;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 270px;
  margin: 20px;
  margin-left: 50vh;
  max-width: 900px;
  width: 60%;
`;
const ImageContainer = styled.div`
  border: 5px solid white;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 250px;
  width: 250px;
  margin: 10px;
`;
const ContentContainer = styled.div`
  margin: 20px;
  margin-left: 100px;
  height: 80%;
`;
const ProjectHeading = styled.div`
  color: #cddc39;
  font-family: "QuickSand";
  font-size: 24px;
`;
const Paragraph = styled.div`
  color: white;
  font-family: "QuickSand";
  font-size: 17px;
  text-align: justify;
  max-width: 700px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px;
  Button {
    margin-right: 10px;
    color: #fff;
    background-color: black;
  }
`;

const Project = () => {
  return (
    <div>
      <CardContainer>
        <ImageContainer>
          <img
            src="https://prettycoffee.github.io/static/media/cookie.9f9eb62d0a74a1a5eef2.webp"
            alt="project image"
          />
        </ImageContainer>
        <ContentContainer>
          <ProjectHeading>Project Name</ProjectHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. cillum sint consectetur
            cupidatat. cillum sint consectetur cupidatat.
          </Paragraph>
          <ButtonContainer>
            <Button variant="contained">Demo</Button>
            <Button variant="contained">GitHub</Button>
          </ButtonContainer>
        </ContentContainer>
      </CardContainer>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <HeaderStyled>Projects</HeaderStyled>
      <div>
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
};

export default Projects;
