import { combineReducers, comnineReducers } from "redux";
import userReducer from "./user/user.reducer";
export default combineReducers({
  user: userReducer,
});
