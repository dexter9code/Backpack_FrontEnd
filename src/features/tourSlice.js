import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  tour: [],
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
    getTour(state, action) {
      state.tour = [action.payload];
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

export const { checkLoading, getTours, checkStatus, getTour } =
  TourSlice.actions;

export default TourSlice.reducer;
