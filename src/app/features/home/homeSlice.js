import { createSlice } from "@reduxjs/toolkit";

const initialState = [


  {
    id: 1,
    topic: "Discover",
    slug: "Practical guidance about Orthotropics.",
    inn: [
      { id: 1, listsInfo: "What is Orthotropics?" },
      { id: 2, listsInfo: "Orthotropics for dental practitioners" },
      { id: 3, listsInfo: "Orthotropics for parents" },
      { id: 4, listsInfo: "Orthotropics for the public" },
      { id: 5, listsInfo: "Find an Orthotropics expert" },
    ],
    visitlinkTitle: "More guidance on Orthotropics",
    path: "discover",
  },
  {
    id: 2,
    topic: "Education",
    slug: "Educational information about Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Training courses in Orthotropics " },
      { id: 2, listsInfo: "Educational centres for Orthotropics " },
      { id: 3, listsInfo: "History of Orthotropics education" },
      { id: 4, listsInfo: "Books and literature on Orthotropics" },
      { id: 5, listsInfo: "Useful links on orthotropics" },
    ],
    visitlinkTitle: "More resources on Orthotropics",
    path: "education",
  },
  {
    id: 3,
    topic: "Science",
    slug: "Following the data on Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Orthotropics evidence" },
      { id: 2, listsInfo: "Orthodontic evidence" },
      { id: 3, listsInfo: "Orthotropic vs Orthodontic evidence" },
      { id: 4, listsInfo: "Research projects" },
      { id: 5, listsInfo: "Case studies" },
    ],
    visitlinkTitle: "More scince on Orthotropics",
    path: "science",
  },
  {
    id: 4,
    topic: "About the IAFGG",
    slug: "Following the data on Orthotropics.",
    inn: [
      { id: 1, listsInfo: "Who we are and what we do" },
      { id: 2, listsInfo: "Members of the IAFGG" },
      { id: 3, listsInfo: "Latest news and blogs" },
      { id: 4, listsInfo: "Contact the IAFGG" },
    ],
    visitlinkTitle: "More about the IAFGG",
    path: "about-us",
  },
];

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homePage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { homePage } = homeSlice.actions;

export default homeSlice.reducer;
