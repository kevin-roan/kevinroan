import { Typography } from "@material-tailwind/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <>
      <CenterDiv />
    </>
  );
};

export default About;

const ExampleComponent = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Portfolio", // Types 'One'
          2000, // Waits 1s
          "Hobby", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Passion", // Types 'Three' without deleting 'Two'
          2000, // Waits 2s
          "Project", // Types 'Three' without deleting 'Two'
          2000, // Waits 2s
          "Playground", // Types 'Three' without deleting 'Two'
          2000, //
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "30px", display: "inline-block", color: "#fff" }}
      />
    </>
  );
};

const CenterDiv = () => {
  return (
    <div className="grid place-content-center mt-9 ">
      <h1 style={{ color: "#fff", fontSize: "5rem", fontFamily: "sans-serif" }}>
        Welcome to my
      </h1>
      <ExampleComponent />
    </div>
  );
};
