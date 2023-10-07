import React from "react";
import { Input, Button } from "@material-tailwind/react";
import styled from "@emotion/styled";
import { Card, CardBody, Typography } from "@material-tailwind/react";
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
  background-color: #282c34;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  /* border: 1px solid black; */
  margin: 0 auto;
  width: 50%;
  @media screen and (max-width: 480px) {
    margin-top: 30%;
    height: auto;
    width: 100%;
  }
  form {
    border: 4px solid purple;
  }
  card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 300px;
    width: 400px;
  }
  item {
    color: #000;
    background-color: white;
    border-radius: 10px;
    height: 100px;
    width: 100px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    color: #000;
    font-size: 4rem;
  }
  h2 {
    font-family: "QuickSand";
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export default function HireMe() {
  return (
    <>
      <div className="ludan">
        <HeaderStyled>Social Handles</HeaderStyled>
      </div>
      <SocialContainer>
        <Card className="mt-6 w-96 ">
          <CardBody>
            <div className="w-72 flex-col items-end gap-6">
              <Typography variant="h2" component="h2">
                Send me a message
              </Typography>
              <div>
                <Input label="Message" />
                <Button>Send</Button>
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
            <i class="fa-brands fa-instagram"></i>
          </item>
        </card>
      </SocialContainer>
    </>
  );
}
