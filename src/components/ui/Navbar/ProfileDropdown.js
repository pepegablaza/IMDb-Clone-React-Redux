import React, { useState } from "react";
import { connect } from "react-redux";
import authActions from "../../../store/actions/auth/authActions";

const ProfileDropdown = ({ signOut, accountName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <li>
      <div
        className="navbar-list-item account"
        onClick={() => setShowDropdown(!showDropdown)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <i className="fas fa-user-circle"></i>
        {accountName}
        <i className="fa fa-caret-down"></i>
        {showDropdown && (
          <ul className="dropdown-content">
            <li href="#">Your Watchlist</li>
            <li href="#">Your Ratings</li>
            <li href="#">Edit Account</li>
            <li onClick={signOut}>Sign out</li>
          </ul>
        )}
      </div>
    </li>
  );
};

const mapStateToProps = (state) => ({
  accountName: state.firebase.profile.name,
});

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
