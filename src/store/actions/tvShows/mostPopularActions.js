import tvShowsActionTypes from "../../actionTypes/tvShows";
import { POPULAR_TV } from "../../../services/api";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import loadActionTypes from "../../actionTypes/loadActionTypes";

const getMostPopular = () => async (dispatch) => {
  dispatch({
    type:
      fetchActionTypes.START_FETCHING_ + tvShowsActionTypes.MOST_POPULAR_SHOWS,
    payload: true,
  });
  try {
    const response = await fetch(POPULAR_TV);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type:
          fetchActionTypes.FAILED_FETCHING_ +
          tvShowsActionTypes.MOST_POPULAR_SHOWS,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type:
        fetchActionTypes.SUCCESS_FETCHING_ +
        tvShowsActionTypes.MOST_POPULAR_SHOWS,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type:
        fetchActionTypes.FAILED_FETCHING_ +
        tvShowsActionTypes.MOST_POPULAR_SHOWS,
      payload: err.message,
    });
  }
};

const loadMore = () => async (dispatch) => {
  let page = 1;
  dispatch({
    type: loadActionTypes.START_LOADING + tvShowsActionTypes.MOST_POPULAR_SHOWS,
    payload: true,
  });
  try {
    page++;
    const response = await fetch(`${POPULAR_TV}&page=${page}`);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type:
          loadActionTypes.FAILED_LOADING +
          tvShowsActionTypes.MOST_POPULAR_SHOWS,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type:
        loadActionTypes.SUCCESS_LOADING + tvShowsActionTypes.MOST_POPULAR_SHOWS,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type:
        loadActionTypes.FAILED_LOADING + tvShowsActionTypes.MOST_POPULAR_SHOWS,
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

const mostPopularActions = {
  getMostPopular,
  getMovieYear,
  loadMore,
};

export default mostPopularActions;
