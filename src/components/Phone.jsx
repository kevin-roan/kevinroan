import React from "react";
import { Typography } from "@mui/material";
import { Button, Input, Card, CardBody } from "@material-tailwind/react";
import styled from "@emotion/styled";

const HeaderStyled = styled.h1`
  color: #23262d;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  @media screen and (max-width: 480px) {
    font-size: 6vh;
  }
`;
const Container = styled.div`
  h5 {
    font-family: QuickSand;
    font-size: 20px;
    margin-bottom: 5px;
  }
  Input {
    font-family: QuickSand;
    color: #000;
    background-color: #000aa;
  }
  item {
    border-radius: 10px;
    margin: 30px;
  }

  icon {
    font-size: 4rem;
    margin: 4px;
    border-radius: 20px;
  }
`;
export default function Phone() {
  return (
    <Container>
      <HeaderStyled>Socials</HeaderStyled>
      <div className="flex justify-center items-center mt-8">
        <div className="mockup-phone drop-shadow-xl">
          <div className="camera"></div>
          <div className="display">
            <Button>i</Button>
            <div className="artboard artboard-demo phone-1">
              <img
                className="h-screen w-screen"
                src="https://media.idownloadblog.com/wp-content/uploads/2022/09/iPhone-14-Purple-wallpaper.png"
              />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography variant="h5" color="black" component="h5">
                    Send me a message
                  </Typography>
                  <div className="w-54">
                    <Input
                      placeholder="Hey..Kevin Roan"
                      icon={
                        <a onClick={() => window.alert("sent")}>
                          <i class="fa-regular fa-paper-plane"></i>
                        </a>
                      }
                    />
                  </div>
                </div>
              </figcaption>
              <div className="absolute center justify-between rounded-xl border m-4 ">
                <Card className="w-full max-w-[26rem] shadow-lg bg-white-400 ">
                  <CardBody>
                    <item>
                      <icon
                        style={{ color: "black" }}
                        class="fa-brands fa-github"
                      ></icon>
                    </item>
                    <item>
                      <icon
                        style={{ color: "#0073B1" }}
                        class="fa-brands fa-linkedin"
                      ></icon>
                    </item>
                    <item>
                      <icon
                        style={{ color: "#1C96E8" }}
                        class="fa-brands fa-twitter"
                      ></icon>
                    </item>
                    <item>
                      <icon
                        style={{ color: "#F32A64" }}
                        class="fa-brands fa-square-instagram"
                      ></icon>{" "}
                    </item>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
