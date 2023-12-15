import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../data";
const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  //   reducers: {
  //     increment: (state) => {
  //       state.value += 1;
  //     },
  //   },
});

// export const { increment } = counterSlice.actions;

export default cartSlice.reducer;
