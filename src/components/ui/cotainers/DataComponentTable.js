import React from "react";
const DataTable = ({ title, overview, children, loadMore, paragraph }) => {
  return (
    <div className="top-rated-movies-container">
      <div className="titles">
        <h4>IMDb Charts</h4>
        <h1>{title}</h1>
        {!paragraph ? "As determined by IMDb Users" : paragraph}
      </div>
      <hr />

      <div className="top-rated-movies-table">
        <div className="header">
          <h4 className="rank-title">Rank and Title (Year)</h4>
          <h4 className="rating">IMDb Rating</h4>
          <h4 className="your-rating">Your Rating</h4>
          <div className="add-watchlist"></div>
        </div>
        <div className="movie-list">{children}</div>
      </div>
      <hr />

      <p onClick={loadMore} className="load-more-button">
        Load More...
      </p>
      <div className="imdb-overview">{overview}</div>
    </div>
  );
};

export default DataTable;
