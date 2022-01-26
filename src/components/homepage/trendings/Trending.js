import React from "react";

const Trending = ({ title, img, name, rating, votesCount }) => {
  return (
    <div className="trending">
      <img src={img} alt={title} />
      <div className="overview">
        <h3>{title ? title : name}</h3>
        <span className="rating">
          {rating}
          <i className="fas fa-star"></i>
        </span>
        <p className="votes-count">{votesCount} Votes</p>
      </div>
    </div>
  );
};

export default Trending;
