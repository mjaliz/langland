import { combineReducers } from "@reduxjs/toolkit";

import signupInfoReducer from "./slice/signupInfoSlice";

export default combineReducers({
  signupInfo: signupInfoReducer,
});
