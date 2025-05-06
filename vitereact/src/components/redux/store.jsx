import { configureStore, createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    decrementar: (state) => state - 1,
  },
});

export const { incrementar, decrementar } = contadorSlice.actions;

export const store = configureStore({
  reducer: {
    contador: contadorSlice.reducer,
  },
});