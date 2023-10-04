import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import NavBar from "../components/NavBar";
import About from "../Pages/About";
import Projects from "../Pages/Projects";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <About />
      </div>
      <div style={{ backgroundColor: "#72757e" }}>
        <Projects />
      </div>
    </>
  );
};
export default Home;
