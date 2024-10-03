import { createSlice } from "@reduxjs/toolkit";

// type check redux slice / solid
type CartCountState = {
  value: number;
};
const initialState: CartCountState = {
  value: 0,
};

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    addToCart: (state: CartCountState) => {
      state.value += 1;
    },
    removeFromCart: (state: CartCountState) => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
  },
});
export const { addToCart, removeFromCart } = cartCountSlice.actions;
export default cartCountSlice.reducer;
