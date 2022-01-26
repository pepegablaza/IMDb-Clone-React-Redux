import { POPULAR_PEOPLE } from "../../../services/api";

import peopleActionTypes from "../../actionTypes/people";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getPopularPeople = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE,
    payload: true,
  });
  try {
    const response = await fetch(POPULAR_PEOPLE);
    const json = await response.json();
    const data = json.results;

    if (!data) {
      dispatch({
        type:
          fetchActionTypes.FAILED_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type:
        fetchActionTypes.SUCCESS_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type:
        fetchActionTypes.FAILED_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE,
      payload: err.message,
    });
  }
};

const next = (endIndex, data) => (dispatch) => {
  if (endIndex !== data.length) {
    dispatch({ type: peopleActionTypes.NEXT_PEOPLE });
  }
};
const prev = (startIndex) => (dispatch) => {
  if (startIndex !== 0) {
    dispatch({ type: peopleActionTypes.PREV_PEOPLE });
  }
};

const mostPopularActions = {
  getPopularPeople,
  next,
  prev,
};

export default mostPopularActions;
