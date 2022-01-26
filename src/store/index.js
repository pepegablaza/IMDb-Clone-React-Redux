import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createFirestoreInstance, reduxFirestore } from "redux-firestore";
import { applyMiddleware, createStore, compose } from "redux";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { reduxFirebase } from "react-redux-firebase";

// object containing Firebase config
const fbConfig = {
  apiKey: "AIzaSyB7tzjRvtWOztVy52eEw5FY15wmuNnEwRY",
  authDomain: "netflix-clone-b8470.firebaseapp.com",
  projectId: "netflix-clone-b8470",
  storageBucket: "netflix-clone-b8470.appspot.com",
  messagingSenderId: "847141607830",
  appId: "1:847141607830:web:cee2f4a055cf3ade3fe5b7",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();

const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })) // to add other middleware
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
  rfConfig: reduxFirebase,
};
