import {
  FETCH_TRIPS,
  FETCH_SINGLE_TRIP,
  DELETE_TRIP,
  EDIT_TRIP
} from "../constants/actions";
import axios from "axios";

export const fetchTrips = () => dispatch => {
  axios
    .get("/api/trips")
    .then(res => {
      dispatch({
        type: FETCH_TRIPS,
        payload: res.data
      });
    })
    .catch(err => console.log("ERROR", err));
};

export const fetchSingleTrip = id => (dispatch, getState) => {
  /*  const { state } = getState();
  console.log(getState().tripReducer.trips);
  problem ako korisnik bez loadanja svih tripiova dode samo na jedan koji ima bookmarkan->nece mu ga pokazat
  */
  axios
    .get("/api/trips/show/" + id)
    .then(res => {
      dispatch({
        type: FETCH_SINGLE_TRIP,
        payload: res.data
      });
    })
    .catch(err => console.log("Ups, something went wrong", err));
};

export const editTrip = (data, id) => dispatch => {
  axios
    .put("/api/trips/edit/" + id, data)
    .then(res => {
      console.log("Success");
      console.log(res);
      dispatch({
        type: EDIT_TRIP,
        payload: data
      });
      window.location.href = "/trips";
    })
    .catch(err => {
      console.log("Error", err);
    });
};

export const deleteTrip = id => dispatch => {
  axios
    .delete("/api/trips/delete/" + id)
    .then(res => {
      dispatch({
        type: DELETE_TRIP,
        payload: id
      });
      window.location.href = "/trips";
    })
    .catch(err => console.log("Ups, something went wrong", err));
};
