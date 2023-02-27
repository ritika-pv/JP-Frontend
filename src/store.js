import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UserSlice from "./reducers/user_slice";
import StateSlice from "./reducers/state_slice";
import CitySlice from "./reducers/city_slice";
import CartSlice from "./reducers/add_to_cart_slice";

const rootReducer = combineReducers({
  user: UserSlice,
  stateList: StateSlice,
  cityList: CitySlice,
  cart: CartSlice,
});
export const Store = configureStore({
  reducer: rootReducer,
});
