import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="grid place-content-center mt-9 greeting-container">
        <h1>Welcome to my</h1>
        <TextTyper />
      </div>
    </>
  );
};

const TextTyper = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Portfolio",
          2000,
          "Hobby",
          2000,
          "Passion",
          2000,
          "Project",
          2000,
          "Playground",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-typer"
      />
    </>
  );
};

export default About;
