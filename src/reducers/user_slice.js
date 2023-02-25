import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { user_data: "" } };
const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload, "user sclie");
      state.value = action.payload;
      console.log(state.value,"state value");
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});
export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
