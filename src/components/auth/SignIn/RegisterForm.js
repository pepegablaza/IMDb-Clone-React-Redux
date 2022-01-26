import React from "react";
import authActions from "../../../store/actions/auth/authActions";
import { connect } from "react-redux";

const RegisterForm = ({
  createAccount,
  account,
  setPassword,
  setEmail,
  setName,
  openRegisterForm,
  name,
  email,
  password,
}) => {
  return (
    <div className="register-form-container">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          createAccount(account);
        }}
      >
        <div className="title">
          <h1>Create Account</h1>
        </div>
        <label>Your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="at least  8 characters"
          value={password}
          min={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Re-enter password</label>
        <input type="password" />
        <button onClick={openRegisterForm} type="button">
          Back
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.auth.account,
  name: state.auth.account.name,
  email: state.auth.account.email,
  password: state.auth.account.password,
});

const mapDispatchToProps = {
  openRegisterForm: authActions.openRegisterForm,
  setName: authActions.setName,
  setEmail: authActions.setEmail,
  setPassword: authActions.setPassword,
  createAccount: authActions.createAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
