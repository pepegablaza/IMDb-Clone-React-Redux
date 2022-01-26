import moviesActionTypes from "../../actionTypes/movies";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import loadActionTypes from "../../actionTypes/loadActionTypes";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const mostPopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + moviesActionTypes.MOST_POPULAR:
      return { ...state, loading: action.payload };

    case fetchActionTypes.SUCCESS_FETCHING_ + moviesActionTypes.MOST_POPULAR:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.MOST_POPULAR:
      return {
        ...state,
        error: action.payload,
      };

    case loadActionTypes.START_LOADING + moviesActionTypes.MOST_POPULAR:
      return { ...state, loading: action.payload };

    case loadActionTypes.SUCCESS_LOADING + moviesActionTypes.MOST_POPULAR:
      return {
        ...state,
        loading: action.payload.loading,
        data: [...state.data, ...action.payload.data],
      };
    case loadActionTypes.FAILED_LOADING + moviesActionTypes.MOST_POPULAR:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
};

export default mostPopularReducer;
