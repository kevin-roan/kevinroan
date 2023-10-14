import React from "react";
import styled from "@emotion/styled";

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

const SkillContainer = ({ skill }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="card w-50 h-1/2 bg-black text-primary-content">
        <div className="card-body">
          <h2 className="">{skill.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <HeaderStyled>Skills</HeaderStyled>
      <div className="w-50 flex justify-center items-center">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://skills.kevinroan.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>
      </div>
      {skills.map((skill, index) => (
        <SkillContainer skill={skill} key={index} />
      ))}
    </>
  );
}
