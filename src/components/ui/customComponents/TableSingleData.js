import React from "react";
import mostPopularActions from "../../../store/actions/moviesTv/mostPopularActions";

const TableSingleData = ({ img, title, number, year, rating }) => {
  return (
    <div className="top-rated-movie">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>

      <div className="data-container">
        <div className="header">
          <p>{number}.</p>
          <h4 className="title">{`${title} (${mostPopularActions.getMovieYear(
            year
          )})`}</h4>
        </div>

        <div className="body">
          <span className="rating">
            <i className="fas fa-star"></i>
            <p>{rating}</p>
          </span>

          <span className="your-rating">
            <i className="far fa-star"></i>
          </span>
          <span className="add-watchlist">
            <i className="fas fa-puzzle-piece"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableSingleData;
