import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "./features/about/aboutSlice";
import bannerReducer from "./features/banner/bannnerSlice";
import discoverReducer from "./features/discover/discoverSlice";
import educationReducer from "./features/education/educationSlice";
import eventReducer from "./features/event/eventSlice";

import homeReducer from "./features/home/homeSlice";
import scienceReducer from "./features/science/scienceSlice";
import shopReducer from "./features/shop/shopSlice";
import newsFeedReducer from "./features/newsfeed/newsFeedSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    banner: bannerReducer,
    discover: discoverReducer,
    education: educationReducer,
    home: homeReducer,
    newsfeed: newsFeedReducer,
    science: scienceReducer,
    search: searchReducer,
    shop: shopReducer,
    events: eventReducer,
  },
});
