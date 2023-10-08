import React from "react";
import { Input, Button } from "@material-tailwind/react";
import styled from "@emotion/styled";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import iphoneframe from "../assets/images/iphoneframe.png";

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

const Img = styled.img`
  height: 700px;
  width: 600px;
  margin: 0 auto;
  diplay: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  @media screen and (max-width: 480px) {
    height: 740px;
    object-fit: cover;
    overflow: auto;
  }
`;

const Video = styled.img`
  @media screen and (max-width: 480px) {
    height: 740px;
    padding: 40px;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const IphoneContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

const CardContainer = styled.div`
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  width: 388px;
`;

const CardItem = styled.div`
  color: #000;
  border: 2px solid #282c34;
  background-color: white;
  border-radius: 10px;
  height: 40px;
  width: 40px;
  margin-left: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.i`
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  font-size: 3.5rem;
`;

export default function Iphone() {
  return (
    <>
      <HeaderStyled>Social Handles</HeaderStyled>
      <IphoneContainer>
        <Img src={iphoneframe} alt="Iphone frame" />
        <CardContainer>
          <CardWrapper>
            <CardItem>
              <Icon
                className="fa-brands fa-github"
                style={{ color: "#000" }}
              ></Icon>
            </CardItem>
            <CardItem>
              <Icon
                className="fa-brands fa-linkedin"
                style={{ color: "#0073B1" }}
              ></Icon>
            </CardItem>
            <CardItem>
              <Icon
                className="fa-brands fa-twitter"
                style={{ color: "#1C96E8" }}
              ></Icon>
            </CardItem>
            <CardItem>
              <Icon
                className="fa-brands fa-square-instagram"
                style={{ color: "#F32A64" }}
              ></Icon>
            </CardItem>
          </CardWrapper>
        </CardContainer>
        <Video src="https://www.mkgifs.com/wp-content/uploads/2023/06/Iphone-Cool-GIF-Wallpaper.gif" />
      </IphoneContainer>
    </>
  );
}
