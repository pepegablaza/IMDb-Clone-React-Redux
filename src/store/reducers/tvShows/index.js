import { combineReducers } from "redux";
import mostPopularReducer from "./mostPopularReducer";
import comingSoonReducer from "./comingSoonReducer";
import topRatedReducer from "./topRatedReducer";

const tvShowsReducer = combineReducers({
  mostPopular: mostPopularReducer,
  comingSoon: comingSoonReducer,
  topRated: topRatedReducer,
});
export default tvShowsReducer;
