import React from "react";
import ImageAnimation from "../components/ImageAnimation";
import NavBar from "../components/NavBar";
import TextTyper from "../Pages/TextTyper";
import Projects from "../Pages/Projects";
import AboutMe from "./AboutMe";
import Skills from "../Pages/Skills";

const DownloadCv = () => {
  const fileUrl = "/kevinroan-cv.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "kevinroan-cv.pdf";
  link.click();
};

const Home = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <TextTyper />
      </div>
      <div style={{ height: "100vh", backgroundColor: "#DCDFE4" }}>
        <AboutMe downloadCv={DownloadCv} />
      </div>
      <Skills />
      <Projects />
      <div style={{ height: "100vh", backgroundColor: "#DCDFE4" }}>Footer</div>
    </>
  );
};
export default Home;
