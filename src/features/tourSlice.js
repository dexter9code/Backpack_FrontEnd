import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  isLoading: false,
  currentStatus: null,
};

const TourSlice = createSlice({
  name: "Tour",
  initialState,
  reducers: {
    getTours(state, action) {
      state.tours = [action.payload];
    },
    checkLoading(state, action) {
      state.isLoading = action.payload;
    },
    checkStatus(state, action) {
      state.currentStatus = {
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { checkLoading, getTours, checkStatus } = TourSlice.actions;

export default TourSlice.reducer;
