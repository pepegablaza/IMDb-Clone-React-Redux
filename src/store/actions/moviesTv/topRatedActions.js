import moviesActionTypes from "../../actionTypes/movies";
import { TOP_RATED_MOVIES } from "../../../services/api";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import loadActionTypes from "../../actionTypes/loadActionTypes";

const getTopRated = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + moviesActionTypes.TOP_RATED,
    payload: true,
  });
  try {
    const response = await fetch(TOP_RATED_MOVIES);
    const json = await response.json();
    const data = json.results;

    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.TOP_RATED,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + moviesActionTypes.TOP_RATED,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.TOP_RATED,
      payload: err.message,
    });
  }
};

const loadMore = () => async (dispatch) => {
  let page = 1;
  dispatch({
    type: loadActionTypes.START_LOADING + moviesActionTypes.TOP_RATED,
    payload: true,
  });
  try {
    page++;
    const response = await fetch(`${TOP_RATED_MOVIES}&page=${page}`);
    const json = await response.json();
    const data = json.results;

    if (!data) {
      dispatch({
        type: loadActionTypes.FAILED_LOADING + moviesActionTypes.TOP_RATED,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: loadActionTypes.SUCCESS_LOADING + moviesActionTypes.TOP_RATED,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: loadActionTypes.FAILED_LOADING + moviesActionTypes.TOP_RATED,
      payload: err.message,
    });
  }
};

const getMovieYear = (release_date) => {
  let splittedDate = release_date.split("");
  let slicedDate = splittedDate.slice(0, 4);
  let movieYear = slicedDate.join("");
  return movieYear;
};

const topRatedActions = {
  getTopRated,
  getMovieYear,
  loadMore,
};

export default topRatedActions;
