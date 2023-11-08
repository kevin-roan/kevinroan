import React from "react";
import { ImageAnimation, TextTyper, NavBar } from "../components/";
import { Projects, Skills, AboutMe, Socials } from "../Pages/";

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
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <ImageAnimation />
        <TextTyper />
      </div>
      <div style={{ backgroundColor: "#DCDFE4" }}>
        <AboutMe downloadCv={DownloadCv} />
      </div>
      <Skills />
      <Projects />
    </>
  );
};
export default Home;
