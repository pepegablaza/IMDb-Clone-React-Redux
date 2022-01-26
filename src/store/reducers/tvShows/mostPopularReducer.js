import tvShowsActionTypes from "../../actionTypes/tvShows";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import loadActionTypes from "../../actionTypes/loadActionTypes";

const initialState = {
  loading: false,
  page: 1,
  error: "",
  data: [],
};

const mostPopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ +
      tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return { ...state, loading: action.payload };

    case fetchActionTypes.SUCCESS_FETCHING_ +
      tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };

    case fetchActionTypes.FAILED_FETCHING_ +
      tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return {
        ...state,
        error: action.payload,
      };

    case loadActionTypes.START_LOADING + tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return { ...state, loading: action.payload };

    case loadActionTypes.SUCCESS_LOADING +
      tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return {
        ...state,
        loading: action.payload.loading,
        data: [...state.data, ...action.payload.data],
      };
    case loadActionTypes.FAILED_LOADING + tvShowsActionTypes.MOST_POPULAR_SHOWS:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
};

export default mostPopularReducer;
