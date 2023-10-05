import React from "react";
import styled from "@emotion/styled";
import dp from "../assets/images/dp.jpg";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  background-color: #23262d;
  /* border-radius: 13px; */
  margin-top: 24vh;
  height: 422px;
  width: 900px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.8);
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
  margin-left: 20px;
`;
const EducationContainer = styled.div`
  /* border: 2px solid yellow; */
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
`;
const HighLight = styled.span`
  color: #e91e63;
`;
export default function AboutMe() {
  return (
    <div className="container">
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
          </Paragraph>
        </ContentContainer>
      </CardContainer>
    </div>
  );
}
