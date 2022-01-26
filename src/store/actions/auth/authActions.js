import authActionTypes from "../../actionTypes/auth/index";

const openRegisterForm = () => (dispatch) => {
  dispatch({ type: authActionTypes.REGISTER_FORM });
};
const openSignInForm = () => (dispatch) => {
  dispatch({ type: authActionTypes.SIGNIN_FORM });
};

const setName = (value) => (dispatch) => {
  dispatch({ type: authActionTypes.SET_NAME, payload: value });
};
const setEmail = (value) => (dispatch) => {
  dispatch({ type: authActionTypes.SET_EMAIL, payload: value });
};
const setPassword = (value) => (dispatch) => {
  dispatch({ type: authActionTypes.SET_PASSWORD, payload: value });
};

const createAccount =
  (account) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(account.email, account.password);

      await firestore.collection("users").doc(res.user.uid).set({
        name: account.name,
      });
      dispatch({
        type: authActionTypes.AUTH_SUCCESS,
        payload: "Account Created Successfully!",
      });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: authActionTypes.AUTH_FAILED, payload: err.message });
    }
  };

export const signIn =
  (account) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(account.email, account.password);
      dispatch({ type: authActionTypes.AUTH_SUCCESS, payload: "Signed In!" });
    } catch (err) {
      dispatch({ type: authActionTypes.AUTH_FAILED, payload: err.message });
    }
  };
export const signOut =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err.message);
    }
  };

const authActions = {
  openRegisterForm,
  openSignInForm,
  setName,
  setEmail,
  setPassword,
  createAccount,
  signIn,
  signOut,
};

export default authActions;
