import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "../features/tourSlice";
import notificationReducer from "../features/notificationSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    Tour: tourReducer,
    Notification: notificationReducer,
    Users: userReducer,
  },
});
