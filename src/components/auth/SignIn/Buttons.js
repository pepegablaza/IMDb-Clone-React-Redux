import React from "react";
import { connect } from "react-redux";
import authActions from "../../../store/actions/auth/authActions";

const Buttons = ({ openRegisterForm, openSignInForm }) => {
  return (
    <div className="buttons-menu">
      <h2>Sign In</h2>
      <button className="btn sign-in imdb" onClick={openSignInForm}>
        <div className="btn-content">
          <i className="fab fa-imdb"></i>Sign in with IMDb
        </div>
      </button>
      <button className="btn sign-in fb">
        <div className="btn-content">
          <i className="fab fa-facebook"></i>Sign in with Facebook
        </div>
      </button>
      <button className="btn sign-in g">
        <div className="btn-content">
          <i className="fab fa-google"></i>Sign in with Google
        </div>
      </button>
      <p>or</p>
      <button className="btn create-account" onClick={openRegisterForm}>
        Create a New Account
      </button>
      <p className="conditions">
        By signing in, you agree to IMDb's Conditions of Use and Privacy Policy.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  openRegisterForm: authActions.openRegisterForm,
  openSignInForm: authActions.openSignInForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
