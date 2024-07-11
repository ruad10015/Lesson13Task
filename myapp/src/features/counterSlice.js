import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
    },
    setNumber2: (state, action) => {
      state.number2 = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setNumber1, setNumber2, setResult } = counterSlice.actions;
export default counterSlice.reducer;
