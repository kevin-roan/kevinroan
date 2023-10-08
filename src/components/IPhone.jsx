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
  flex-direction: row;
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
    /* border: 1px solid white; */
    border-radius: 100px;
  }
`;

const IphoneContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export default function Iphone() {
  return (
    <>
      <HeaderStyled>Social Handles</HeaderStyled>
      <IphoneContainer>
        <Img src={iphoneframe} alt="Iphone frame" />
        <Video src="https://www.mkgifs.com/wp-content/uploads/2023/06/Iphone-Cool-GIF-Wallpaper.gif" />
      </IphoneContainer>
    </>
  );
}
