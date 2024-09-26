import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    title:
      "How to Guide Facial Growth in Kids (Introduction To Orthotropics and Records)",
    description:
      "If not YOU, than WHO? Your eyes recognize that something is wrong when you see these gummy smiles. Guess what? It is not genetic. It is improper g",
    day: [],
    months: "October 2024",
    images: "",
  },

  {
    id: 2,
    title:
      "How to Guide Facial Growth in Kids (Early Interception 3-6 Yr Olds)",
    description:
      "If not YOU, than WHO? Your eyes recognize that something is wrong when you see these gummy smiles. Guess what? It is not genetic. It is improper growth, and you […]",
    day: [],

    months: "January 2025",
    images: "",
  },
];

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventHand: (state, actions) => {
      console.log(" Go to this event page", actions.payload);
    },
  },
});

export const { eventHand } = eventSlice.actions;

export default eventSlice.reducer;
