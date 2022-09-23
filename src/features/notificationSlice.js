import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: `Notification`,
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    hideNotification(state) {
      state.notification = null;
    },
  },
});

export const { hideNotification, showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
