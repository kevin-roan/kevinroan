import React from "react";
import styled from "@emotion/styled";
import dp from "../assets/images/dp.jpg";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: #23262d;
  border-radius: 9px;
  height: 500px;
  width: 900px;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.8);
  animation: breathAnimation 3s ease-in-out infinite;
  @media screen and (max-width: 480px) and (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    margin-top: 13vh;
    height: 100%;
    width: 100%;
  }

  @keyframes breathAnimation {
    0% {
      transform: scale(1);
      background-color: #23262d;
    }
    50% {
      transform: scale(1);
      background-color: #000f;
    }
    100% {
      transform: scale(1);
      background-color: #23262d;
    }
  }
`;

const Heading = styled.div`
  font-size: 27px;
  font-family: "QuickSand";
  color: #cddc39;
  margin-left: 10px;
`;
const ImageContainer = styled.div`
  border: 4px solid white;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  height: 230px;
  width: 260px;
  padding: 30px;
`;
const EducationContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px;
`;

const Paragraph = styled.p`
  font-size: 23px;
  font-family: "QuickSand";
  color: white;
  margin: 10px;
  text-align: justify;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 0;
    margin: 0;
    text-align: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0;
    margin: 0;
    text-align: none;
  }
  @media screen and (max-width: 481px) {
    font-size: 13px;
    padding: 0;
    margin: 0;
    text-align: none;
  }
`;

const ContentContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const EducationItem = styled.li`
  color: white;
  font-family: "QuickSand";
  font-weight: 12px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;
const HighLight = styled.span`
  color: #e91e63;
`;
export default function AboutMe({ downloadCv }) {
  return (
    <AboutContainer>
      <CardContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ImageContainer>
            <img
              src={dp}
              alt="Image of Kevin Roan"
              style={{ height: "100%", width: "100%" }}
            />
          </ImageContainer>
          <EducationContainer>
            <ul>
              <EducationItem>Bachelor of Computer Application </EducationItem>
              <EducationItem>English | Malayalam | Hindi</EducationItem>
              <EducationItem>TypeScript, React, Redux </EducationItem>
            </ul>
          </EducationContainer>
        </div>
        <ContentContainer>
          <Heading>About Me</Heading>
          <Paragraph>
            I am a 21 year old professional{" "}
            <HighLight>Web developer </HighLight>which acquired his Bachelor of
            Computer Application -<HighLight> BCA </HighLight>degree in 2023 and
            is working as a <HighLight>Freelance Web-Developer </HighLight>since
            then.{" "}
          </Paragraph>
          <Paragraph>
            Most of the time I develop frontend apps with{" "}
            <HighLight>React</HighLight> and <HighLight>Typescript</HighLight>,
            try to design my own stuff and build cool web apps while learning
            new things.
            <Button
              color="lime"
              className="flex items-center mt-4 gap-3 white"
              size="sm"
              onClick={() => downloadCv()}
            >
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
              CV
            </Button>
          </Paragraph>
        </ContentContainer>
      </CardContainer>
    </AboutContainer>
  );
}
