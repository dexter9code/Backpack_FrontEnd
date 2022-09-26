import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "../features/tourSlice";
import notificationReducer from "../features/notificationSlice";

export const store = configureStore({
  reducer: {
    Tour: tourReducer,
    Notification: notificationReducer,
  },
});
