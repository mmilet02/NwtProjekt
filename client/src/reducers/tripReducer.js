import {
  FETCH_TRIPS,
  FETCH_SINGLE_TRIP,
  FETCH_USER_TRIPS,
  DELETE_TRIP,
  EDIT_TRIP,
  CLEAR_TRIP,
  ADD_COMMENT,
  ADD_LIKE
} from "../constants/actions";

const initialState = {
  trips: [],
  trip: {},
  comments: [],
  userTrips: []
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
        trip: action.payload,
        comments: action.payload.comments
      };
    case FETCH_USER_TRIPS:
      return {
        ...state,
        userTrips: action.payload
      };
    case DELETE_TRIP:
      return {
        ...state,
        trips: state.trips.filter(trip => trip.id !== action.payload)
      };
    case EDIT_TRIP:
      return {
        ...state,
        trip: action.payload
      };
    case CLEAR_TRIP:
      return {
        ...state,
        trip: {},
        comments: []
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case ADD_LIKE:
      return {
        ...state,
        trips: action.payload
      };
    default:
      return state;
  }
}
