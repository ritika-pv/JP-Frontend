import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    cartItems: [],
  },
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
