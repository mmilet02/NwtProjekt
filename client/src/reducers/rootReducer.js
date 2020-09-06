import { combineReducers } from "redux";
import tripReducer from "./tripReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  tripReducer,
  userReducer,
});

export default rootReducer;
