import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOADED,
  USER_LOADED_FAIL,
  USER_LOGOUT
} from "../constants/actions";

const initialState = {
  isLoggedIn: false,
  isAuthorized: false,
  token: null,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
    case USER_REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user
      };
    case USER_LOADED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    case USER_LOGOUT:
      return {
        isLoggedIn: false,
        isAuthorized: false,
        token: null,
        user: null
      };
    case USER_LOADED_FAIL:
    case USER_LOGIN_FAIL:
      return {
        isLoggedIn: false,
        isAuthorized: false,
        token: null,
        user: null
      };
    default:
      return state;
  }
}
