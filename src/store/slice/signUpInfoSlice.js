import { createSlice } from "@reduxjs/toolkit";

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
