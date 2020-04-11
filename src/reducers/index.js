import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
  player: playerReducer,
  course: courseReducer,
});
