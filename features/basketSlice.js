import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default basketSlice.reducer;
