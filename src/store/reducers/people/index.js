import { combineReducers } from "redux";
import latestReducer from "./latestReducer";
import mostPopularReducer from "./mostPopularReducer";

const peopleReducer = combineReducers({
  latest: latestReducer,
  mostPopular: mostPopularReducer,
});
export default peopleReducer;
