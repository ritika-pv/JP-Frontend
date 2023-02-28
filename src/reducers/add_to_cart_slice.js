import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCartItems = [...state.cartItems, action.payload];
      state.cartItems = newCartItems;
    },
    removeFromCart: (state, action) => {
      console.log(action.payload, "payload");
      console.log(state.cartItems, "previous state");
      // const indexToDelete = state.cartItems.findIndex(
      //   (item) => item._id === action.payload
      // );
      // console.log(indexToDelete, "indextoDelete");
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
