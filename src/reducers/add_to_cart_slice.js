import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(state.cartItems, "cart ki state");
      const newCartItems = [...state.cartItems, action.payload];
      state.cartItems = newCartItems;
      console.log(state.cartItems, "cart ki state");
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
