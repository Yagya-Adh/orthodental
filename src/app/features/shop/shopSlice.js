import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    images: "",
    title:
      "the cause and cure of malocclusion by prof john mew spanish edition",
    price: null,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 2,
    images: "",
    title:
      "the cause and cure of malocclusion by prof john mew spanish edition",
    price: null,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 3,
    images: "",
    title: "sleep with buteyko",
    price: 20,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 4,
    images: "",
    title: "Shut Your Mouth",
    price: 18,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 5,
    images: "https://www.orthotropics.com/shop-item/myo-mini",
    title: "Myo Mini",
    price: 75,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 6,
    images: "",
    title: "The Mew Indicator Ruler",
    price: 16,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
  {
    id: 7,
    images: "",
    title: "Dial Calliper",
    price: 16,
    shoppingInfo: [],
    size: [],
    isAvailable: true,
  },
];

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    shopNow: (state, actions) => {
      console.log(" buy now item id:", actions.payload);
    },
  },
});

export const { shopNow } = shopSlice.actions;

export default shopSlice.reducer;
