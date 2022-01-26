import { DISCOVER } from "../../../services/api";

import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getDiscovers = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + homepageActionTypes.DISCOVERS,
    payload: true,
  });
  try {
    const response = await fetch(DISCOVER);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.DISCOVERS,
        payload: "Unable to fetch the data",
      });
    }
    console.log(
      fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.DISCOVERS
    );
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.DISCOVERS,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.DISCOVERS,
      payload: err.message,
    });
  }
};

const next = () => (dispatch) => {
  dispatch({ type: homepageActionTypes.NEXT_DISCOVER });
};
const prev = () => (dispatch) => {
  dispatch({ type: homepageActionTypes.PREV_DISCOVER });
};

const discoverActions = {
  getDiscovers,
  next,
  prev,
};

export default discoverActions;
