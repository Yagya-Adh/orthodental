import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Thinking Beyond the Teeth",
    descriptions:
      "Orthotropics represents a new way of looking at crooked teeth.",
  },

  {
    id: 2,
    title: "Treatment Through Research , Evidence and Reasoning",
    descriptions: "The current state of orthodontic evidence",
  },

  {
    id: 3,
    title: "Healthy face healthy life",
    descriptions:
      "Attractiveness has become a double-edged sword in the skin deep modern society.",
  },

  {
    id: 4,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
  {
    id: 5,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
  {
    id: 6,
    title: "Why are teeth crooked?",
    descriptions: "All problems are a mix of genes and the environment.",
  },
];

export const newsFeedSlice = createSlice({
  name: "newsfeed",
  initialState,
  reducers: {
    singleNewsFeedsPage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { singleNewsFeedsPage } = newsFeedSlice.actions;

export default newsFeedSlice.reducer;
