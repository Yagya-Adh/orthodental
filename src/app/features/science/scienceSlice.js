import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "arrow_forward Treatment Through Research, Evidence and Reasoning",
    descriptions:
      "Traditionally orthodontists have been taught that the size and shape of the jaws is inherited and most orthodontic treatment is based on this belief.",
  },

  {
    id: 2,
    title: "Orthotropics evidence",
    descriptions: "Learn about different evidences on Orthotropics.",
  },

  {
    id: 3,
    title: "arrow_forward Orthodontic evidence",
    descriptions:
      "Orthodontic clinicians in the past have been severely criticised by scientists for ignoring the scientific evidence.",
  },

  {
    id: 4,
    title: "Orthotropic vs Orthodontic evidence",
    descriptions: "Comparison between Orthotropic and Orthodontic Evidences.",
  },

  {
    id: 5,
    title: "Research projects",
    descriptions:
      "The research projects and papers can present your ideas in response to information found in the clinic, laboratory and library sources.",
  },

  {
    id: 6,
    title: "Case studies",
    descriptions: "View our latest case studies from real people.",
  },
];

export const scienceSlice = createSlice({
  name: "science",
  initialState,
  reducers: {
    scienceSinglePage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { scienceSinglePage } = scienceSlice.actions;

export default scienceSlice.reducer;
