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
const ContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <>
      <HeaderStyled>Projects</HeaderStyled>
      <div className="container">
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </>
  );
};

export default Home;
