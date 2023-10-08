import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import NavBar from "../components/NavBar";
import TextTyper from "../Pages/TextTyper";
import Projects from "../Pages/Projects";
import Socials from "./Socials";
import AboutMe from "./AboutMe";
import Iphone from "../components/IPhone";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <TextTyper />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#DCDFE4" }}>
        <AboutMe />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#282C34" }}>
        <Projects />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#72757E" }}>
        <Iphone />
      </div>
    </>
  );
};
export default Home;
