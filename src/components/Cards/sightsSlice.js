import { createSlice } from "@reduxjs/toolkit";

export const activeSightSlice = createSlice({
  name: "mySlice",
  initialState: {
    value: 0,
    activeSight: 1,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeActiveSight: (state, action) => {
      state.activeSight = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, changeActiveSight } =
  activeSightSlice.actions;

export const selectCount = (state) => state.mySlice.activeSight;

export default activeSightSlice.reducer;
