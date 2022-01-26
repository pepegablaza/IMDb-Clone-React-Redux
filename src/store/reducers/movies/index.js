import { combineReducers } from "redux";
import comingSoonReducer from "./comingSoonReducer";
import mostPopularReducer from "./mostPopularReducer";
import topRatedReducer from "./topRatedReducer";

const moviesReducer = combineReducers({
  comingSoon: comingSoonReducer,
  mostPopular: mostPopularReducer,
  topRated: topRatedReducer,
});
export default moviesReducer;
