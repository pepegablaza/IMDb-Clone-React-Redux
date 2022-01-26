import { COMING_SOON } from "../../../services/api";

import tvShowsActionTypes from "../../actionTypes/tvShows";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getComingSoon = (url) => async (dispatch) => {
  dispatch({
    type:
      fetchActionTypes.START_FETCHING_ + tvShowsActionTypes.COMING_SOON_SHOWS,
    payload: true,
  });
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type:
          fetchActionTypes.FAILED_FETCHING_ +
          tvShowsActionTypes.COMING_SOON_SHOWS,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type:
        fetchActionTypes.SUCCESS_FETCHING_ +
        tvShowsActionTypes.COMING_SOON_SHOWS,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type:
        fetchActionTypes.FAILED_FETCHING_ +
        tvShowsActionTypes.COMING_SOON_SHOWS,
      payload: err.message,
    });
  }
};

const next = (endIndex, data) => (dispatch) => {
  if (endIndex !== data.length) {
    dispatch({ type: tvShowsActionTypes.NEXT_COMING_SOON_SHOWS });
  }
};
const prev = (startIndex) => (dispatch) => {
  if (startIndex !== 0) {
    dispatch({ type: tvShowsActionTypes.PREV_COMING_SOON_SHOWS });
  }
};

const comingSoonActions = {
  getComingSoon,
  next,
  prev,
};

export default comingSoonActions;
