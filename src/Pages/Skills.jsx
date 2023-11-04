import React from "react";
import styled from "@emotion/styled";
import { Carousel } from "@material-tailwind/react";

const skills = [
  { icon: "", name: "NodeJs", title: "2022-Present", desc: "Proficient" },
  { icon: "", name: "ExpressJs", title: "2022-Present", desc: "Proficient" },
  { icon: "", name: "MongoDB", title: "2022-Present", desc: "Proficient" },
  { icon: "", name: "Sql", title: "2022-2023", desc: "Familiar" },
  { icon: "", name: "REST API", title: "2023-Present", desc: "Familiar" },
];

const uiskills = [
  { icon: "", name: "React", title: "2023-Present", desc: "Expert" },
  { icon: "", name: "TypeScript", title: "2023-Present", desc: "Expert" },
  { icon: "", name: "TailwindCSS", title: "2023-Present", desc: "Expert" },
  { icon: "", name: "Material UI", title: "2023-Present", desc: "Expert" },
  { icon: "", name: "NextJs", title: "2023-Present", desc: "Proficient" },
];

const RightStat = () => {
  return (
    <div className="flex items-center w-half p-4">
      <div className="stats stats-vertical shadow w-full ">
        <div className="stat">
          {uiskills.map((skill) => (
            <>
              <div className="stat-title">{skill.title}</div>
              <div className="stat-value">{skill.name}</div>
              <div className="stat-desc">{skill.desc}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeftStat = () => {
  return (
    <>
      <div className="flex items-center w-half p-4 ">
        <div className="stats stats-vertical shadow w-full">
          <div className="stat">
            {skills.map((skill, index) => (
              <>
                <div className="stat-title">{skill.title}</div>
                <div className="stat-value">{skill.name}</div>
                <div className="stat-desc">{skill.desc}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const MobileView = () => {
  return (
    <div className="block sm:hidden ">
      <Carousel
        className="rounded-xl border w-96 m-3 pt-4"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <RightStat />
        <LeftStat />
      </Carousel>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <HeaderStyled>Skills</HeaderStyled>
      <Container>
        <leftpane className="hidden sm:block">
          <LeftStat />
        </leftpane>
        <rightpane className="hidden sm:block">
          <RightStat />
        </rightpane>
        <MobileView />
      </Container>
    </div>
  );
};

export default Skills;

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  width: 50vmax;
  max-height: 50vmax;
  background-color: #23262d;
  padding: 1vmax;
  margin-top: 4%;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 80vh;
    width: auto;
    margin: 10px;
  }

  leftpane {
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
