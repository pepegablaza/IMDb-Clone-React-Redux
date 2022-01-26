import React from "react";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import Overview from "./Overview";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

const SignIn = ({ registerFormOpened, signInFormOpened }) => {
  return (
    <div className="signin">
      {registerFormOpened && <RegisterForm />}
      {signInFormOpened && <SignInForm />}

      {!registerFormOpened && !signInFormOpened && (
        <>
          <Buttons />
          <Overview />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  registerFormOpened: state.auth.registerFormOpened,
  signInFormOpened: state.auth.signInFormOpened,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
