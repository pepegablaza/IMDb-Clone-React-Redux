import React from "react";

const PersonData = ({ known_for, job }) => {
  return (
    <div className="person-data-container">
      <span className="person-data">
        <h4>{job}:</h4>
        {known_for.map((data) => {
          return <p key={data.id}>{data.title ? data.title : data.name}</p>;
        })}
      </span>
    </div>
  );
};

export default PersonData;
