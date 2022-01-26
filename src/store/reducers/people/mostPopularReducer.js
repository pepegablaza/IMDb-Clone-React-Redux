import peopleActionTypes from "../../actionTypes/people";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const initialState = {
  loading: false,
  error: "",
  data: [],
  startIndex: 0,
  endIndex: 4,
};

const mostPopularReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + peopleActionTypes.POPULAR_PEOPLE:
      return {
        ...state,
        error: action.payload,
      };
    case peopleActionTypes.NEXT_PEOPLE:
      return {
        ...state,
        startIndex: (state.startIndex += 4),
        endIndex: (state.endIndex += 4),
      };
    case peopleActionTypes.PREV_PEOPLE:
      return {
        ...state,
        startIndex: (state.startIndex -= 4),
        endIndex: (state.endIndex -= 4),
      };
  }

  return state;
};

export default mostPopularReducer;
