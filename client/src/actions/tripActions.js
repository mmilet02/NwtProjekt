import {
  FETCH_TRIPS,
  FETCH_SINGLE_TRIP,
  DELETE_TRIP
} from "../constants/actions";
import axios from "axios";
import React, { Component } from "react";

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

export const fetchSingleTrip = id => dispatch => {
  console.log(id);
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
