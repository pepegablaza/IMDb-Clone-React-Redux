import { COMING_SOON } from "../../../services/api";

import moviesActionTypes from "../../actionTypes/movies";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getComingSoon = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + moviesActionTypes.COMING_SOON,
    payload: true,
  });
  try {
    const response = await fetch(COMING_SOON);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.COMING_SOON,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + moviesActionTypes.COMING_SOON,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.COMING_SOON,
      payload: err.message,
    });
  }
};

const next = (endIndex, data) => (dispatch) => {
  if (endIndex !== data.length) {
    dispatch({ type: moviesActionTypes.NEXT_COMING_SOON });
  }
};
const prev = (startIndex) => (dispatch) => {
  if (startIndex !== 0) {
    dispatch({ type: moviesActionTypes.PREV_COMING_SOON });
  }
};

const comingSoonActions = {
  getComingSoon,
  next,
  prev,
};

export default comingSoonActions;
