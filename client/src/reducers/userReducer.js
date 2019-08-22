import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOADED,
  USER_LOGOUT
} from "../constants/actions";

const initialState = {
  isLoggedIn: false,
  isAuthorized: false,
  token: null,
  user: {}
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
        ...state
      };
    case USER_LOGOUT:
      return {
        isLoggedIn: false,
        isAuthorized: false,
        token: null,
        user: {}
      };
    default:
      return state;
  }
}
