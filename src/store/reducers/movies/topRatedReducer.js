import moviesActionTypes from "../../actionTypes/movies";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import loadActionTypes from "../../actionTypes/loadActionTypes";

const initialState = {
  loading: false,
  page: 1,
  error: "",
  data: [],
};

const topRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + moviesActionTypes.TOP_RATED:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + moviesActionTypes.TOP_RATED:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };

    case fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.TOP_RATED:
      return {
        ...state,
        error: action.payload,
      };

    case loadActionTypes.START_LOADING + moviesActionTypes.TOP_RATED:
      return { ...state, loading: action.payload };

    case loadActionTypes.SUCCESS_LOADING + moviesActionTypes.TOP_RATED:
      return {
        ...state,
        loading: action.payload.loading,
        data: [...state.data, ...action.payload.data],
      };
    case loadActionTypes.FAILED_LOADING + moviesActionTypes.TOP_RATED:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
};

export default topRatedReducer;
