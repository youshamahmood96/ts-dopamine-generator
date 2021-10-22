import {  combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
    users: userReducer
})
export default rootReducer;