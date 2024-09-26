import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchInforamation: (state, actions) => {
      console.log(" search here...", actions.payload);
    },
  },
});

export const { searchInforamation } = searchSlice.actions;

export default searchSlice.reducer;
