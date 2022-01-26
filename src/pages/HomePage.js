import React from "react";
import Discovers from "../components/homepage/discover/Discovers";
import Trendings from "../components/homepage/trendings/Trendings";
import Features from "../components/homepage/features/Features";
import People from "../components/homepage/people/People";

const HomePage = () => {
  return (
    <>
      <div className="news-container">
        <Discovers />
        <Trendings />
      </div>
      <div className="features-container">
        <Features />
        <People />
      </div>
    </>
  );
};

export default HomePage;
