import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../data";
const initialState = {
  products: storeData,
  items: [],
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.items.push(action.payload);
      state.amount += 1;
    },
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
