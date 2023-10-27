import React from "react";
import styled from "@emotion/styled";
import setupvideo from "../assets/video.mp4";
import { Button, Typography } from "@material-tailwind/react";
import nature from "../assets/images/nature.jpg";
import { FooterWithLogo } from "../components/Footer";

export default function () {
  return (
    <>
      <HeaderStyled>Extra</HeaderStyled>
      <Container>
        <leftpane>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source src={setupvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </leftpane>
        <rightpane>
          <ExtraLinks item="Blogs" />
          <ExtraLinks item="Youtube" />
          <ExtraLinks item="Bio" />
        </rightpane>
      </Container>
      <div className="hidden sm:block">
        <FooterWithLogo />
      </div>
    </>
  );
}

const ExtraLinks = ({ item }) => {
  return (
    <ExtraLinksContainer>
      <LinkHeading vairant="h3">{item}</LinkHeading>
      <a href="#" className="inline-block">
        <Button
          color="white"
          variant="contained"
          className="flex items-center gap-2 white "
        >
          Go
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </a>
    </ExtraLinksContainer>
  );
};

const HeaderStyled = styled.h1`
  color: #23262d;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 6vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  height: 500px;
  width: 1000px;
  background-color: #23262d;
  margin-top: 4%;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 80vh;
    width: auto;
    margin: 10px;
  }

  leftpane {
    height: 80%;
    width: 60%;
    border: 2px solid black;
    margin: 10px;
    border-radius: 20px;
    border: 2px solid #fff;
    box-shadow: 0 0 10px 2px #ce3df3;
    @media screen and (max-width: 480px) {
      width: 80%;
    }
  }
  rightpane {
    border-radius: 20px;
    margin: 10px;
    height: 80%;
    width: 40%;
    border: 2px solid #fff;
    background-color: #e0e0e0;
    @media screen and (max-width: 480px) {
      width: 80%;
    }
   
    }
  }
`;

const LinkHeading = styled.div`
  font-size: 4vh;
  display: flex;
  align-items: left;
  justify-content: left;
  font-family: QuickSand;
  color: #2ec27e;
  @media screen and (max-width: 480px) {
    font-size: 6vh;
  }
`;

const ExtraLinksContainer = styled.div`
  margin: 10px;
  margin-top: 25px;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
`;
