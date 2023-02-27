import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const slice = createSlice({
  name: "signupInfo",
  initialState: {
    loading: false,
    isEmailAvailable: false,
    speakLanguage: "Persian",
    targetLanguage: "American English",
    motivation: "Other",
    pastExperience: "Not much",
    timeGoal: 30,
    age: "18-24",
    name: "",
    email: "",
  },
  reducers: {
    setTargetLanguage: (signupInfo, action) => {
      signupInfo.targetLanguage = action.payload;
    },
    setMotivation: (signupInfo, action) => {
      signupInfo.motivation = action.payload;
    },
    setPastExperience: (signupInfo, action) => {
      signupInfo.pastExperience = action.payload;
    },
    setTimeGoal: (signupInfo, action) => {
      signupInfo.timeGoal = action.payload;
    },
    setAge: (signupInfo, action) => {
      signupInfo.age = action.payload;
    },
    setName: (signupInfo, action) => {
      signupInfo.name = action.payload;
    },
    setEmail: (signupInfo, action) => {
      signupInfo.email = action.payload;
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
