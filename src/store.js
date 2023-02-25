import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UserSlice from "./reducers/user_slice";
import StateSlice from "./reducers/state_slice";

const rootReducer = combineReducers({
  user: UserSlice,
  stateList: StateSlice,
});
export const Store = configureStore({
  reducer: rootReducer,
});
