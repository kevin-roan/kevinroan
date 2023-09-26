import { Typography } from "@material-tailwind/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, CardBody } from "@material-tailwind/react";

const About = () => {
  return (
    <>
      <Card>
        <CardBody>
          <ImgWithShadow />
          <Typography variant="h1">Welcome to my</Typography>
          <div className="container">
            <ExampleComponent />
          </div>
        </CardBody>
      </Card>
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

export function ImgWithShadow() {
  return (
    <img
      className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
  );
}
