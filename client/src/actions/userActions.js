import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT,
  USER_LOADED,
  USER_LOADED_FAIL,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  CLEAR_ERRORS,
  FETCH_USER
} from "../constants/actions";
import axios from "axios";

export const userLoaded = () => dispatch => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };

  axios
    .get("/api/users/", config)
    .then(res => {
      console.log("SUCCESS");
      console.log("User loaded palyload", res.data);
      dispatch({
        type: USER_LOADED,
        payload: res.data.user
      });
    })
    .catch(err => {
      console.log("Failure", err);
      if (err.response) {
        console.log("Error", err.response.data.msg);
        localStorage.removeItem("token");
      }
      dispatch({
        type: USER_LOADED_FAIL
      });
    });
};

export const userLogin = body => dispatch => {
  axios
    .post("/api/users/login", body)
    .then(res => {
      console.log(res.data.token);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      console.log("user_login action", res.data);
      dispatch({
        type: USER_LOGIN,
        payload: res.data.user
      });
    })
    .catch(err => {
      console.log("ERROR", err);
      if (err.response) {
        console.log(err.response.data.msg);
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: err.response.data.msg
        });
      }
    });
};

export const userRegister = body => dispatch => {
  axios
    .post("/api/users/register", body)
    .then(res => {
      console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      dispatch({
        type: USER_REGISTER,
        payload: res.data.user
      });
    })
    .catch(err => {
      console.log("Auth failed", err);
      if (err.response) {
        console.log(err.response.data);
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: err.response.data.msg
        });
      }
    });
};

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER
  });
};
export const userLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: USER_LOGOUT
  });
  window.location.href = "/";
};

export const clearningErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
