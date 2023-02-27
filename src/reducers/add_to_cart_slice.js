import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems:[]
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCartItems = [...state.cartItems, action.payload];
      state.cartItems = newCartItems;
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
