import React from "react";
import { BookingCard } from "../components/Card";
import styled from "@emotion/styled";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
      <HeaderStyled>Projects</HeaderStyled>
      <CardStyled>
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </CardStyled>
    </div>
  );
};

export default Home;
