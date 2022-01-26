import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="list">
        <li className="item">
          <i className="fab fa-facebook-square"></i>
        </li>
        <li className="item">
          <i className="fab fa-instagram"></i>
        </li>
        <li className="item">
          <i className="fab fa-twitch"></i>
        </li>
        <li className="item">
          <i className="fab fa-twitter"></i>
        </li>
        <li className="item">
          <i className="fab fa-youtube"></i>
        </li>
      </ul>
      <div className="overview">
        <h4>IMBd Clone with React Redux Firebase</h4>
        <p>&copy; 2022 by Mario Blazevic</p>
      </div>
    </div>
  );
};

export default Footer;
