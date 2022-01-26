import { combineReducers } from "redux";
import discoverReducer from "./discoverReducer";
import trendingReducer from "./trendingReducer";
import featureReducer from "./featureReducer";
import peopleReducer from "./peopleReducer";

const homepageReducer = combineReducers({
  discover: discoverReducer,
  trending: trendingReducer,
  feature: featureReducer,
  people: peopleReducer,
});
export default homepageReducer;
