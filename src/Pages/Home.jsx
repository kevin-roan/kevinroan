import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import About from "../Pages/About";
import Projects from "../Pages/Projects";

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <ImageAnimation />
        <About />
      </div>
      <Projects />
    </>
  );
};
export default Home;
