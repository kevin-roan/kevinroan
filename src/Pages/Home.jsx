import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import NavBar from "../components/NavBar";
import TextTyper from "../Pages/TextTyper";
import Projects from "../Pages/Projects";
import AboutMe from "./AboutMe";
import Phone from "../components/Phone";
import Extra from "../Pages/Extra";
import Skills from "../Pages/Skills";

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
      <div style={{ height: "100vh", backgroundColor: "#72757E" }}>
        <Skills />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#282C34" }}>
        <Projects />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#72757E" }}>
        <Phone />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#DCDFE4" }}>
        <Extra />
      </div>
    </>
  );
};
export default Home;
