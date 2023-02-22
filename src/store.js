import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/user_slice";

export const Store = configureStore({reducer:{
    user:UserSlice.reducer
}});