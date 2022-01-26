import React from "react";

const Person = ({ img, name }) => {
  return (
    <div className="person">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>

      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Person;
