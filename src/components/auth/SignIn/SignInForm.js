import React from "react";
import authActions from "../../../store/actions/auth/authActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignInForm = ({
  account,
  email,
  password,
  setEmail,
  setPassword,
  openSignInForm,
  signIn,
}) => {
  const navigate = useNavigate();

  return (
    <div className="register-form-container">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          signIn(account);
          navigate("/");
        }}
      >
        <div className="title">
          <h1>Sign In</h1>
        </div>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          min={8}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={openSignInForm} type="button">
          Back
        </button>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.auth.account,
  email: state.auth.account.email,
  password: state.auth.account.password,
});

const mapDispatchToProps = {
  openSignInForm: authActions.openSignInForm,
  setEmail: authActions.setEmail,
  setPassword: authActions.setPassword,
  signIn: authActions.signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
