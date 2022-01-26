import tvShowsActionTypes from "../../actionTypes/tvShows";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const initialState = {
  loading: false,
  page: 1,
  error: "",
  data: [],
};

const topRatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + tvShowsActionTypes.TOP_RATED_SHOWS:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ +
      tvShowsActionTypes.TOP_RATED_SHOWS:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };

    case fetchActionTypes.FAILED_FETCHING_ + tvShowsActionTypes.TOP_RATED_SHOWS:
      return {
        ...state,
        error: action.payload,
      };

    case tvShowsActionTypes.START_LOADING_TOP_RATED_SHOWS:
      return { ...state, loading: action.payload };

    case tvShowsActionTypes.SUCCESS_LOADING_TOP_RATED_SHOWS:
      return {
        ...state,
        loading: action.payload.loading,
        data: [...state.data, ...action.payload.data],
      };
    case tvShowsActionTypes.FAILED_LOADING_TOP_RATED_SHOWS:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
};

export default topRatedReducer;
