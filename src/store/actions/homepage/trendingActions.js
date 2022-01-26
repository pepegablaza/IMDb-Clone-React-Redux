import { TRENDING } from "../../../services/api";
import homepageActionTypes from "../../actionTypes/homepage";
import fetchActionTypes from "../../actionTypes/fetchActionTypes";

const getTrendings = () => async (dispatch) => {
  dispatch({
    type: fetchActionTypes.START_FETCHING_ + homepageActionTypes.TRENDINGS,
    payload: true,
  });
  try {
    const response = await fetch(TRENDING);
    const json = await response.json();
    const data = json.results;
    if (!data) {
      dispatch({
        type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.TRENDINGS,
        payload: "Unable to fetch the data",
      });
    }
    dispatch({
      type: fetchActionTypes.SUCCESS_FETCHING_ + homepageActionTypes.TRENDINGS,
      payload: {
        data,
        loading: false,
      },
    });
  } catch (err) {
    dispatch({
      type: fetchActionTypes.FAILED_FETCHING_ + homepageActionTypes.TRENDINGS,
      payload: err.message,
    });
  }
};

const trendingActions = {
  getTrendings,
};

export default trendingActions;
