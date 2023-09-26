import { Typography } from "@material-tailwind/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, CardBody } from "@material-tailwind/react";
import { DefaultTimeline } from "../components/TimeLine";

const About = () => {
  return (
    <>
      <CenterDiv />
      {/*
      <Card className="mt-7 w-96 ">
        <CardBody>
          <Typography variant="h1">Welcome to my</Typography>
          <div className="container">
            <ExampleComponent />
          </div>
        </CardBody>
      </Card>
      */}
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
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "30px", display: "inline-block" }}
      />
    </>
  );
};

const CenterDiv = () => {
  return (
    <div className="grid place-content-center mt-9 ">
      <Typography variant="h1">Welcome to my</Typography>
      <ExampleComponent />
      <DefaultTimeline />
    </div>
  );
};
