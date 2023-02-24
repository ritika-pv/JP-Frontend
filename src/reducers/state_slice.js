import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const StateSlice = createSlice({
  name: "stateList",
  initialState: initialState,
  reducers: {
    getState: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { getState } = StateSlice.actions;
export default StateSlice.reducer;
