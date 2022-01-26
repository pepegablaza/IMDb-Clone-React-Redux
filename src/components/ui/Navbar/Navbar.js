import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import SignIn from "./SignIn";
import ProfileDropdown from "./ProfileDropdown";
import { connect } from "react-redux";

const Navbar = ({ isLogged }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">
              <span className="logo">IMDb</span>
            </NavLink>
          </li>

          <li
            className="navbar-list-item menu"
            onClick={() => setShowModal(true)}
          >
            <i className="fas fa-bars"></i>
            <span>Menu</span>
          </li>
          <li className="navbar-list-item search">
            <input type="text" placeholder="Search IMDb" />
            <i className="fas fa-search"></i>
          </li>
          <NavLink to={isLogged ? "/watchlist" : "/sign-in"}>
            <li className="navbar-list-item watchlist">Watchlist</li>
          </NavLink>

          {!isLogged && <SignIn />}

          {isLogged && <ProfileDropdown />}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.firebase.auth.uid,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
