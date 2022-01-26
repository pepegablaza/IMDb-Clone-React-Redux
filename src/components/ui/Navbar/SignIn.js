import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <NavLink to="/sign-in">
      <li className="navbar-list-item signin">Sign In</li>
    </NavLink>
  );
};

export default SignIn;
