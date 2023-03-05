import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";

const token = "access_token";

const slice = createSlice({
  name: "signUpInfo",
  initialState: {
    speakLanguage: "Persian",
    targetLanguage: localStorage.getItem("targetLanguage"),
    motivation: localStorage.getItem("motivation"),
    pastExperience: localStorage.getItem("pastExperience"),
    timeGoal: localStorage.getItem("timeGoal"),
    age: localStorage.getItem("age"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    loading: false,
    error: null,
  },
  reducers: {
    setTargetLanguage: (signUpInfo, action) => {
      signUpInfo.targetLanguage = action.payload;
      localStorage.setItem("targetLanguage", action.payload);
    },
    setMotivation: (signUpInfo, action) => {
      signUpInfo.motivation = action.payload;
      localStorage.setItem("motivation", action.payload);
    },
    setPastExperience: (signUpInfo, action) => {
      signUpInfo.pastExperience = action.payload;
      localStorage.setItem("pastExperience", action.payload);
    },
    setTimeGoal: (signUpInfo, action) => {
      signUpInfo.timeGoal = action.payload;
      localStorage.setItem("timeGoal", action.payload);
    },
    setAge: (signUpInfo, action) => {
      signUpInfo.age = action.payload;
      localStorage.setItem("age", action.payload);
    },
    setName: (signUpInfo, action) => {
      signUpInfo.name = action.payload;
      localStorage.setItem("name", action.payload);
    },
    setEmail: (signUpInfo, action) => {
      signUpInfo.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    setPassword: (signUpInfo, action) => {
      signUpInfo.password = action.payload;
    },
    signUpRequested: (signUpInfo, action) => {
      signUpInfo.loading = true;
    },
    signUpReceived: (signUpInfo, action) => {
      signUpInfo.loading = false;
      localStorage.setItem(token, action.payload.data["access_token"]);
      window.location = "/";
    },
    signUpFailed: (signUpInfo, action) => {
      signUpInfo.loading = false;
      signUpInfo.error = action.payload;
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
  signUpRequested,
  signUpReceived,
  signUpFailed,
} = slice.actions;

export default slice.reducer;

export const signUp = (user) =>
  apiCallBegan({
    url: "/users",
    method: "post",
    data: user,
    onStart: signUpRequested.type,
    onSuccess: signUpReceived.type,
    onError: signUpFailed.type,
  });
