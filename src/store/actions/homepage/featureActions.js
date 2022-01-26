import { FEATURED } from "../../../services/api";

import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getFeatures = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + homepageActionTypes.FEATURES,
    payload: true,
  });
  try {
    const response = await fetch(FEATURED);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.FEATURES,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.FEATURES,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.FEATURES,
      payload: err.message,
    });
  }
};

const nextFeature = (end, data) => (dispatch) => {
  let diff = data.length - end;
  if (diff < 6) {
    console.log(diff);
    dispatch({ type: homepageActionTypes.NEXT_FEATURE_BY, payload: diff });
  } else {
    dispatch({ type: homepageActionTypes.NEXT_FEATURE });
  }
};

const prevFeature = (start, data) => (dispatch) => {
  let surplus = data.length + start - data.length;
  if (surplus < 6) {
    dispatch({ type: homepageActionTypes.PREV_FEATURE_BY, payload: surplus });
  } else {
    dispatch({ type: homepageActionTypes.PREV_FEATURE });
  }
};

const featureActions = {
  getFeatures,
  nextFeature,
  prevFeature,
};

export default featureActions;
