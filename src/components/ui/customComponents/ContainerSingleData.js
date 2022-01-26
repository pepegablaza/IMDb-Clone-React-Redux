import React from "react";
import PersonData from "./PersonData";

const ContainerSingleData = ({
  img,
  title,
  overview,
  movie,
  known_for,
  job,
}) => {
  return (
    <div className="coming-soon-movie">
      <img src={img} alt={title} />
      <div className="description">
        <h3 className="title">{title}</h3>
        {known_for && <PersonData known_for={known_for} job={job} />}
        <p className="overview">{overview}</p>

        {!known_for && (
          <div className="action-buttons">
            <button>Watch Trailer</button>
            <button>Add to Watchlist</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContainerSingleData;
