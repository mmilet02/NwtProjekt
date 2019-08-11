import {
  FETCH_TRIPS,
  FETCH_SINGLE_TRIP,
  DELETE_TRIP
} from "../constants/actions";

const initialState = {
  trips: [],
  trip: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRIPS:
      return {
        ...state,
        trips: action.payload
      };
    case FETCH_SINGLE_TRIP:
      return {
        ...state,
        trip: action.payload
      };
    case DELETE_TRIP:
      return {
        ...state,
        trips: state.trips.filter(trip => trip.id !== action.payload)
      };

    default:
      return state;
  }
}
