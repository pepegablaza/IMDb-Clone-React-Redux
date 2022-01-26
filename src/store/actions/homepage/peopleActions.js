import { POPULAR_PEOPLE } from "../../../services/api";

import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getPeople = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + homepageActionTypes.PEOPLE,
    payload: true,
  });
  try {
    const response = await fetch(POPULAR_PEOPLE);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.PEOPLE,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.PEOPLE,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.PEOPLE,
      payload: err.message,
    });
  }
};

const nextPerson = (end, data) => (dispatch) => {
  let diff = data.length - end;
  if (diff < 6) {
    dispatch({ type: homepageActionTypes.NEXT_PERSON_BY, payload: diff });
  } else {
    dispatch({ type: homepageActionTypes.NEXT_PERSON });
  }
};

const prevPerson = (start, data) => (dispatch) => {
  let surplus = data.length + start - data.length;
  if (surplus < 6) {
    dispatch({ type: homepageActionTypes.PREV_PERSON_BY, payload: surplus });
  } else {
    dispatch({ type: homepageActionTypes.PREV_PERSON });
  }
};

const peopleActions = {
  getPeople,
  nextPerson,
  prevPerson,
};

export default peopleActions;
