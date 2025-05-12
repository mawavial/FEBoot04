import {createSlice } from '@reduxjs/toolkit';

const CONTADOR = 0;

const contadorSlice = createSlice({
  name: 'contador',
  initialState: CONTADOR,
  reducers: {
    incrementar: (state) => state + 1,
    decrementar: (state) => state - 1,
  },
});

export const { incrementar, decrementar } = contadorSlice.actions;

export default contadorSlice.reducer;