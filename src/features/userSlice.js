import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: `Users`,
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const { getUser, removeUser } = userSlice.actions;
