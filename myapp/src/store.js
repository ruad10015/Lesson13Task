import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
