import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice"
import specReducer from "../features/car/specSlice"
import roadsterReducer from "../features/car/roadsterSlice"

export const store = configureStore({
  reducer: {
    car: carReducer,
    spec: specReducer,
    roadster: roadsterReducer,
  },
});

