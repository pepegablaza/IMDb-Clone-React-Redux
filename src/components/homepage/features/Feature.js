import React from "react";

const Feature = ({ img, poster, title }) => {
  return (
    <div className="feature">
      <img src={poster ? poster : img} alt="" />
    </div>
  );
};

export default Feature;
