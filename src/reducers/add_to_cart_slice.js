import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState:{
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(state.cartItems, "cart ki state");
      const newCartItems = [...state.cartItems, action.payload];
      state.cartItems = newCartItems;
      console.log(state.cartItems, "cart ki state");
    },

    removeFromCart: (state, action) => {
      console.log(state.cartItems, "previous state n");
      // const indexToDelete = state.cartItems.findIndex(
      //   (item) => item._id === action.payload
      // );
      // console.log(indexToDelete, "indextoDelete");
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
