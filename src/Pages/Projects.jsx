import React from "react";
import { BookingCard } from "../components/Card";
import "./Projects.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </>
  );
};

export default Home;
