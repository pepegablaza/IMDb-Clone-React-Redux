import moviesActionTypes from "../../actionTypes/movies";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const initialState = {
  loading: false,
  error: "",
  data: [],
  startIndex: 0,
  endIndex: 4,
};

const comingSoonReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + moviesActionTypes.COMING_SOON:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + moviesActionTypes.COMING_SOON:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + moviesActionTypes.COMING_SOON:
      return {
        ...state,
        error: action.payload,
      };
    case moviesActionTypes.NEXT_COMING_SOON:
      return {
        ...state,
        startIndex: (state.startIndex += 4),
        endIndex: (state.endIndex += 4),
      };
    case moviesActionTypes.PREV_COMING_SOON:
      return {
        ...state,
        startIndex: (state.startIndex -= 4),
        endIndex: (state.endIndex -= 4),
      };
  }

  return state;
};

export default comingSoonReducer;
