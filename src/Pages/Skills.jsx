import React from "react";
import styled from "@emotion/styled";
import { IconButton } from "@material-tailwind/react";

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

const skills = [
  {
    icon: "",
    name: "React",
  },
  {
    icon: "",
    name: "TypeScript",
  },
  {
    icon: "",
    name: "TailwindCSS",
  },
  {
    icon: "",
    name: "NodeJS",
  },
  {
    icon: "",
    name: "React",
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 2px solid black;
  height: 600px;
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
    width: 40%;
    border: 2px solid black;
    margin: 10px;
    border-radius: 20px;
    border: 2px solid #ce3df3;
    box-shadow: 0 0 10px 2px #ce3df3;
    @media screen and (max-width: 480px) {
      width: 80%;
    }
  }
  rightpane {
    border-radius: 20px;
    background-color: #1c1f26;
    margin: 10px;
    height: 80%;
    width: 40%;
    border: 2px solid #e91e63;
    box-shadow: 0 0 10px 2px #e91e63;
    @media screen and (max-width: 480px) {
      width: 80%;
    }
  }
  rightpane:hover {
    transform: scale(1.01);
  }
  leftpane:hover {
    transform: scale(1.01);
  }
`;

const Skills = () => {
  return (
    <div>
      <HeaderStyled>Skills</HeaderStyled>
      <Container>
        <leftpane>
          <div className="items-center w-half p-4 hidden sm:block">
            <IconStat />
          </div>
        </leftpane>
        <rightpane>
          <div className="flex items-center w-half p-4">
            <IconStat />
          </div>
        </rightpane>
      </Container>
    </div>
  );
};

export default Skills;

const IconStat = () => {
  return (
    <div className="stats stats-vertical shadow w-full">
      <div className="stat">
        <div className="stat-title">Downloads</div>
        <div className="stat-value">React</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title">New Users</div>
        <div className="stat-value">TypeScript</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">Nodejs</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
      <div className="stat">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">NextJs</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

const SingleIconState = () => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Total Page Views</div>
        <div className="stat-value">89,400</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
};
