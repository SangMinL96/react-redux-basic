import { combineReducers } from "redux";
import todos from "./todos";
import postApi from "./postApi";

const rootReducer = combineReducers({
  todos,
  postApi,
});

export default rootReducer;
