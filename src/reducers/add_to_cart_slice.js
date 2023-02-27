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
      console.log(action.payload, "addedToCart");
      console.log(state.value);
      state.value.cartItems.push(action.payload);
      console.log(state.value.cartItems);
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
