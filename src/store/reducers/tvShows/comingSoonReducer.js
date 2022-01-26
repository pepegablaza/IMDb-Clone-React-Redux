import tvShowsActionTypes from "../../actionTypes/tvShows";
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
    case fetchActionTypes.START_FETCHING_ +
      tvShowsActionTypes.COMING_SOON_SHOWS:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ +
      tvShowsActionTypes.COMING_SOON_SHOWS:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ +
      tvShowsActionTypes.COMING_SOON_SHOWS:
      return {
        ...state,
        error: action.payload,
      };
    case tvShowsActionTypes.NEXT_COMING_SOON_SHOWS:
      return {
        ...state,
        startIndex: (state.startIndex += 4),
        endIndex: (state.endIndex += 4),
      };
    case tvShowsActionTypes.PREV_COMING_SOON_SHOWS:
      return {
        ...state,
        startIndex: (state.startIndex -= 4),
        endIndex: (state.endIndex -= 4),
      };
  }

  return state;
};

export default comingSoonReducer;
