import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import homepageActionTypes from "../../actionTypes/homepage";

const initialState = {
  loading: false,
  error: "",
  startIndex: 0,
  endIndex: 6,
  data: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + homepageActionTypes.PEOPLE:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.PEOPLE:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.PEOPLE:
      return {
        ...state,
        error: action.payload,
      };
    case homepageActionTypes.NEXT_PERSON:
      return {
        ...state,
        startIndex: (state.startIndex += 6),
        endIndex: (state.endIndex += 6),
      };
    case homepageActionTypes.NEXT_PERSON_BY:
      return {
        ...state,
        startIndex: (state.startIndex += action.payload),
        endIndex: (state.endIndex += action.payload),
      };
    case homepageActionTypes.PREV_PERSON:
      return {
        ...state,
        startIndex: (state.startIndex -= 6),
        endIndex: (state.endIndex -= 6),
      };
    case homepageActionTypes.PREV_PERSON_BY:
      return {
        ...state,
        startIndex: (state.startIndex -= action.payload),
        endIndex: (state.endIndex -= action.payload),
      };
  }

  return state;
};

export default peopleReducer;
