import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    aboutSinglePage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { aboutSinglePage } = aboutSlice.actions;

export default aboutSlice.reducer;
