import authActionTypes from "../../actionTypes/auth";

const initialState = {
  registerFormOpened: false,
  signInFormOpened: false,
  message: "",
  account: {
    name: "",
    email: "",
    password: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case authActionTypes.AUTH_FAILED: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case authActionTypes.SET_NAME: {
      return {
        ...state,
        account: { ...state.account, name: action.payload },
      };
    }
    case authActionTypes.SET_EMAIL: {
      return {
        ...state,
        account: { ...state.account, email: action.payload },
      };
    }
    case authActionTypes.SET_PASSWORD: {
      return {
        ...state,
        account: { ...state.account, password: action.payload },
      };
    }
    case authActionTypes.REGISTER_FORM: {
      return { ...state, registerFormOpened: !state.registerFormOpened };
    }
    case authActionTypes.SIGNIN_FORM: {
      return { ...state, signInFormOpened: !state.signInFormOpened };
    }
  }

  return state;
};

export default authReducer;
