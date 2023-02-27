import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "signupInfo",
  initialState: {
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
} = slice.actions;

export default slice.reducer;
