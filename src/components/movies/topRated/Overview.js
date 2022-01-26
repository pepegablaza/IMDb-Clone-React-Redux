import React from "react";

const Overview = () => {
  return (
    <>
      <h4>The Top Rated Movie list only includes feature films.</h4>
      <ul>
        <li>Shorts, TV movies, and documentaries are not included</li>
        <li>
          The list is ranked by a formula which includes the number of ratings
          each movie received from users, and value of ratings received from
          regular users
        </li>
        <li>
          To be included on the list, a movie must receive ratings from at least
          25000 users
        </li>
      </ul>
      <p>Learn more about how list ranking is determined.</p>
    </>
  );
};

export default Overview;
