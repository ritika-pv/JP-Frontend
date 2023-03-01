import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user_slice";
import StateSlice from "./reducers/state_slice";
import CitySlice from "./reducers/city_slice";
import CartSlice from "./reducers/add_to_cart_slice";

export default configureStore({
  reducer:{
    user: UserSlice,
    stateList: StateSlice,
    cityList: CitySlice,
    cart: CartSlice,
  },
});
