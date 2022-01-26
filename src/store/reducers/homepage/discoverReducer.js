import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const initialState = {
  loading: false,
  activeIndex: 0,
  error: "",
  data: [],
};

const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + homepageActionTypes.DISCOVERS:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.DISCOVERS:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };
    case fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.DISCOVERS:
      return {
        ...state,
        error: action.payload,
      };
    case homepageActionTypes.NEXT_DISCOVER:
      return {
        ...state,
        activeIndex: (state.activeIndex = state.activeIndex + 1),
      };
    case homepageActionTypes.PREV_DISCOVER:
      return {
        ...state,
        activeIndex: (state.activeIndex = state.activeIndex - 1),
      };
  }

  return state;
};

export default discoverReducer;
