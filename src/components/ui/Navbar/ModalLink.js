import React from "react";
import { Link } from "react-router-dom";

const ModalLink = (props) => {
  return (
    <Link onClick={() => props.handleClick(false)} to={props.to}>
      {props.children}
    </Link>
  );
};

export default ModalLink;
