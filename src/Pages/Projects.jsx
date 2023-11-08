import React from "react";
import styled from "@emotion/styled";
import kevinRoan from "../assets/images/projects/kevinroan.png";
import blogSite from "../assets/images/projects/blog-site.png";
import restoHub from "../assets/images/projects/restohub.png";
import educationSite from "../assets/images/projects/education-site.png";
import keralaTours from "../assets/images/projects/keralaTours.png";

const Container = styled.div`
  background-color: #282c34;
`;
const HeaderStyled = styled.h1`
  color: #dbdee3;
  font-size: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: QuickSand;
  margin-bottom: 10px;
`;
const ProjectContainer = styled.div`
  // border: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10vmax 3vmax 10vmax;
  margin: 0 auto;
  @media screen and (max-width: 850px) {
    padding: 0 3vmax;
    flex-direction: column;
  }
`;

const ProjectStyled = styled.div`
  background-color: black;
  border: 2px solid white;
  border-radius: 10px;
  min-height: 25vmax;
  width: 20vmax;
  overflow: auto;
  display: flex;
  margin: 0.5vmax;
  flex-direction: column;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 0;
    margin-bottom: 1.5vmax;
  }
  date {
    font-size: 14px;
    font-family: "QuickSand";
    display: flex;
    justify-content: center;
  }

  imagecontainer {
    margin: 10px;
    padding: 10px;
    border: 2px solid white;
    border-radius: 10px;
    img {
      border-radius: 10px;
    }
  }

  heading {
    padding: 1vmax;
    font-family: "QuickSand";
    display: flex;
    justify-content: center;
    font-weight: bold;
    letter-spacing: 3;
  }
  content {
    padding: 10px;
    font-family: "QuickSand";
    text-align: center;
  }
  buttoncontainer {
    display: flex;
    justify-content: center;
    button {
      border: 2px solid white;
      padding: 10px;
      border-radius: 10px;
      margin: 10px;
      font-family: "QuickSand";
      transition: all 0.5s;
      &:hover {
        background-color: limegreen;
        color: black;
      }
    }
  }
`;

const projects = [
  {
    id: 0,
    src: keralaTours,
    name: "Kerala Tours - Tourist Landing Page",
    date: "2023 November",
    demo: "https://kerala-tours-landing-page.vercel.app/",
    source: "https://github.com/kevin-roan/kerala-tours-landing-page",
  },

  {
    id: 0,
    src: restoHub,
    name: "RestoHub - Restorent FrontEnd Website",
    date: "2023 August",
    demo: "https://kevin-roan.github.io/restohub/",
    source: "https://github.com/kevin-roan/restohub",
  },
  {
    id: 1,
    src: kevinRoan,
    name: "PortFolio- You are currently looking at it.",
    date: "2023 August",
    demo: "https://kevinroan.vercel.app",
    source: "https://github.com/kevin-roan/kevinroan",
  },
  {
    id: 2,
    src: blogSite,
    name: "My Blog Site - React FrontEnd Website",
    date: "2023 July",
    demo: "https://kevinroan.github.io/blog-site",
    source: "https://github.com/kevin-roan/blog-site",
  },
  {
    id: 3,
    src: educationSite,
    name: "EduTech- React FrontEnd Website",
    date: "2023 Jun",
    demo: "https://kevinroan.github.io/education-site",
    source: "https://github.com/kevin-roan/education-site",
  },
  {
    id: 4,
    src: kevinRoan,
    name: "LudanChats- Real time Chat App",
    date: "2023 Jun",
    demo: "https://kevinroan.github.io/education-site",
    source: "https://github.com/kevin-roan/education-site",
  },
];

export default function Projects() {
  return (
    <Container>
      <HeaderStyled>Projects</HeaderStyled>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project
            title={project.name}
            imageUrl={project.src}
            date={project.date}
            demo={project.demo}
            source={project.source}
            key={index}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
}

const Project = ({ title, imageUrl, date, demo, source, key }) => {
  return (
    <ProjectStyled key={key}>
      <imagecontainer>
        <img src={imageUrl} alt="project screenshot" />
      </imagecontainer>
      <heading>{title}</heading>
      <date>{date}</date>
      <content>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </content>
      <buttoncontainer>
        <a href={source}>
          <button>GitHub</button>
        </a>

        <a href={demo}>
          <button>Demo</button>
        </a>
      </buttoncontainer>
    </ProjectStyled>
  );
};
