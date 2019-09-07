import {
  FETCH_TRIPS,
  FETCH_SINGLE_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
  CLEAR_TRIP,
  ADD_COMMENT,
  ADD_LIKE
} from "../constants/actions";
import axios from "axios";

export const fetchTrips = () => dispatch => {
  axios
    .get("/api/trips")
    .then(res => {
      console.log("TRIPS FETCHED");
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
  console.log(id);
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

export const clearTrip = () => dispatch => {
  dispatch({
    type: CLEAR_TRIP
  });
};

export const addComment = (id, comment) => dispatch => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  axios
    .post(
      "/api/trips/comment/" + id,
      {
        comment
      },
      config
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ADD_COMMENT,
        payload: res.data.comment
      });
    })
    .catch(err => {
      console.log("Error in COMMENTING", err);
    });
};

export const addLike = id => (dispatch, getState) => {
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  axios
    .post("/api/trips/like/" + id, null, config)
    .then(res => {
      console.log("LIKING RES", res.data.trip);
      console.log(getState().tripReducer.trips);
      let newTrips = getState().tripReducer.trips.map(trip => {
        if (trip.id == res.data.trip.id) {
          trip = res.data.trip;
        }
        return trip;
      });
      console.log(newTrips);
      dispatch({
        type: ADD_LIKE,
        payload: newTrips
      });
    })
    .catch(err => {
      console.log("Error in LIKING", err);
    });
};
