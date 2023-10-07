import React from "react";
import { BookingCard } from "../components/Card";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { CarouselCustomNavigation } from "../components/Carousel";

const HeaderStyled = styled.h1`
  color: #fff;
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
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  /* background-color: #282c34; */
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin: 20px;
  margin-top: 10%;
  margin-left: 50vh;
  max-width: 900px;
  width: 60%;
`;
const ImageContainer = styled.div`
  border: 5px solid white;
  /* box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.9); */
  display: flex;
  height: 250px;
  width: 250px;
  margin: 10px;
`;
const ContentContainer = styled.div`
  /* background-color: #282c34; */
  margin-left: 30px;
  height: 100%;
  h1 {
    color: #e91e63;
    font-family: "QuickSand";
    font-size: 27px;
  }
  span {
    color: #cddc39;
  }
  p {
    color: white;
    font-family: "QuickSand";
    font-size: 20px;
    text-align: justify;
    max-width: 700px;
    padding: 10px;
    padding-left: 0;
    margin-bottom: 10%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px;
  Button {
    font-family: "QuickSand";
    font-width: 80%;
    margin-right: 10px;
    color: #fff;
    background-color: #010101;
    border: 2px solid white;
    border-radius: 0;
  }
  Button:hover {
    background-color: #72757e;
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
          <h1>
            [<span>RestoHub</span>] - React Restorant Website{" "}
          </h1>
          <p>
            My first fullstack web app that helps keeping track of your cookie
            debts. For a colleague to whom I owe some cookies. A lot actually.{" "}
          </p>
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
      <CardContainer>
        <CarouselCustomNavigation />
      </CardContainer>
    </>
  );
};

export default Projects;
