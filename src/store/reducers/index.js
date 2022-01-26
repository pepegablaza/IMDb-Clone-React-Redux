import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import homepageReducer from "./homepage/index";
import authReducer from "./auth/authReducer";
import moviesReducer from "./movies/index";
import tvShowsReducer from "./tvShows";
import peopleReducer from "./people";

export default combineReducers({
  auth: authReducer,
  homepage: homepageReducer,
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  people: peopleReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
