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
      console.log(action.payload, "payload");
      console.log(state.value.cartItems,"inital value of state");
      const newCartItems = [...state.value.cartItems, action.payload];
      console.log(newCartItems,"new cartitems");
      state.value.cartItems = newCartItems;
      console.log(state.value,"final state");
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
