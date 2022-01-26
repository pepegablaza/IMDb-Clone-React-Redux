import React from "react";
import { IMG_API } from "../../../services/api";

const Discover = ({ img, title, overview, poster }) => {
  return (
    <div className="discover">
      <img src={img ? `${IMG_API}${img}` : `${IMG_API}${poster}`} alt={title} />
      <div className="description">
        <h1 className="title">{title}</h1>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};

export default Discover;
