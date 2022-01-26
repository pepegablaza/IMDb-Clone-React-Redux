import fetchActionTypes from "../../actionTypes/fetchActionTypes";
import homepageActionTypes from "../../actionTypes/homepage";

const initialState = {
  loading: false,
  error: "",
  startIndex: 0,
  endIndex: 6,
  data: [],
};

const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + homepageActionTypes.FEATURES:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.FEATURES:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.FEATURES:
      return {
        ...state,
        error: action.payload,
      };
    case homepageActionTypes.NEXT_FEATURE:
      return {
        ...state,
        startIndex: (state.startIndex += 6),
        endIndex: (state.endIndex += 6),
      };
    case homepageActionTypes.NEXT_FEATURE_BY:
      return {
        ...state,
        startIndex: (state.startIndex += action.payload),
        endIndex: (state.endIndex += action.payload),
      };
    case homepageActionTypes.PREV_FEATURE:
      return {
        ...state,
        startIndex: (state.startIndex -= 6),
        endIndex: (state.endIndex -= 6),
      };
    case homepageActionTypes.PREV_FEATURE_BY:
      return {
        ...state,
        startIndex: (state.startIndex -= action.payload),
        endIndex: (state.endIndex -= action.payload),
      };
  }

  return state;
};

export default featureReducer;
