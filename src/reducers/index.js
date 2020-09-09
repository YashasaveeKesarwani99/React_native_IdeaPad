import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import IdeaPadReducer from "./IdeaPadReducer";
export default combineReducers({
  auth: AuthenticationReducer,
  ideapad: IdeaPadReducer
});
