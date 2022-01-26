import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const initialState = {
  loading: false,
  error: "",
  startIndex: 0,
  endIndex: 8,
  data: [],
};

const trendingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchActionTypes.START_FETCHING_ + homepageActionTypes.TRENDINGS:
      return { ...state, loading: action.payload };
    case fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.TRENDINGS:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
      };
    case fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.TRENDINGS:
      return { ...state, error: action.payload };
  }

  return state;
};

export default trendingsReducer;
