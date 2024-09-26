import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    demoText: "this is sample one",
  },

  {
    id: 2,
    demoText: "this is sample two",
  },

  {
    id: 3,
    demoText: "this is sample three",
  },
];

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    demoAdd: (state, actions) => {
      let newTodo = {
        id: Math.random(),
        demoText: actions.payload.demotexts,
      };

      state.demoText.push(newTodo);
    },

    demoEdit: (state, actions) => {
      console.log(" edit id:", actions.payload);
    },

    demoDel: (state, actions) => {
      console.log(" del id:", actions.payload);
    },
  },
});

export const { demoAdd, demoDel, demoEdit } = bannerSlice.actions;

export default bannerSlice.reducer;
