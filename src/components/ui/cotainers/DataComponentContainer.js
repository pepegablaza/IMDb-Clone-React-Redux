import React from "react";

const ComingSoonDiv = ({
  paragraph,
  children,
  overview,
  prev,
  next,
  startIndex,
  endIndex,
  data,
  title,
}) => {
  return (
    <div className="coming-soon-container">
      <div className="titles">
        <h4>IMDb Charts</h4>
        <h1>{title ? title : "Coming Soon"}</h1>
        <p>{paragraph}</p>
      </div>
      <hr />

      <div className="movies-container">
        {children}
        <div className="imdb-overview-text">
          <p>{overview}</p>
        </div>

        <div className="action-buttons">
          <span onClick={() => prev(startIndex)}>Prev</span>
          <span onClick={() => next(endIndex, data)}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonDiv;
