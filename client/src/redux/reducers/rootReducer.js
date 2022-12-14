import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cardReducer";

export default combineReducers({ userReducer, productReducer, cartReducer });