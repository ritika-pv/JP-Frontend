import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: "",
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "action ka payload");

      state.cartItems = action.payload;
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
