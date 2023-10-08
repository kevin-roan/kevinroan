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

const SocialContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  @media screen and (max-width: 480px) {
    margin-top: 30%;
    height: 500px;
    width: 100%;
  }
  form {
    border: 4px solid purple;
  }
  card {
    background-color: #282c34;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 343px;
    width: 388px;
  }
  item {
    color: #000;
    border: 2px solid #282c34;
    background-color: white;
    border-radius: 10px;
    height: 100px;
    width: 100px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  item:hover {
    transform: scale(1.2);
  }
  i {
    color: #282c34;
    font-size: 4rem;
  }
  h2 {
    color: #fff;
    font-family: "QuickSand";
    font-size: 20px;
    margin-bottom: 10px;
  }
  Button {
    margin-left: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
// const Video = styled.img`
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

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
    object-fit: cover;
    overflow: auto;
  }
`;

const Video = styled.img`
  width: 600px;
  height: 700px;
  padding: 34px;
  object-fit: cover;
  /* border: 1px solid white; */
  border-radius: 100px;
`;

const IphoneContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export default function HireMe() {
  return (
    <>
      <HeaderStyled>Social Handles</HeaderStyled>
      <IphoneContainer>
        <Img src={iphoneframe} alt="Iphone frame" />
        <Video src="https://www.mkgifs.com/wp-content/uploads/2023/06/Iphone-Cool-GIF-Wallpaper.gif" />
      </IphoneContainer>
      <SocialContainer>
        <Card
          className="mt-6 w-96 "
          style={{
            backgroundColor: "#282C34",
            boxShadow: " 0px 0px 100px rgba(0, 0, 0, 0.5)",
          }}
        >
          <ImageContainer>
            <img
              src="https://prettycoffee.github.io/static/media/kitty.c5cd51eb02bd57a1ad5d.webp"
              alt="ludan"
            />
          </ImageContainer>
          <CardBody>
            <div className="w-79 flex-col items-end gap-6">
              <Typography variant="h2" component="h2">
                Send me a message
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Input
                  label="Message"
                  variant="outlined"
                  style={{ backgroundColor: "#fff" }}
                />
                <Button color="pink">Send</Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <card>
          <item>
            <i class="fa-brands fa-github"></i>
          </item>
          <item>
            <i class="fa-brands fa-linkedin"></i>
          </item>
          <item>
            <i class="fa-brands fa-twitter"></i>
          </item>
          <item>
            <i class="fa-brands fa-square-instagram"></i>{" "}
          </item>
        </card>
      </SocialContainer>
    </>
  );
}