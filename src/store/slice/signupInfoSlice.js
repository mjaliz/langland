import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "signupInfo",
  initialState: {
    error: null,
    loading: false,
    isEmailAvailable: false,
    speakLanguage: "Persian",
    targetLanguage: localStorage.getItem("targetLanguage"),
    motivation: localStorage.getItem("motivation"),
    pastExperience: localStorage.getItem("pastExperience"),
    timeGoal: localStorage.getItem("timeGoal"),
    age: localStorage.getItem("age"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  },
  reducers: {
    setTargetLanguage: (signupInfo, action) => {
      signupInfo.targetLanguage = action.payload;
      localStorage.setItem("targetLanguage", action.payload);
    },
    setMotivation: (signupInfo, action) => {
      signupInfo.motivation = action.payload;
      localStorage.setItem("motivation", action.payload);
    },
    setPastExperience: (signupInfo, action) => {
      signupInfo.pastExperience = action.payload;
      localStorage.setItem("pastExperience", action.payload);
    },
    setTimeGoal: (signupInfo, action) => {
      signupInfo.timeGoal = action.payload;
      localStorage.setItem("timeGoal", action.payload);
    },
    setAge: (signupInfo, action) => {
      signupInfo.age = action.payload;
      localStorage.setItem("age", action.payload);
    },
    setName: (signupInfo, action) => {
      signupInfo.name = action.payload;
      localStorage.setItem("name", action.payload);
    },
    setEmail: (signupInfo, action) => {
      signupInfo.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    checkEmailRequested: (signupInfo, action) => {
      signupInfo.loading = true;
    },
    checkEmailReceived: (signupInfo, action) => {
      signupInfo.loading = false;
      signupInfo.isEmailAvailable = action.payload.status;
    },
    checkEmailFailed: (signupInfo, action) => {
      signupInfo.loading = false;
      signupInfo.error = action.payload;
    },
    setPassword: (signupInfo, action) => {
      signupInfo.password = action.payload;
    },
  },
});

export const {
  setTargetLanguage,
  setMotivation,
  setPastExperience,
  setTimeGoal,
  setAge,
  setName,
  setEmail,
  checkEmailRequested,
  checkEmailReceived,
  checkEmailFailed,
} = slice.actions;

export default slice.reducer;

export const checkEmail = (email) =>
  apiCallBegan({
    url: "/users/check_email",
    method: "post",
    data: {
      email: email,
    },
    onStart: checkEmailRequested.type,
    onSuccess: checkEmailReceived.type,
    onError: checkEmailFailed.type,
  });
