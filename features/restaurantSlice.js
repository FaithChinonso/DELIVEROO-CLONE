import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    short_description: null,
    address: null,
    dishes: null,
    long: null,
    lat: null,
  },
  restaurants: [],
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    addRestaurants: (state, action) => {
      state.restaurants = [...state.restaurants, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant, addRestaurants } = restaurantSlice.actions;
export const selectBasketItems = state => state.basket.items;

export default restaurantSlice.reducer;
