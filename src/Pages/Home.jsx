import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import NavBar from "../components/NavBar";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import HireMe from "./HireMe";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <About />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#DCDFE4" }}>
        <AboutMe />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#72757e" }}>
        <Projects />
      </div>
    </>
  );
};
export default Home;
