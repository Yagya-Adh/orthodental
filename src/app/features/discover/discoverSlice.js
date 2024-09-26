import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "What is Orthotropics?",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 2,
    title: "Orthotropics for dental practitioners",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 3,
    title: "Orthotropics for parents",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },

  {
    id: 4,
    title: "Orthotropics for patients",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },

  {
    id: 5,
    title: "Orthotropics for the public",
    descriptions:
      "Orthotropists believe that malocclusion is a biological problem which should be treated naturally not by mechanics and surgery.",
  },

  {
    id: 6,
    title: "Find an Orthotropist",
    descriptions:
      "For most dentists their orthodontic education was a complex and difficult art shrouded in mystery.",
  },
];

export const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    discoverPage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { discoverPage } = discoverSlice.actions;

export default discoverSlice.reducer;
