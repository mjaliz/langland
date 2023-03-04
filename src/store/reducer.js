import { combineReducers } from "@reduxjs/toolkit";

import signUpInfoReducer from "./slice/signUpInfoSlice";

export default combineReducers({
  signUpInfo: signUpInfoReducer,
});
